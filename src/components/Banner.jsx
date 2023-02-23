import global from '../styles/_global.module.scss'
import btn from '../styles/_buttons.module.scss'
import s from '../styles/banner.module.scss'

import { Sep } from '../public/Sep'

export function Banner() {
  return (
    <>
      <section className={s.Banner}>
        <div className={global.container}>
          <div className={s.content}>
            <Sep />
            <h1>
              Deeper Understanding
              <br /> Better Solutions
            </h1>
            <text className={global.textGolden}>
              It is a long established fact that a reader will be distracted by
              the readable content of a looking at its layout.
            </text>
            <button className={`${btn.default} ${btn.golden}`}>
              get in touch
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
