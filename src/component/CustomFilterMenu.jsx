import React, { useState } from "react";
import { Popover, IconButton, Box, Typography, MenuItem, Select, Button, Switch } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";

const CustomFilterMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: "All",
    color: "All",
   
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectChange = (key) => (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: event.target.value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: "All",
      priceRange: "All",
      color: "All",
      
    });
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <FilterAltIcon />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2, width: 250 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Filter</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" mt={2}>Category</Typography>
          <Select fullWidth value={filters.category} onChange={handleSelectChange('category')}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Women">Women</MenuItem>
            <MenuItem value="Men">Men</MenuItem>
            <MenuItem value="Children">Children</MenuItem>
            <MenuItem value="Infants">Infants</MenuItem>
          </Select>

          <Typography variant="body2" mt={2}>Price Range</Typography>
          <Select fullWidth value={filters.priceRange} onChange={handleSelectChange('priceRange')}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="100-200">\\\$100 - \\\$200</MenuItem>
            <MenuItem value="200-300">\\\$200 - \\\$300</MenuItem>
            <MenuItem value="300-400">\\\$300 - \\\$400</MenuItem>
            <MenuItem value="400-500">\\\$400 - \\\$500</MenuItem>
          </Select>

          <Typography variant="body2" mt={2}>Color</Typography>
          <Select fullWidth value={filters.color} onChange={handleSelectChange('color')}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Red">Red</MenuItem>
            <MenuItem value="Blue">Blue</MenuItem>
            <MenuItem value="Green">Green</MenuItem>
            <MenuItem value="Black">Black</MenuItem>
            <MenuItem value="White">White</MenuItem>
          </Select>

          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="body2"> Reset Filters</Typography>
            <Switch 
              
              onChange={(e) => resetFilters({ ...filters })} 
            />
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="primary">Save</Button>
          </Box>

          {/* <Button variant="outlined" color="secondary" onClick={resetFilters} mt={2}>
            Reset Filters
          </Button> */}
        </Box>
      </Popover>
    </div>
  );
};

export default CustomFilterMenu;
