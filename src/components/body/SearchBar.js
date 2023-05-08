import { useState } from "react"

const SearchBar = ({ setSearchInput, SearchData, SearchInput, AllResData, setFilteredData }) => {
  const [ClearSearch, setClearSearch] = useState(false);
 

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const search = SearchData(SearchInput, AllResData);
      setFilteredData(search);
      setClearSearch(true);
 
    }
  };

  const handleSearchClick = () => {
    const search = SearchData(SearchInput, AllResData);
    setFilteredData(search);
    setClearSearch(true);

  };

  const handleClearClick = () => {
    setClearSearch(false);
    setFilteredData(AllResData);
   
  };

  return (
    <>
      <div className="search-bar">
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyDown={handleKeyPress}
          type="text"
          name="search"
          placeholder="Search"
        />
        <button onClick={handleSearchClick}>Search</button>
        {ClearSearch && (
          <button
            style={{ backgroundColor: "red", marginLeft: "5px" }}
            onClick={handleClearClick}
          >
            Clear
          </button>
        )}
      
      </div>
    </>
  );
};

export default SearchBar;
