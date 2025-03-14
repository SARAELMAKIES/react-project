import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import OneProduct from "../component/OneProduct";
import { getAllProducts, totalPages } from "../api/ProductApi";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomFilterMenu from "../component/CustomFilterMenu";
import { TextField, IconButton, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";



const List = () => {
    const [arr, setArr] = useState([]); // ניהול המוצרים במצב מקומי
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // מצב לטעינת נתונים
    const [error, setError] = useState(null); // טיפול בשגיאות
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)


    const fetchProducts = async () => {
        try {
            const response = await getAllProducts(currentPage, 4); // קריאה ל-API
            setArr(response.data); // שמירת המוצרים במצב
            setLoading(false); // עצירת טעינה
        } catch (err) {
            setError("Error fetching products!"); // טיפול בשגיאות
            setLoading(false); // עצירת טעינה
        }
    };

    const fetchTotalPages = async () => {
        try {
            const response = await totalPages(4);
            setTotalPage(response.data)
        }
        catch (err) {
            console.log(err);
            alert("error fetching total pages")
        }
    }

    const deleteProductFromArr = (id) => {
        let copy = arr.filter(p => p._id !== id)
        setArr(copy)
    }

    /**
     * בכל פעם שהעמוד הנוכחי משתנה
     */
    useEffect(() => {
        fetchProducts(); // קריאה ל-API כשמועלה הקומפוננטה
    }, [currentPage]);

    /**
     * רק בעת טעינת הדף
     */
    useEffect(() => {
        fetchTotalPages();
    }, []);

    const handleCartClick = () => {
        navigate("/cart");
    };


    return (
        <>

{/* <Box display="flex" alignItems="center" mb={2} justifyContent="flex-start" sx={{ ml: 6 }}>
        <TextField
          size="small"
        //   value={searchQuery}
        //   onChange={handleSearchChange}
          placeholder="search by name"
          variant="outlined"
          sx={{ width: "180px", mr: 1 }}
        /> */}
        <CustomFilterMenu />
      {/* </Box> */}

            <button onClick={handleCartClick}>Shopping cart</button>

            {loading ? ( // הצגת הודעה אם בטעינה
                <h1>Loading...</h1>
            ) : error ? ( // הצגת הודעת שגיאה אם יש
                <h1>{error}</h1>
            ) : arr.length === 0 ? ( // הצגת הודעה אם אין מוצרים
                <h1>No Product Found</h1>
            ) : (
                // <ul>
                //     {arr.map(item => (
                //         <li key={item._id}>
                //             <Link to={`details/${item._id}`}><OneProduct item={item} onDelete={deleteProductFromArr} /></Link>

                //         </li>
                //     ))}
                // </ul> 
                <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
                    {arr.map(item => (
                        <li key={item._id} style={{ margin: '10px', flex: '1 0 auto', maxWidth: '30%' }}>
                            <Link to={`details/${item._id}`} style={{ textDecoration: 'none' }}>
                                <OneProduct item={item} onDelete={deleteProductFromArr} style={{ width: '100%', height: 'auto' }} />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }}><ChevronLeftIcon /></button>
            <button>{currentPage}</button>

            <button onClick={() => { if (currentPage < totalPage) setCurrentPage(currentPage + 1) }}><ChevronRightIcon /></button>

            <Outlet />
        </>
    );
};

export default List;
