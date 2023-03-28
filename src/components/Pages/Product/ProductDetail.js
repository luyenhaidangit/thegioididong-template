import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { GetProductDetailPage } from '../../../apis/productApiService';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
    const navigate = useNavigate();
    const [idVariantCurrent, setVariantCurrent] = useState(useParams().id);
    const [dataProductDetailPage, setDataProductDetailPage] = useState({});
    const [product, setProduct] = useState({});
    const [productVariants, setProductVariants] = useState(null);
    const [productAttributes, setProductAttributes] = useState([]);



    useEffect(() => {
        fetchProductDetailPage(idVariantCurrent);
    }, [idVariantCurrent]);

    useEffect(() => {
        const selectedAttributes = {};
        productAttributes.forEach(attribute => {
            const selectedValue = attribute.attributeValues.find(value => value.isSelected);
            if (selectedValue) {
                selectedAttributes[attribute.name] = selectedValue.value;
            }
        });

        // Find the product variant with options that match the selected attribute values
        const matchingVariant = dataProductDetailPage?.productVariants?.find(variant => {
            return variant.options.every(option => option.value === selectedAttributes[option.name]);
        });

        if (matchingVariant) {
            console.log(`The matching product variant has an id of ${matchingVariant.id}.`);
            setVariantCurrent(matchingVariant.id);
            // fetchProductDetailPage(matchingVariant.id);
            navigate(`/san-pham/${matchingVariant.id}`);
        } else {
            console.log('No matching product variant was found.');
        }
    }, [productAttributes]);

    const fetchProductDetailPage = async (id) => {
        let res = await GetProductDetailPage(id);
        setDataProductDetailPage(res);

        const variant = res?.productVariants.find(v => v.id === +id);
        setProduct(variant);
        const productCurrentOption = variant.options;

        console.log(productCurrentOption)

        setProductVariants(res.productVariants);

        const attributes = _(res.productVariants)
            .flatMap('options')
            .groupBy('name')
            .map((values, name) => ({
                name: name,
                attributeValues: _.uniqBy(values, 'value').map((value) => ({
                    value: value.value,
                    isSelected: false,
                })),
            }))
            .value();

        const updatedAttributes = attributes.map(attribute => ({
            ...attribute,
            attributeValues: attribute.attributeValues.map(value => ({
                ...value,
                isSelected: productCurrentOption.some(
                    option => option.name === attribute.name && option.value === value.value
                ),
            })),
        }));

        setProductAttributes(updatedAttributes);
    }

    const handleClickAttributeValue = async (attributeIndex, valueIndex) => {
        const updatedAttributes = productAttributes.map((attribute, i) => {
            if (i !== attributeIndex) {
                // keep other attributes unchanged
                return attribute;
            } else {
                // update the clicked attribute value and set others to false
                return {
                    ...attribute,
                    attributeValues: attribute.attributeValues.map((value, j) => ({
                        ...value,
                        isSelected: j === valueIndex,
                    })),
                };
            }
        });
        setProductAttributes(updatedAttributes);
        // console.log(productAttributes)
    };

    const handleButtonClick = () => {
        const quantity = window.prompt('Số lượng cần mua?');
        if (quantity && !isNaN(quantity)) {

            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {

                existingItem.quantity += Number(quantity);
            } else {

                cart.push({
                    ...product,
                    quantity: Number(quantity)
                });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };


    console.log(productAttributes)

    console.log(dataProductDetailPage)

    return (
        <div className="product-detai container my-4">
            <h3>{product.name}</h3>
            <h4 className='text-danger'>{product.originalPrice}</h4>
            {
                productAttributes.map((attribute, attributeIndex) => {
                    return (
                        <>
                            <h4>{attribute.name}</h4>
                            {
                                attribute.attributeValues.map((value, valueIndex) => {
                                    return (
                                        <>
                                            {
                                                value.value && value.isSelected === true &&
                                                <>
                                                    {
                                                        <Button onClick={() => handleClickAttributeValue(attributeIndex, valueIndex)} className='btn btn-primary me-3'>{value.value}</Button>
                                                    }
                                                </>
                                            }

                                            {
                                                value.value && value.isSelected === false &&
                                                <>
                                                    {
                                                        <Button onClick={() => handleClickAttributeValue(attributeIndex, valueIndex)} className='btn btn-secondary me-3'>{value.value}</Button>
                                                    }
                                                </>
                                            }
                                        </>
                                    )
                                })
                            }


                        </>
                    )
                })
            }

            <Button className='btn btm-primary d-flex mt-4' onClick={handleButtonClick}>Mua ngay</Button>
        </div>
    )
}

export default ProductDetail