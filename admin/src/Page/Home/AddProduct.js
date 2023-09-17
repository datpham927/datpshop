import {  Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getCategory } from '../../api/category'
import { createProduct } from '../../api/product'

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    const [valueForm, setValueForm] = useState({})
    const [categoryCode, setCategoryCode] = useState("")

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getCategory()
            if (!res?.success) return
            setCategories(res.data)
        }
        fetchApi()
    }, [])

    const handleSetValue = (key, value) => {
        setValueForm(e => ({ ...e, [key]: value }))
    }

    const handleSummit = async () => {
        if (Object.entries(valueForm).length < 2) {
            alert("Nhập đầy đủ")
            return
        }
        const res = await createProduct({ category_code: categoryCode, ...valueForm })
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setValueForm({
                product_title: "", product_link: "", product_image: "",
            })
            alert('Thành công!')
        }
    }
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col gap-6 p-6'>
                <TextField id="standard-basic" label="Nhập tiêu đề" value={valueForm?.product_title} variant="standard" onChange={(e) => handleSetValue("product_title", e.target.value)} />
                <TextField id="standard-basic" label="Nhập link" variant="standard" value={valueForm?.product_link} onChange={(e) => handleSetValue("product_link", e.target.value)} />
                <TextField id="standard-basic" label="Nhập image" variant="standard" value={valueForm?.product_image} onChange={(e) => handleSetValue("product_image", e.target.value)} />
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

                <Button variant="contained" sx={{ width: "50%", margin: "auto" }} onClick={handleSummit}>Thêm</Button>
            </div>
        </div>
    )
}

export default AddProduct