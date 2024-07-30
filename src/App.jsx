import { useEffect, useState } from 'react';
import './App.css'
import { fetchTimesTopStories } from './assets/apiCaller';
import { fetchTimesArticleSearch } from './assets/apiCaller';
import TopStoriesSelector from './assets/TopStoriesSelector';
import SearchBox from './assets/SearchBox';



function App() {


  const [timesData, setTimesData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [sortOption, setSortOption] = useState(''); // Default sort option


  // Initially load data for "home.json"
  useEffect(() => {
    fetchTimesTopStories("home.json").then((JSON) => {
      setTimesData(JSON);
    })
  }, []);
  // Handler for selecting data type
  const dataHandler = event => {
    setSearchData([]);
    const dataType = event.target.value;
    fetchTimesTopStories(dataType)
      .then(data => {

        setTimesData(data);
        setIsSearchButtonClicked(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  function renderSearchResults(data) {
    if (data.length !== 0) {
      return (
        <ul>
          {data.map(article => (
            <li key={article.headline.main}>
              {article.headline.main !== 'Untitled' ? (
                <div>
                  <a href={article.web_url} target="_blank">{article.headline.main}</a>
                  <p>{article.snippet}</p>
                </div>
              ) : (
                <a href={article.web_url} target="_blank">{article.snippet}</a>
              )}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Nothing found</p>;
    }
  }
  

  function dataHandler2(search, sort) {
    fetchTimesArticleSearch(search, sort)
      .then(data => {
        setSearchData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  function handleSearch() {
    setSearchData([]);
    // Get the value of the input field
    var searchData = document.getElementById('search').value;
    // Call dataHandler2 and pass the search data
    dataHandler2(searchData, sortOption);
    setIsSearchButtonClicked(true);
  }

  // Handle sort change
  function handleSortChange(selectedOption) {
    console.log(selectedOption);
    console.log(document.getElementById('sort'))
    setSortOption(selectedOption);
  }

  return (
    <>
      <h1>The New York Times</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>

        <TopStoriesSelector onChange={dataHandler} />
        <SearchBox onSearch={handleSearch} onSortChange={handleSortChange} />

      </div>
      
      {isSearchButtonClicked ? 
        renderSearchResults(searchData)
       : (
        <ul>
          {timesData.map((story, index) => (
            <li key={`${story.title}-${index}`}>
              <a href={story.url} target="_blank">{story.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
