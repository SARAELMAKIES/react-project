import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addOrder } from '../api/OrderApi';

const OrderForm = ({ open, handleClose }) => {
    const [address, setAddress] = useState('');
    const [products, setProducts] = useState([]); // תצטרך לנהל את המוצרים
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const orderData = { address, products, userId };
        dispatch(addOrder(orderData)); // שלח את ההזמנה
        handleClose(); // סגור את הטופס
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>סיום הזמנה</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="כתובת"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                {/* הוסף שדות נוספים לפי הצורך, לדוגמה, עבור מוצרים ו-ID של משתמש */}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    ביטול
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    שלח הזמנה
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default OrderForm;