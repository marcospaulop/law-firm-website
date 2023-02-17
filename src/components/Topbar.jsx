import btn from '../styles/_buttons.module.scss'
import s from '../styles/topbar.module.scss'

import { Cart } from '../public/cart'
import { Icon } from '../public/icon'
import { Mail } from '../public/mail'
import { Tel } from '../public/tel'

export function Topbar() {
  return (
    <>
      <div className={s.topbar}>
        <div className={s.line}>
          <div className={s.logo}>
            <Icon />
            <h1>Attorneyster</h1>
          </div>
          <div className={s.buttons}>
            <div className={s.cart}>
              <Cart />
              Cart (0)
            </div>
            <div className={`${btn.default} ${btn.blackLowVisibility}`}>
              Book a Consultation
            </div>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.menu}>
            <a href="">Home</a>
            <a href="">About Us</a>
            <div>Pages</div>
            <a href="">Contact Us</a>
          </div>
          <div className={s.rowContainer}>
            <div className={s.contact}>
              <Tel />
              <div>
                <div>Call Us On:</div>
                <div>911-987654321</div>
              </div>
            </div>
            <div className={s.contact}>
              <Mail />
              <div>
                <div>Mail Us:</div>
                <div>yourmail@mail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
