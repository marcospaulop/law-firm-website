import global from '../styles/_global.module.scss'
import btn from '../styles/_buttons.module.scss'
import s from '../styles/banner.module.scss'

import image from '../public/image.png'

import { Sep } from '../public/sep'

export function Banner() {
  return (
    <>
      <div className={`${global.content} ${s.content}`}>
        <Sep />
        <h1>
          Deeper Understanding
          <br /> Better Solutions
        </h1>
        <text className={global.textGolden}>
          It is a long established fact that a reader will be distracted by the
          readable content of a looking at its layout.
        </text>
        <button className={`${btn.default} ${btn.golden}`}>get in touch</button>
      </div>
      <div className={`${global.backgroundContent} ${s.bannerBackground}`}>
        <img src={image} />
      </div>
    </>
  )
}
