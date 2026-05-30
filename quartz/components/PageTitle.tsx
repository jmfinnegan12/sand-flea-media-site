import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <svg class="page-title-logo" viewBox="0 0 26 22" aria-hidden="true" focusable="false">
          <g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <path d="M3 8 Q 8 3 13 8 T 23 8"></path>
            <path d="M3 15 Q 8 10 13 15 T 23 15"></path>
          </g>
        </svg>
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: #2f6b43;
}
:root[saved-theme="dark"] .page-title-link {
  color: #8fc79a;
}
.page-title-logo {
  height: 1.5rem;
  width: auto;
  flex: none;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
