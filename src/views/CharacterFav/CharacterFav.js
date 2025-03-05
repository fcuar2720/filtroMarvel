import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import "./CharacterFav.scss";
import { useSelector } from 'react-redux';
import CardSearcher from '../../components/CardSearcher/CardSearcher';

const CharacterFav = () => {

    const favCharacters = useSelector((state) => state.favCharacters);

    return (
        <div>
            <MenuBar />
            <div className='Character_fav--container'>
                <div className='Character_fav--container--text'>
                    FAVORITES
                </div>
                <div className='Character_fav--container--results_data'>
                    {favCharacters.map(elem => { return <CardSearcher key={elem} id={elem} /> })}
                </div>
            </div>
        </div>
    );
};

export default CharacterFav;