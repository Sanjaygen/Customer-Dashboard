import { TextField } from "@mui/material";


const SearchBox = (props: any) => {
  const { handleSearchInput } = props;
  return (
   
        <TextField
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearchInput}
        />
  );
};

export default SearchBox;