import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBar({ query, onChange }) {
  return (
    <div>
      <TextField
        id="outlined-secondary"
        label="Hero"
        style={{ margin: 20 }}
        variant="outlined"
        color="primary"
        onChange={onChange}
        value={query}
      />
    </div>
  );
}
