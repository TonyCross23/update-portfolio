import { contact } from "../data/site"

export function StackRibbon() {
  return (
    <div className="stack-ribbon" aria-label={`Working with ${contact.stack.join(", ")}`}>
      <div className="stack-ribbon-track" aria-hidden="true">
        {[0, 1].map((copy) => <div className="stack-ribbon-group" key={copy}>{contact.stack.map((item) => <span key={item}><i>✳</i>{item}</span>)}</div>)}
      </div>
    </div>
  )
}
