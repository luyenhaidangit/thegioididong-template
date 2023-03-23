import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { GetProductDetailPage } from '../../../apis/productApiService';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {

    const [idVariantCurrent, setProductCurrent] = useState(useParams().id);
    const [dataProductDetailPage, setDataProductDetailPage] = useState({});
    const [product, setProduct] = useState({});
    const [productVariants, setProductVariants] = useState(null);
    const [productAttributes, setProductAttributes] = useState([]);



    useEffect(() => {
        fetchProductDetailPage();
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
        } else {
            console.log('No matching product variant was found.');
        }

        alert("ok")
    }, [productAttributes]);

    const fetchProductDetailPage = async () => {
        let res = await GetProductDetailPage(idVariantCurrent);
        setDataProductDetailPage(res);

        const variant = res?.productVariants.find(v => v.id === +idVariantCurrent);
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
        </div>
    )
}

export default ProductDetail