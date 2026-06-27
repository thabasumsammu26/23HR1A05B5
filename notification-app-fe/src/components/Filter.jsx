import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Filter({ value, onChange }) {
  return (
    <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel>Notification Type</InputLabel>

      <Select
        value={value}
        label="Notification Type"
        onChange={(event) => onChange(event.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filter;