// A small, dependency-free WebGL sculpture. All geometry is generated locally.
const vertexSource = `
  attribute vec3 aPosition;
  attribute vec3 aNormal;
  uniform vec3 uRotation;
  uniform float uAspect;
  varying vec3 vNormal;
  varying vec3 vPosition;
  mat3 rotateX(float a) { float c=cos(a),s=sin(a); return mat3(1.,0.,0.,0.,c,s,0.,-s,c); }
  mat3 rotateY(float a) { float c=cos(a),s=sin(a); return mat3(c,0.,-s,0.,1.,0.,s,0.,c); }
  mat3 rotateZ(float a) { float c=cos(a),s=sin(a); return mat3(c,s,0.,-s,c,0.,0.,0.,1.); }
  void main() {
    mat3 rotation=rotateY(uRotation.y)*rotateX(uRotation.x)*rotateZ(uRotation.z);
    vec3 p=rotation*aPosition;
    vPosition=p;
    vNormal=rotation*aNormal;
    float depth=4.8-p.z;
    gl_Position=vec4(p.x*2.65/uAspect,p.y*2.65,1.004*depth-.2004,depth);
  }
`
const fragmentSource = `
  precision mediump float;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uLight;
  void main() {
    vec3 n=normalize(vNormal);
    vec3 eye=normalize(vec3(0.,0.,4.8)-vPosition);
    vec3 r=reflect(-eye,n);
    float fresnel=pow(1.-max(dot(n,eye),0.),3.);
    float band=smoothstep(-.28,.06,r.y)-smoothstep(.35,.55,r.y);
    float softbox=pow(max(dot(r,normalize(vec3(-.7,1.,1.2))),0.),7.);
    float strip=pow(max(dot(r,normalize(vec3(1.,.3,.8))),0.),32.);
    float bottom=pow(max(dot(r,normalize(vec3(-.5,-1.,.4))),0.),12.);
    float diffuse=max(dot(n,normalize(vec3(-1.,2.,3.))),0.);
    vec3 base=mix(vec3(.055,.067,.065),vec3(.13,.15,.14),uLight);
    vec3 color=base+band*vec3(.26,.29,.28)+softbox*vec3(.67,.72,.69)+strip*vec3(.9,.97,.89);
    color+=bottom*vec3(.28,.36,.12)+fresnel*vec3(.19,.23,.19)+diffuse*.025;
    color*=.80+.20*smoothstep(-1.3,1.3,vPosition.y);
    color=pow(color,vec3(.88));
    gl_FragColor=vec4(color,1.);
  }
`
type Vec3 = [number, number, number]
function normalize(v: Vec3): Vec3 {
  const length = Math.hypot(...v)
  return [v[0] / length, v[1] / length, v[2] / length]
}
function cross(a: Vec3, b: Vec3): Vec3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
}
function center(t: number): Vec3 {
  const radius = 1 + 0.34 * Math.cos(3 * t)
  return [radius * Math.cos(2 * t), radius * Math.sin(2 * t), 0.56 * Math.sin(3 * t)]
}
function makeKnot() {
  const positions: number[] = [], normals: number[] = []
  const segments = 320, sides = 28
  const ring = (i: number, j: number) => {
    const t = (i / segments) * Math.PI * 2, v = (j / sides) * Math.PI * 2
    const p = center(t), next = center(t + 0.001)
    const tangent = normalize([next[0] - p[0], next[1] - p[1], next[2] - p[2]])
    const normal = normalize(cross(tangent, [0, 0, 1])), binormal = cross(tangent, normal)
    const n = normal.map((value, k) => value * Math.cos(v) + binormal[k] * Math.sin(v)) as Vec3
    return { p: p.map((value, k) => value + n[k] * 0.255), n }
  }
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < sides; j++) {
      const a = ring(i, j), b = ring(i + 1, j), c = ring(i + 1, j + 1), d = ring(i, j + 1)
      for (const vertex of [a, b, d, b, c, d]) {
        positions.push(...vertex.p)
        normals.push(...vertex.n)
      }
    }
  }
  return { positions: new Float32Array(positions), normals: new Float32Array(normals) }
}

