import React from 'react';
import PropTypes from 'prop-types';
import logoHeart from "../../img/LogoHeart.png";
import logoHeartWhite from "../../img/LogoHeartWhite.png";

import "./HeartBtn.scss";

const HeartBtn = props => {
    const { onClick, className, isFav } = props;
    return (
        <div className={"heart_btn " + className} onClick={e => { onClick(e.target.value) }}>
            <img className='heart_btn--img' src={isFav ? logoHeart : logoHeartWhite} />
        </div>
    );
};

HeartBtn.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    isFav: PropTypes.bool

};

export default HeartBtn;