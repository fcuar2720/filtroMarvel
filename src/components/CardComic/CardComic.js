import React from 'react';
import PropTypes from 'prop-types';
import "./CardComic.scss";

const CardComic = props => {
    const { elem } = props;
    return (
        <div className='card_comic'>
            <img className='card_comic--img' src={elem.thumbnail.path + "." + elem.thumbnail.extension} alt={elem.name} />
            <div className='card_comic--title'>{elem.title}</div>
            <div className='card_comic--num'>{elem.issueNumber}</div>

        </div>
    );
};

CardComic.propTypes = {
    elem: PropTypes.object,

};

export default CardComic;