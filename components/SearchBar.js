import React from "react";
import TextField from '@material-ui/core/TextField';

export default function SearchBar({query, onChange}) {
  return (
    <div>
      <TextField
        id="standard-full-width"
        label="Search"
        style={{ margin: 8 }}
        placeholder="Hero"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
        value={query}
      />
    </div>
  );
}
