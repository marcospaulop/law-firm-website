import { Sep } from '../public/sep'
import global from '../styles/_global.module.scss'
import s from '../styles/aboutus.module.scss'

import aboutusphoto1 from '../public/aboutusphotos1.png'
import aboutusphoto2 from '../public/aboutusphotos2.png'
import aboutusprofile from '../public/aboutusprofilephoto.png'
import { DocumentIcon } from '../public/document'

export function AboutUs() {
  return (
    <>
      <div className={`${global.content}, ${s.container}`}>
        <div className={s.images}>
          <img src={aboutusphoto1} alt="" />
          <img src={aboutusphoto2} alt="" />
        </div>
        <div className={s.content}>
          <div className={s.heading}>
            <h4>
              The Simple Choice
              <br />
              for Complex Litigation
            </h4>
            <Sep />
          </div>
          <div className={s.subcontent}>
            <text>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have su alteration in some form, by injected
              humour, oir randomised workds which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything.
            </text>
            <div className={s.author}>
              <img src={aboutusprofile} alt="" />
              <div className={s.authorname}>Peter Park</div>
            </div>

            <div className={s.data}>
              <div className={s.cases}>
                <DocumentIcon />
                <text>
                  95%
                  <br />
                  Case Success
                </text>
              </div>
              <div className={s.experience}>
                <div className={s.years}>
                  <text>35</text>
                </div>
                <text>
                  Years
                  <br />
                  Experience
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={`${global.backgroundContent} ${s.background}`}></div>
    </>
  )
}
