import React, { useState, useEffect } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
    defaultValue?: string; // Add defaultValue prop
}

const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    defaultValue = "",
}) => {
    const [query, setQuery] = useState(defaultValue);

    useEffect(() => {
        setQuery(defaultValue); // Update query when defaultValue changes
    }, [defaultValue]);

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="d-flex">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="form-control"
                placeholder="Search..."
            />
            <button className="btn btn-primary ms-2" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
