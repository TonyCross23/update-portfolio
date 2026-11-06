import { useEffect, useRef, useState } from "react"
import { createSculpture } from "../lib/sculpture"

export default function Sculpture({ paused }: { paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const controller = useRef<ReturnType<typeof createSculpture>>(null)
  const [ready, setReady] = useState(false)
  const [contextVersion, setContextVersion] = useState(0)

  useEffect(() => {
    const element = canvas.current
    if (!element) return
    const lost = (event: Event) => { event.preventDefault(); setReady(false) }
    const restored = () => setContextVersion((version) => version + 1)
    element.addEventListener("webglcontextlost", lost)
    element.addEventListener("webglcontextrestored", restored)
    controller.current = createSculpture(element)
    setReady(controller.current !== null)
    return () => {
      controller.current?.dispose()
      controller.current = null
      element.removeEventListener("webglcontextlost", lost)
      element.removeEventListener("webglcontextrestored", restored)
    }
  }, [contextVersion])

  useEffect(() => { controller.current?.setPaused(paused) }, [paused, contextVersion])

  return <canvas ref={canvas} className={`sculpture-canvas${ready ? " is-ready" : ""}`} aria-hidden="true" />
}
