// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../features/OrderSlice";
// import { Card, CardContent, CardMedia, Typography, Button, Modal, Drawer } from '@mui/material';
// import { deleteById } from "../api/ProductApi";
// import MinCart from "./MinCart";
// import FormProduct from "../pages/FormProduct";
// import { IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from "react-router-dom";

// const OneProduct = ({ item, showAddToCart = true, onDelete }) => {
//     const dispatch = useDispatch();
//     const currentUser = useSelector(state => state.user.user); //שךיפת משתמש נוכחי מהרידקס
//     const [cartPopupOpen, setCartPopupOpen] = useState(false); // מצב לחלון הקטן

//     const handleAddToCart = (event) => {
//         event.preventDefault();
//         dispatch(addItem({ _id: item._id, name: item.name, price: item.price, quantity: 1 }));

//         // הצגת המודל הקטן עם רשימת המוצרים
//         setCartPopupOpen(true);
//         setTimeout(() => {
//             setCartPopupOpen(false);
//         }, 1800);

//     };



//     const removeProduct = async () => {
//         try {
//             let res = await deleteById(item._id)
//             console.log(res.data);
//             onDelete(item._id)
//         }
//         catch (err) {
//             console.log(err)
//             alert("error in delete product");

//         }
//     }


//     return (
//         <div>
//             <Card className="product-container" >
//                 <CardMedia component="img" image={`../src/assets/${item.img}`} alt={item.name} className="product-image" />
//                 <CardContent>
//                     <Typography variant="h5">{item.name}</Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         price: ${item.price}
//                     </Typography>
//                     {showAddToCart && (<IconButton onClick={handleAddToCart}> add to cart  <ShoppingCartIcon /> </IconButton>)}
//                     {currentUser?.role == "MANAGER" && (<IconButton onClick={(e) => { e.preventDefault(); removeProduct }}><DeleteIcon /></IconButton>)}
//                     {currentUser?.role == "MANAGER" && (<Link to="/FormProduct" state={item}><IconButton> <EditIcon /> </IconButton></Link>)}

//                 </CardContent>
//             </Card>
//             {cartPopupOpen && <MinCart setCartPopupOpen={setCartPopupOpen} cartPopupOpen={cartPopupOpen} />}
          

//         </div>
//     );
// };

// export default OneProduct;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/OrderSlice";
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { deleteById } from "../api/ProductApi";
import MinCart from "./MinCart";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const OneProduct = ({ item, showAddToCart = true, onDelete }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.user);
    const [cartPopupOpen, setCartPopupOpen] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false); // מצב אהבה

    const handleAddToCart = (event) => {
        event.preventDefault();
        dispatch(addItem({ _id: item._id, name: item.name, price: item.price, quantity: 1 }));
        setCartPopupOpen(true);
        setTimeout(() => {
            setCartPopupOpen(false);
        }, 1800);
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const removeProduct = async () => {
        try {
            let res = await deleteById(item._id);
            console.log(res.data);
            onDelete(item._id);
        } catch (err) {
            console.log(err);
            alert("error in delete product");
        }
    };

    return (
        <Box sx={{ 
            maxWidth: 300, // רוחב קבוע
            height: '280px', // גובה קבוע
            margin: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '40px', // הגדל את העיגול
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', 
            transition: 'transform 0.2s', 
            '&:hover': { transform: 'scale(1.05)' } 
        }}>
            <Card sx={{ borderRadius: '20px',width:300 }}> {/* הוסף עיגול גם לכרטיס */}
                <CardMedia
                    component="img"
                    image={`../src/assets/${item.img}`}
                    alt={item.name}
                    sx={{ height: 140, objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        <IconButton onClick={toggleFavorite} color="error" sx={{ borderRadius: '50%' }}>
                            {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                        {showAddToCart && (
                            <IconButton onClick={handleAddToCart} color="primary">
                                <ShoppingCartIcon />
                            </IconButton>
                        )}
                        {currentUser?.role === "MANAGER" && (
                            <>
                                <IconButton onClick={(e) => { e.preventDefault(); removeProduct() }} color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                                <Link to="/FormProduct" state={item}>
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                            </>
                        )}
                    </Box>
                </CardContent>
            </Card>
            {cartPopupOpen && <MinCart setCartPopupOpen={setCartPopupOpen} cartPopupOpen={cartPopupOpen} />}
        </Box>
        // <Box sx={{ maxWidth: 345, margin: '20px', border: '1px solid #ddd', borderRadius: '16px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
        //     <Card>
        //         <CardMedia
        //             component="img"
        //             image={`../src/assets/${item.img}`}
        //             alt={item.name}
        //             sx={{ height: 140, objectFit: 'cover' }}
        //         />
        //         <CardContent>
        //             <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        //                 {item.name}
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 Price: ${item.price.toFixed(2)}
        //             </Typography>
        //             <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        //                 <IconButton onClick={toggleFavorite} color="error" sx={{ borderRadius: '50%' }}>
        //                     {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        //                 </IconButton>
        //                 {showAddToCart && (
        //                     <IconButton onClick={handleAddToCart} color="primary">
        //                         <ShoppingCartIcon />
        //                     </IconButton>
        //                 )}
        //                 {currentUser?.role === "MANAGER" && (
        //                     <>
        //                         <IconButton onClick={(e) => { e.preventDefault(); removeProduct() }} color="secondary">
        //                             <DeleteIcon />
        //                         </IconButton>
        //                         <Link to="/FormProduct" state={item}>
        //                             <IconButton color="primary">
        //                                 <EditIcon />
        //                             </IconButton>
        //                         </Link>
        //                     </>
        //                 )}
        //             </Box>
        //         </CardContent>
        //     </Card>
        //     {cartPopupOpen && <MinCart setCartPopupOpen={setCartPopupOpen} cartPopupOpen={cartPopupOpen} />}
        // </Box>
    );
};

export default OneProduct;