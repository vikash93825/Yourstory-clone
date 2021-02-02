import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';


function SearchBar() {
    const [ query, setQuery ] = useState('');

    return (
        <div>
            <form noValidate > 
        <div>        
        <TextField 
            id="outlined-search" 
            label="Search field" 
            type="search" 
            variant="outlined" 
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
    </form>
    </div>
    )
}

export default SearchBar
