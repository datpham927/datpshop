import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem'
import { getProductByCategory, updateView } from '../../api/product'
import SkeletonProducts from '../../components/SkeletonProducts'

const Body = ({ categoryCode }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true)
            const res = await getProductByCategory({ category_code: categoryCode })
            if (!res?.success) return
            setProducts(res.data)
            setIsLoading(false)
        }
        categoryCode && fetchApi()
    }, [categoryCode])
    const handleUpdateView = async (pid) => {
        await updateView(pid)
    }

    return (
        <div className='w-full bg-white rounded-sm '>
            {!isLoading ? <div className='grid p-3 mobile:grid-cols-1 tablet:grid-cols-2 grid-cols-4  h-full flex-1 overflow-y-auto'>

                {products?.map(p =>
                    <ProductItem product={p} onClick={() => handleUpdateView(p?._id)} />
                )}
            </div> : <SkeletonProducts />}
        </div>
    )
}

export default Body