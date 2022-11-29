const Search = (props) => {
    const {handleChange, searchRobots} = props;
    return (
        <>
            <input type="text" onChange={handleChange} />
            <button onClick={searchRobots}>Search</button>
        </>
    )
}

export default Search;