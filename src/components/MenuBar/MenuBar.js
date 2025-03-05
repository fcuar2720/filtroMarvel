import React from 'react';
import "./MenuBar.scss";
import logoMarvel from "../../img/LogoMarvel.png";
import HeartBtn from '../HeartBtn/HeartBtn';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';



const MenuBar = () => {
    const favCharacters = useSelector((state) => state.favCharacters);

    return (
        <div className="menu_bar">
            <Link to="/"><img className='menu_bar--logo_marvel' src={logoMarvel}/></Link>
            <div className='menu_bar--logo_heart'>
                <Link to="/favorites"><HeartBtn isFav/></Link>
                <div className='menu_bar--logo_heart--num'>{favCharacters.length}</div>
            </div>

        </div>
    );
};

export default MenuBar;