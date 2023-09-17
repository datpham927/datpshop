import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createCategory } from '../../api/category'

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const [image, setImage] = useState("")


    const handleSummit = async () => {
        if (!categoryName) {
            alert("Nhập đầy đủ")
            return
        }
        const res = await createCategory({ category_name: categoryName ,category_thumbnail:image})
        if (!res.success) {
            alert('Thất bại!')
        } else {
            setCategoryName("")
            setImage("")
            alert('Thành công!')
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='flex flex-col gap-6 p-6'>
                <TextField id="standard-basic" label="Tên danh mục" value={categoryName} variant="standard" onChange={(e) => setCategoryName(e.target.value)} />
                <TextField id="standard-basic" label="Nhập image" value={image} variant="standard" onChange={(e) => setImage(e.target.value)} />
                <Button variant="contained" sx={{ width: "50%", margin: "auto" }} onClick={handleSummit}>Thêm</Button>
            </div>
        </div>
    )
}

export default AddCategory