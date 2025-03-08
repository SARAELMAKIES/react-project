// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { TextField, Box, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

// const Search = () => {
//   const products = useSelector((state) => state.product.products) || []; // ודא שהנתיב נכון
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   useEffect(() => {
//     const result = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(result);
//   }, [searchQuery, products]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <>
//       <Box display="flex" alignItems="center" mb={2} justifyContent="flex-start" sx={{ ml: 6 }}>
//         <TextField
//           size="small"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder="Search by product name"
//           variant="outlined"
//           sx={{ width: "180px", mr: 1 }}
//         />
//       </Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Product Name</TableCell>
//             <TableCell>Product Details</TableCell>
//             <TableCell>Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {filteredProducts.map((product, index) => (
//             <TableRow key={index}>
//               <TableCell>{product.name}</TableCell>
//               <TableCell>{product.details}</TableCell>
//               <TableCell>{product.price}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// };

// export default Search;
