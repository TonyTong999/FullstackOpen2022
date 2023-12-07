const Filter = ({ searchName, handleSearchChange }) => {

    return (
        <div>
            filter<input
                value={searchName}
                onChange={handleSearchChange}
            />
        </div>
    )
}
export default Filter