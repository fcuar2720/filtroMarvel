import React from 'react';
import PropTypes from 'prop-types';
import logoHeart from "../../img/LogoHeart.png";
import "./HeartBtn.scss";

const HeartBtn = props => {
    const {onClick,className}=props;
    return (
        <div className={"heart_btn "+className} onClick={onClick}>
            <img className='heart_btn--img' src={logoHeart}/>
        </div>
    );
};

HeartBtn.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};

export default HeartBtn;