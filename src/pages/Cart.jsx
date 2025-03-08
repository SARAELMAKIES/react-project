

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

// export default Cart;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, reduce, addItem } from '../features/OrderSlice.js'; 
import OneItem from '../component/OneProduct.jsx';
import { useNavigate } from 'react-router-dom'; // ייבוא useNavigate

const Cart = () => {
    const cart = useSelector((state) => state.cart.arr || []);
    const totalPrice = useSelector((state) => state.cart.sum);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // יצירת פונקציית ניווט

    const handleRemove = (id) => {
        dispatch(removeItem({ _id: id }));
    };

    const handleReduce = (id) => {
        dispatch(reduce({ _id: id }));
    };

    const handleAdd = (item) => {
        dispatch(addItem(item));
    };

    const handleOpenOrderForm = () => {
        navigate('/order-form'); // ניווט לעמוד הזמנה
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
            <button onClick={handleOpenOrderForm}>סיים הזמנה</button> {/* כפתור סיום הזמנה */}
        </div>
    );
};

export default Cart;


