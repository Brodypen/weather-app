import { useState } from "react";
import { OptionsOrGroups, GroupBase } from "react-select";
import { AsyncPaginate, Response } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../utils/api";

interface SearchProps {
  onSearchChange: Function;
}

const Search = ({onSearchChange}: SearchProps) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData: null) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue: null) => {
    fetch(`${GEO_API_URL}/cities?minPopulation=1000000`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      //@ts-ignore
      loadOptions={loadOptions}
    />
  );
}

export default Search;