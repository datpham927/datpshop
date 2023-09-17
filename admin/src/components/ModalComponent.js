import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { editProduct } from '../api/product';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalComponent = ({ handleClose, open, setProducts, product }) => {
    const [valueForm, setValueForm] = React.useState({})

    React.useEffect(() => {
        setValueForm({
            product_title: product?.product_title,
            product_image: product?.product_image,
            product_link: product?.product_link
        })
    }, [product])
    const handleSetValue = (key, value) => {
        setValueForm(e => ({ ...e, [key]: value }))
    }

    const handleSummit = async () => {
        if (Object.entries(valueForm).length < 2) {
            alert("Nhập đầy đủ")
            return
        }
        const res = await editProduct({ ...valueForm, _id: product?._id })
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setValueForm({
                product_title: "", product_link: "", product_image: "",
            })
            alert('Thành công!')
            console.log(res.data)
            setProducts((prev) => [...prev.filter((p) => p._id !== res?.data._id), { ...res?.data }])
            handleClose(false)
        }
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="standard-basic" label="Nhập tiêu đề" value={valueForm?.product_title} variant="standard" sx={{ width: "100%" }} onChange={(e) => handleSetValue("product_title", e.target.value)} />
                    <TextField id="standard-basic" label="Nhập link" variant="standard" value={valueForm?.product_link} sx={{ width: "100%" }} onChange={(e) => handleSetValue("product_link", e.target.value)} />
                    <TextField id="standard-basic" label="Nhập image" variant="standard" value={valueForm?.product_image} sx={{ width: "100%" }} onChange={(e) => handleSetValue("product_image", e.target.value)} />
                    <Button variant="contained" sx={{ marginTop: "30px" }} onClick={handleSummit}>Thêm</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalComponent