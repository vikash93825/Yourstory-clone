import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <form noValidate>
        <div>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ background: "white", width: "30%", borderRadius: "5px" }}
          />
        </div>
        <div>
          <Button variant="contained" color="secondary" style={{background:"#ef4136",margin:"12px"}}>
            List Your Companies
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
