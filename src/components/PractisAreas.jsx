import global from '../styles/_global.module.scss'
import s from '../styles/practisAreas.module.scss'
import { Sep } from '../public/Sep'
import { Business } from '../public/Business.jsx'
import { Construction } from '../public/Construction.jsx'
import { Car } from '../public/Car.jsx'
import { Wrongful } from '../public/Wrongful.jsx'
import { Criminal } from '../public/Criminal.jsx'
import { Family } from '../public/Family.jsx'

export function PractisAreas() {
  return (
    <>
      <section className={s.PractisAreas}>
        <div className={global.container}>
          <div className={s.content}>
            <div className={s.Description}>
              <div className={s.Title}>
                <h1>
                  Explore
                  <br />
                  Our Practice Areas
                </h1>
                <Sep />
              </div>
              <div className={s.SubTitle}>
                <text>
                  There are<strong> many variations of passages </strong>of
                  Lorem Ipsum available, but the majority have su alteration in
                  some form, by injected humour, oir
                  <strong> randomised workds </strong>
                  which don't look even slightly believable.
                </text>
              </div>
            </div>
            <div className={s.Cards}>
              <div className={s.Card}>
                <h4>Business Law</h4>
                <text>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </text>
                <div className={s.Buttons}>
                  <Business />
                  <button className={s.Button}>Learn More</button>
                </div>
              </div>
              <div className={s.Card}>
                <h4>Construction Law</h4>
                <text>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </text>
                <div className={s.Buttons}>
                  <Construction />
                  <button className={s.Button}>Learn More</button>
                </div>
              </div>
              <div className={s.Card}>
                <h4>Car Accident</h4>
                <text>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </text>
                <div className={s.Buttons}>
                  <Car />
                  <button className={s.Button}>Learn More</button>
                </div>
              </div>
              <div className={s.Card}>
                <h4>Wrongful Death</h4>
                <text>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </text>
                <div className={s.Buttons}>
                  <Wrongful />
                  <button className={s.Button}>Learn More</button>
                </div>
              </div>
              <div className={s.Card}>
                <h4>Criminal Law</h4>
                <text>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </text>
                <div className={s.Buttons}>
                  <Criminal />
                  <button className={s.Button}>Learn More</button>
                </div>
              </div>
              <div className={s.Card}>
                <h4>Family Law</h4>
                <text>
                  There are many variations of passages of Lorem Ipsum
                  available, but majority going to use a passage.
                </text>
                <div className={s.Buttons}>
                  <Family />
                  <button className={s.Button}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
