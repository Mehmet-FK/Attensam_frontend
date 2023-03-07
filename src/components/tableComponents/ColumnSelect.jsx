import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ColumnSelect = ({ columns, selectedColumns, setSelectedColumns }) => {
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelectedColumns(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: 300, display: "flex", justifyContent: "center" }}
      >
        <InputLabel id="checkbox-label">Angezeigte Spalten</InputLabel>
        <Select
          labelId="checkbox-label"
          id="checkbox"
          multiple
          value={selectedColumns}
          onChange={handleChange}
          input={<OutlinedInput label="Angezeigte Spalten" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          size="small"
        >
          {columns.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedColumns.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default ColumnSelect;
