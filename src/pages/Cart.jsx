

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, reduce, addItem } from '../features/OrderSlice.js'; 
// import OneItem from '../component/OneProduct.jsx';

// const Cart = () => {
//     // שליפת עגלת הקניות מה-store של Redux
//     const cart = useSelector((state) => state.cart.arr || []);
//     const totalPrice = useSelector((state) => state.cart.sum);
//     const dispatch = useDispatch();

//     //   פונקציה להסרת פריט מהעגלה
//     const handleRemove = (id) => {
//         dispatch(removeItem({ _id: id }));
//     };

//     //  פונקציה להפחתת כמות של מוצר מסוים
//     const handleReduce = (id) => {
//         dispatch(reduce({ _id: id }));
//     };

//     // פונקציה להוספת כמות נוספת של מוצר
    
//     const handleAdd = (item) => {
//         dispatch(addItem(item));
//     };

//     return (
//         <div>
//             <h1>Shopping Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <ul>
//                     {cart.map((item, index) => (
//                         <li key={item._id ? item._id : `${index}-${item.price}`}>
//                             <OneItem item={item} showAddToCart={false} />
//                             <div>
//                                 <button onClick={() => handleRemove(item._id)}>🗑️</button>
//                                 <button onClick={() => handleReduce(item._id)}>➖</button>
//                                 <button onClick={() => handleAdd(item)}>➕</button> 
//                                 <span>Quantity: {item.qty}</span>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <h2>Total Price: ${totalPrice}</h2>
//         </div>
//     );
// };

// export default Cart;import { useSelector, useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'; // הוסף שורה זו
import { removeItem, reduce, addItem } from '../features/OrderSlice.js'; 
import OneItem from '../component/OneProduct.jsx';
import { useNavigate } from 'react-router-dom'; 
import OrderForm from './OrderForm.jsx';
import React, { useState } from 'react';

const Cart = () => {
    const cart = useSelector((state) => state.cart.arr || []);
    const totalPrice = useSelector((state) => state.cart.sum);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [isOrderFormOpen, setOrderFormOpen] = useState(false);

    const handleOpenOrderForm = () => {
        setOrderFormOpen(true); // פותח את הטופס להזמנה
    };
    
    const handleRemove = (id) => {
        dispatch(removeItem({ _id: id }));
    };

    const handleReduce = (id) => {
        dispatch(reduce({ _id: id }));
    };

    const handleAdd = (item) => {
        dispatch(addItem(item));
    };

    const handleCloseOrderForm = () => {
        setOrderFormOpen(false); // סוגר את הטופס להזמנה
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={item._id ? item._id : `${index}-${item.price}`}>
                            <OneItem item={item} showAddToCart={false} />
                            <div>
                                <button onClick={() => handleRemove(item._id)}>🗑️</button>
                                <button onClick={() => handleReduce(item._id)}>➖</button>
                                <button onClick={() => handleAdd(item)}>➕</button> 
                                <span>Quantity: {item.qty}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total Price: ${totalPrice}</h2>
            <div>
            <button onClick={handleOpenOrderForm}>סיים הזמנה</button>
            <OrderForm open={isOrderFormOpen} handleClose={handleCloseOrderForm} />
            </div>
        </div>
    );
};

export default Cart;
