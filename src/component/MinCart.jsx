// import { Drawer, Button, Typography, Divider, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
// import { useSelector } from "react-redux";

// const MinCart = ({ setCartPopupOpen, cartPopupOpen }) => {

//     const cart = useSelector(state => state.cart.arr); // כדי להציג את הסל

//     return (<>
//         {/* מודל קטן להצגת הסל */}
//         <Drawer open={cartPopupOpen} onClose={(e) => { e.preventDefault(); setCartPopupOpen(false); }} aria-labelledby="cart-popup-title" aria-describedby="cart-popup-description"
//             sx={{
//                 width: 350, // Increased width
//                 flexShrink: 0,
//                 '& .MuiDrawer-paper': {
//                     width: 350,
//                     padding: '20px',
//                     backgroundColor: '#f4f4f4', // Light background color
//                     borderRadius: '8px 0 0 8px', // Rounded corners
//                     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Shadow around the drawer
//                 },
//             }}>
//             <div style={{ textAlign: 'center' }}>
//                 <Typography variant="h5" id="cart-popup-title" gutterBottom>
//                     🛒  Shopping Cart
//                 </Typography>

//                 <List>
//                     {cart.map((cartItem) => (
//                         <ListItem key={cartItem._id} sx={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
//                             <ListItemText
//                                 primary={cartItem.name}
//                                 secondary={
//                                     <>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Quantity: {cartItem.qty}
//                                         </Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             Price: ${cartItem.price}
//                                         </Typography>
//                                     </>
//                                 }
//                             />
//                             <ListItemSecondaryAction>
//                                <img src={cartItem.img} alt="" />
//                             </ListItemSecondaryAction>
//                         </ListItem>
//                     ))}
//                 </List>

//                 <Divider sx={{ marginTop: '20px' }} />
//                 <Typography variant="h6" sx={{ marginTop: '20px' }}>
//                     Total: ${cart.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2)}
//                 </Typography>
//             </div>
//         </Drawer>
//     </>)
// }
// export default MinCart;
import { Drawer, Typography, Divider, List, ListItem, ListItemText, ListItemSecondaryAction, Box } from '@mui/material';
import { useSelector } from "react-redux";
import Logo from '../assets/logo.svg'; 

const MinCart = ({ setCartPopupOpen, cartPopupOpen }) => {
    const cart = useSelector(state => state.cart.arr); // Display the cart

    return (
        <Drawer 
            anchor="right" 
            open={cartPopupOpen} 
            onClose={() => setCartPopupOpen(false)} 
            aria-labelledby="cart-popup-title" 
            aria-describedby="cart-popup-description"
            sx={{
                width: 400,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 400,
                    padding: '20px',
                    backgroundColor: '#f0f4f8',
                    borderRadius: '8px 0 0 8px',
                    boxShadow: '0px 2px 30px rgba(0, 0, 0, 0.2)',
                },
            }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <img src={Logo} alt="Cart Logo" style={{ width: '400px', height: '150px', marginRight: '10px' }} />
                {/* <Typography variant="h5" id="cart-popup-title" gutterBottom>
                    Shopping Cart
                </Typography> */}
            </Box>

            <Divider sx={{ margin: '10px 0' }} />
            <List>
    {cart.map((cartItem) => {
        const imageUrl = cartItem.img; // ודא שהמשתנה מוגדר כאן

        return (
            <ListItem key={cartItem._id} sx={{ padding: '15px 0', display: 'flex', alignItems: 'center' }}>
                <ListItemText
                    primary={cartItem.name}
                    secondary={
                        <>
                            <Typography variant="body2" color="textSecondary">
                                Quantity: {cartItem.qty}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Price: ${cartItem.price.toFixed(2)}
                            </Typography>
                        </>
                    }
                />
                <ListItemSecondaryAction>
                    <img 
                        src={imageUrl} // השתמש במשתנה כאן
                        alt={cartItem.name} 
                        style={{ maxWidth: '60px', borderRadius: '4px', marginLeft: '10px' }} 
                    />
                </ListItemSecondaryAction>
            </ListItem>
        );
    })}
</List>

            <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Total: ${cart.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2)}
            </Typography>
        </Drawer>
    );
}

export default MinCart;

