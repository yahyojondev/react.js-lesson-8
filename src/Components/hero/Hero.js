import React,{memo} from 'react'
import { NavLink } from 'react-router-dom'
import { heroproduct } from '../../static/Router'

function Hero() {
    let heroitems = heroproduct?.map(el=>(
         <div key={el.id} className="hero__wrapper">
                <div className="hero__wrapper__left">
                    <h1 className="hero__wrapper__title">{el.title}</h1>
                    <p className="hero__wrapper__text">{el.text}</p>
                    <NavLink className="hero__wrapper__btn" to={"/login"}>{el.link}</NavLink>
                </div>
                <img src={el.img} alt="" className="hero__wrapper__img" />
            </div>
    ))
  return (
    <div className='hero'>
        <div className="container">
            {heroitems}
        </div>
    </div>
  )
}

export default memo(Hero)