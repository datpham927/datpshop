import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCategory } from '../../api/category';
import { getProductByCategory } from '../../api/product';
import ModalComponent from '../../components/ModalComponent';


const ProductsManage = () => {
    const [products, setProducts] = useState([])
    const [editProduct, setEditProduct] = useState({})
    const [categories, setCategories] = useState([])
    const [categoryCode, setCategoryCode] = useState("")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getProductByCategory({ category_code: categoryCode })
            if (!res?.success) return
            setProducts(res.data)
        }
        categoryCode && fetchApi()
    }, [categoryCode])

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getCategory()
            if (!res?.success) return
            setCategories(res.data)
        }
        fetchApi()
    }, [])



    return (
        <div className='flex w-full h-full flex-col gap-4 p-10 overflow-hidden'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryCode}
                    label="Age"
                    onChange={(e) => setCategoryCode(e.target.value)}
                >
                    {categories.map(e => <MenuItem value={e?.category_code}>{e?.category_name}</MenuItem>)}

                </Select>
            </FormControl>
            <TableContainer component={Paper}   >
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell width={150}>Hình ảnh</TableCell>
                            <TableCell align="left">Tiêu đề</TableCell>
                            <TableCell align="left">Lượt click</TableCell>
                            <TableCell align="left">Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >

                        {products?.map(p => <TableRow >
                            <TableCell align="left">
                                <img src={p?.product_image} className='w-10 h-10' alt='' />
                            </TableCell>
                            <TableCell align="left">{p?.product_title}</TableCell>
                            <TableCell align="left">{p?.product_view}</TableCell>
                            <TableCell align="left">
                                <p className='cursor-pointer text-green-500 underline' onClick={() => {
                                    handleOpen(true)
                                    setEditProduct(p)
                                }
                                }>Sửa</p>
                                <p className='cursor-pointer  text-green-500 underline'>Xóa</p>
                            </TableCell>


                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <ModalComponent handleClose={handleClose} open={open} setProducts={setProducts} product={editProduct} />
        </div>
    );
}

export default ProductsManage