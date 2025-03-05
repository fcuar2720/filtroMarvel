import React, { useEffect, useState } from 'react';
import "./ImgDetailsChar.scss";
import HeartBtn from '../HeartBtn/HeartBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, remFav } from '../../redux/actions';
import { getComics } from '../../api/ApiGeneral';
import CardComic from '../CardComic/CardComic';

const ImgDetailsChar = () => {
    const dataChar = useSelector((state) => state.dataChar);
    const favCharacters = useSelector((state) => state.favCharacters);
    const dispatch = useDispatch();
    const [comics, setComics] = useState();

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
    useEffect(() => {
        if (dataChar.id) {
            getComics({ id: dataChar.id, setResponse: setComics });
        }
    }, [dataChar.id]);

    console.log('__comics', comics);
    return (
        <div className='img_details_char'>
            <div className='img_details_char--details'>
                <img className='img_details_char--details--img' src={dataChar.thumbnail.path + "." + dataChar.thumbnail.extension} alt={dataChar.name} />
                <div className='img_details_char--details--info'>
                    <div className='img_details_char--details--info--name'>
                        <div className='img_details_char--details--info--name--text'>{dataChar.name}</div>
                        <HeartBtn
                            onClick={() => { addRemFav(dataChar.id); }}
                            isFav={isFav(dataChar.id)} />
                    </div>
                    <div>{dataChar.description}</div>
                </div>

            </div>
            <div className='img_details_char--comics'>
                <div className='img_details_char--comics--text'>
                    COMICS
                </div>
                <div className='img_details_char--comics--carrusel'>
                    {comics?.results.map(elem => {
                        return <CardComic key={elem.id} elem={elem} />
                    })}

                </div>
            </div>
        </div>
    );
};

export default ImgDetailsChar;