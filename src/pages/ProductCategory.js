// Libraries
import React, { useEffect, useState } from 'react'

// Components
import BoxFilter from '../components/Pages/ProductCategory/BoxFilter'
import ListProduct from '../components/Pages/ProductCategory/ListProduct'
import TopBanner from '../components/Pages/ProductCategory/TopBanner'

// Data
import ProductCategoryApi from '../data/ProductCategory'

const ProductCategory = () => {
    // Hook
    const [dataProductCategory, setDataProductCategory] = useState({});

    useEffect(() => {
        fetchDataProductCategory();
    }, []);

    // Function
    const fetchDataProductCategory = async () => {
        let res = await ProductCategoryApi;
        setDataProductCategory(res);
    }

    return (
        <div>
            <TopBanner slide={dataProductCategory?.topBanner?.slide} bannerFirst={dataProductCategory?.topBanner?.bannerFirst} bannerSecond={dataProductCategory?.topBanner?.bannerSecond} />
            <BoxFilter attributeFilters={dataProductCategory.attributeFilters} />
            <ListProduct prouducts={dataProductCategory.prouducts} />
        </div>
    )
}

export default ProductCategory