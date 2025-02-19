import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import SearchInput from '../../components/SearchInput/SearchInput';
import "./CharacterFilter.scss";
import {useState, useEffect} from "react";
import { getCharacters } from '../../api/ApiGeneral';
import CardFiltered from '../../components/CardFiltered/CardFiltered';

const CharacterFilter = () => {

    const [filteredData,setFilteredData]=useState();
    const [textSearched,setTextSearched]=useState();
    
    useEffect(()=>{
        getCharacters({limit:50,setResponse:setFilteredData})
    },[]);

    useEffect(()=>{
        if(textSearched){
            getCharacters({limit:50,nameStartsWith:textSearched,setResponse:setFilteredData})
        }
    },[textSearched]);

    return (
        <div>
            <MenuBar />
            <div className="character_filter--div_containter">
                <SearchInput className="character_filter--search_input" 
                    value={textSearched}
                    onChange={setTextSearched}
                />
                <div className='character_filter--results'>
                    {filteredData?.total ? filteredData?.total+" RESULTS":""} 
                </div>
                <div className="character_filter--results_data">
                    {filteredData?.results.map(elem=>{
                       return <CardFiltered data={elem}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default CharacterFilter;