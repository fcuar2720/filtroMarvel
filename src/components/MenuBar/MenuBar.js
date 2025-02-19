import React from 'react';
import "./MenuBar.scss";
import logoMarvel from "../../img/LogoMarvel.png";
import logoHeart from "../../img/LogoHeart.png";
import HeartBtn from '../HeartBtn/HeartBtn';



const MenuBar = () => {
    return (
        <div className="menu_bar">
            <img className='menu_bar--logo_marvel' src={logoMarvel}/>
            <div className='menu_bar--logo_heart'>
                <HeartBtn onClick={()=>{alert("hola")}}/>
                <div className='menu_bar--logo_heart--num'>3</div>
            </div>

        </div>
    );
};

export default MenuBar;