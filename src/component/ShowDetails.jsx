// import { Button, Modal, Typography } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getById } from "../api/ProductApi";


// export const ShowDetalis = () => {

//     let { id } = useParams();
//     let navigate = useNavigate()
//     const [item, setItem] = useState({});

//     const [modalOpen, setModalOpen] = useState(true);

//     async function fetchProductById(id) {
//         try {
//             let res = await getById(id)
//             setItem(res.data)
//             console.log(res.data);

//         }
//         catch (err) {
//             console.log(err);

//         }
//     }

//     useEffect(() => {
//         fetchProductById(id)
//     }, [id])


//     const handleClose = () => {
//         setModalOpen(false);  // close the modal when the close button is clicked
//         navigate(-1)
//     };

//     return <>
//         {/* מודל להצגת פרטי המוצר */}
//         <Modal open={modalOpen} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
//             <div style={{ width: '100%', backgroundColor: 'white' }}>
//                 <Button onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
//                     <CloseIcon />
//                 </Button>
//                 <h2 id="modal-title">{item?.name}</h2>
//                 <img src={`../src/assets/${item?.img}`} alt={item?.name} />
//                 <p id="modal-description">{item?.description}</p>
//                 <Typography variant="body1">{item?.ingredient}</Typography>
//                 <Typography variant="body1">{item?.category}</Typography>
//                 <Typography variant="body1">{item?.date}</Typography>
//                 <Typography variant="body2">{item?.additionalDetails}</Typography>
//                 <Button onClick={handleClose}>close</Button>
//             </div>
//         </Modal>
//     </>
// }
import { Button, Modal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../api/ProductApi";
import llogo from '../assets/llogo.png';

export const ShowDetails = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    const [item, setItem] = useState({});
    const [modalOpen, setModalOpen] = useState(true);

    async function fetchProductById(id) {
        try {
            let res = await getById(id);
            setItem(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProductById(id);
    }, [id]);

    const handleClose = () => {
        setModalOpen(false);  
        navigate(-1);
    };

    return (
        <Modal open={modalOpen} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                backgroundColor: 'white',
                padding: '20px',
                outline: 'none',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                width: '400px', // Adjust width as needed
                position: 'relative' // Add relative positioning for the close button
            }}>
                 <img src={llogo} alt="Cart Logo" style={{ width: '100px', height: '60px', marginRight: '10px' }} />
                <Button 
                    onClick={handleClose} 
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                >
                    <CloseIcon />
                </Button>
                <h2 id="modal-title">{item.name}</h2>
                <img src={`../src/assets/${item.img}`} alt={item.name} className="product-image" style={{ width: '100%' }} />
                <p id="modal-description">{item.description}</p>
                <Typography variant="body1">{item.ingredient}</Typography>
                <Typography variant="body1">{item.category}</Typography>
                <Typography variant="body1">{item.date}</Typography>
                <Typography variant="body2">{item.additionalDetails}</Typography>
                <Button onClick={handleClose}>סגור</Button>
            </div>
        </Modal>
    );
};



