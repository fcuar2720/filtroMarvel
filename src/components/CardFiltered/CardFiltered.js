import React from 'react';
import PropTypes from 'prop-types';
import "./CardFiltered.scss";
import HeartBtn from '../HeartBtn/HeartBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, remFav, saveDetails } from '../../redux/actions';
import { Link } from 'react-router';

const CardFiltered = props => {
    const { data } = props;
    const dispatch = useDispatch();
    const favCharacters = useSelector((state) => state.favCharacters);

    const isFav = (id) => {
        return favCharacters.includes(id);
    }

    const addRemFav = (id) => {
        if (isFav(id)) {
            remFav(dispatch, id);
        } else {
            addFav(dispatch, id);
        }
    }

    const saveCharacterDetails = () => {
        saveDetails(dispatch, data);
    }

    return (
        <div className='card_filtered'>
            <Link to="/details">
                <img
                    className='card_filtered--img'
                    src={data.thumbnail.path + "." + data.thumbnail.extension}
                    onClick={() => { saveCharacterDetails() }} />
            </Link>

            <div className='card_filtered--red_bar'></div>
            <div className='card_filtered--bottom__data'>
                <div className='card_filtered--bottom__data--name'>{data.name}</div>
                <HeartBtn className='card_filtered--bottom__data--btn' onClick={() => { addRemFav(data.id) }} isFav={isFav(data.id)} />
            </div>

        </div>
    );
};

CardFiltered.propTypes = {
    data: PropTypes.object,
};

export default CardFiltered;