import PropTypes from 'prop-types';

function TopStoriesSelector({ onChange }) {
  const handleChange  = event => {
    onChange(event);
  }
  
    return (

      <div style={{ display: "flex",alignContent:"center", gap: "1rem" }}>
        <h3>Top Stories Topics:</h3>
          <select name="options" id="views" onChange={handleChange} >
            <option value="home.json" selected>Home</option>
            <option value="arts.json">Arts</option>
            <option value="automobiles.json" >Automobiles</option>
            <option value="business.json">Business</option>
            <option value="food.json">Food</option>
            <option value="health.json" >Health</option>
            <option value="movies.json">Movies</option>
            <option value="politics.json" >Politics</option>
            <option value="science.json">Science</option>
            <option value="sports.json" >Sports</option>
            <option value="us.json">US</option>
            <option value="world.json" >World</option>
          </select>
          </div>

  );
}

TopStoriesSelector.propTypes = {
    onChange: PropTypes.func.isRequired, // onChange should be a function and is required
  };
export default TopStoriesSelector;
