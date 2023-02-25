import './SearchBar.scss';

const SearchBar = ({ searcInputText, setSearcInputText }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearcInputText(e.target.value.toLowerCase());
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search by Brand or Model"
        onChange={handleChange}
        value={searcInputText}
      />
    </div>
  );
};

export default SearchBar;
