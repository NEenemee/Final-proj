import PropTypes from 'prop-types';
import { useState } from 'react';

function SearchBox({ onSearch, onSortChange  }) {
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText, sortOption);
    };
    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
        onSortChange(selectedOption);
    }


    return (
        <div style={{ display: "flex", alignContent:"center", gap: "1rem" }}>
            <h3>Search:</h3>
            <input type="search" id="search" value={searchText} onChange={handleChange} placeholder='Cats'/>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="">No Sort</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="relevance">Relevance</option>
            </select>
            <button name="searchBtn" onClick={handleSearch}>Search</button>
        </div>
    );
   
}
SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired, // onChange should be a function and is required
    onSortChange: PropTypes.func.isRequired,
  };
export default SearchBox;