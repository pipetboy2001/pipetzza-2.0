import React from 'react'
import {Logo} from "../../images/logo.jpeg"

export const Header = () => {
  return (
    <header>
      
      <a href="#"> 
        <div className='logo'>
          <box-icon name='pizza' type='solid' animation='spin' color='#fff' width="2000px" ></box-icon>
        </div>
      </a>

      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Crear tu pizza</a>
        </li>

        <div className='cart'>
          <box-icon name='cart' type='solid' color='#fff'>
          </box-icon>
          <span className='item_total'>0</span>
        </div>
      </ul>

    </header>
  )
}