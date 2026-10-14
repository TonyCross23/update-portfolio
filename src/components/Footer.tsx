import { site } from "../data/site"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="wordmark" href="#top">
          tony<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