export function createSculpture(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, powerPreference: "low-power" })
  if (!gl) return null
  const shaders: WebGLShader[] = [], buffers: WebGLBuffer[] = []
  const program = gl.createProgram()
  if (!program) return null
  function release() {
    buffers.forEach((buffer) => gl!.deleteBuffer(buffer))
    shaders.forEach((shader) => gl!.deleteShader(shader))
    gl!.deleteProgram(program)
  }
  try {
    for (const [type, source] of [[gl.VERTEX_SHADER, vertexSource], [gl.FRAGMENT_SHADER, fragmentSource]] as const) {
      const shader = gl.createShader(type)
      if (!shader) throw new Error("Shader unavailable")
      shaders.push(shader)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error("Shader compilation failed")
      gl.attachShader(program, shader)
    }
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Shader link failed")
    gl.useProgram(program)
    const geometry = makeKnot()
    for (const [name, data] of [["aPosition", geometry.positions], ["aNormal", geometry.normals]] as const) {
      const buffer = gl.createBuffer()
      if (!buffer) throw new Error("Buffer unavailable")
      buffers.push(buffer)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
      const attribute = gl.getAttribLocation(program, name)
      gl.enableVertexAttribArray(attribute)
      gl.vertexAttribPointer(attribute, 3, gl.FLOAT, false, 0, 0)
    }
    gl.enable(gl.DEPTH_TEST)
    gl.clearColor(0, 0, 0, 0)
    const rotation = gl.getUniformLocation(program, "uRotation")
    const aspect = gl.getUniformLocation(program, "uAspect")
    const light = gl.getUniformLocation(program, "uLight")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const hero = canvas.closest<HTMLElement>(".hero")!
    let frame = 0, time = 0, lastTime = 0
    let paused = false, visible = true, disposed = false
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }
    function draw(timestamp = 0) {
      frame = 0
      if (disposed || gl!.isContextLost()) return
      const moving = !paused && !reducedMotion.matches
      if (moving) time += Math.min((timestamp - lastTime) / 1000, 0.05)
      lastTime = timestamp
      pointer.x += (pointer.targetX - pointer.x) * 0.045
      pointer.y += (pointer.targetY - pointer.y) * 0.045
      gl!.viewport(0, 0, canvas.width, canvas.height)
      gl!.clear(gl!.COLOR_BUFFER_BIT | gl!.DEPTH_BUFFER_BIT)
      gl!.uniform1f(aspect, canvas.width / canvas.height)
      gl!.uniform1f(light, document.documentElement.classList.contains("dark") ? 0 : 1)
      gl!.uniform3f(rotation, 0.35 + Math.sin(time * 0.18) * 0.18 + pointer.y, time * 0.13 + pointer.x, -0.25)
      gl!.drawArrays(gl!.TRIANGLES, 0, geometry.positions.length / 3)
      if (moving && visible && !document.hidden) frame = requestAnimationFrame(draw)
    }
    function requestDraw() {
      if (!frame && !disposed && visible && !document.hidden) {
        lastTime = performance.now()
        frame = requestAnimationFrame(draw)
      }
    }
    function resize() {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, window.innerWidth < 650 ? 1.25 : 1.6)
      canvas.width = Math.max(1, Math.round(rect.width * ratio))
      canvas.height = Math.max(1, Math.round(rect.height * ratio))
      requestDraw()
    }
    function onPointer(event: PointerEvent) {
      if (paused || reducedMotion.matches || event.pointerType === "touch") return
      const bounds = hero.getBoundingClientRect()
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.65
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.4
    }
    function resetPointer() { pointer.targetX = 0; pointer.targetY = 0 }
    function refresh() {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      requestDraw()
    }
    const resizeObserver = new ResizeObserver(resize)
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh() })
    const themeObserver = new MutationObserver(requestDraw)
    resizeObserver.observe(canvas)
    intersection.observe(canvas)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    hero.addEventListener("pointermove", onPointer, { passive: true })
    hero.addEventListener("pointerleave", resetPointer)
    reducedMotion.addEventListener("change", refresh)
    document.addEventListener("visibilitychange", refresh)
    resize()
    return {
      setPaused(value: boolean) { paused = value; refresh() },
      dispose() {
        disposed = true
        cancelAnimationFrame(frame)
        resizeObserver.disconnect()
        intersection.disconnect()
        themeObserver.disconnect()
        hero.removeEventListener("pointermove", onPointer)
        hero.removeEventListener("pointerleave", resetPointer)
        reducedMotion.removeEventListener("change", refresh)
        document.removeEventListener("visibilitychange", refresh)
        release()
      },
    }
  } catch {
    release()
    return null
  }
}
