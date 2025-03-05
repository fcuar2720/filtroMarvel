import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardFiltered from '../CardFiltered/CardFiltered';
import { getCharacterDetail } from '../../api/ApiGeneral';

const CardSearcher = props => {
    const { id } = props;
    const [char, setChar] = useState();

    useEffect(() => {
        getCharacterDetail({ id, setResponse: setChar });
    }, []);
    console.log('__char', char);
    return (char ? <CardFiltered data={char.results[0]} /> : null);
};

CardSearcher.propTypes = {
    id: PropTypes.string,
};

export default CardSearcher;