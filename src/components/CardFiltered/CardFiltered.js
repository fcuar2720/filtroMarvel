import React from 'react';
import PropTypes from 'prop-types';
import "./CardFiltered.scss";
import HeartBtn from '../HeartBtn/HeartBtn';

const CardFiltered = props => {
    const {data}=props;
   
    return (
        <div className='card_filtered'>
            <img className='card_filtered--img' src={data.thumbnail.path+"."+data.thumbnail.extension} />
            <div className='card_filtered--red_bar'></div>
            <div className='card_filtered--bottom__data'>
                <div className='card_filtered--bottom__data--name'>{data.name}</div>
                <HeartBtn className='card_filtered--bottom__data--btn' onClick={()=>{alert("hola")}}/>
            </div>
        </div>
    );
};

CardFiltered.propTypes = {
    data: PropTypes.object
};

export default CardFiltered;