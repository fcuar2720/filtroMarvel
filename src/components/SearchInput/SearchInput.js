import React from 'react';
import Lens from "../../img/lens.png";
import PropTypes from 'prop-types';
import "./SearchInput.scss";

const SearchInput = (props) => {
    const { className, onChange, value } = props;

    return (
        <div className={"search_input " + className}>
            <img className='search_input--img' src={Lens} />
            <input className='search_input--input' placeholder='SEARCH A CHARACTER...'
                value={value}
                onChange={e => {
                    onChange(e.target.value)
                }}
            />

        </div>
    );
};

SearchInput.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default SearchInput;
