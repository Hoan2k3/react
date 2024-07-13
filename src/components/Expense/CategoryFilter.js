import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function CategoryFilter(props) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    props.onGetCategoryFilter(event.target.value);
  };

  return (
    <Box sx={{ width: 120, backgroundColor: '#4b4b4b', borderRadius: '12px' }}>
        <FormControl fullWidth>
            <InputLabel 
              id="demo-simple-select-label"
              sx={{color: 'white', fontWeight: 'bold'}}
            >Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCategory}
                label="Category"
                onChange={handleChange}
                sx={{color:'white'}}
            >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Essential'}>Essential</MenuItem>
                <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
            </Select>
        </FormControl>
    </Box>
  );
}

export default CategoryFilter;