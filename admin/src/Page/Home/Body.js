import React from 'react'
import AddProduct from './AddProduct'
import AddCategory from './AddCategory'
import ProductsManage from './ProductsManage'

const Body = ({tab}) => {
    return (
        <div className='w-full bg-white rounded-sm '>
            {tab === 1 && < AddProduct />}
            {tab === 2 && < AddCategory/>}
            {tab === 3 && < ProductsManage/>}

        </div>
    )
}

export default Body