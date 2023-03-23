import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { GetProductDetailPage } from '../../../apis/productApiService';
import { Button } from 'react-bootstrap';

const ProductDetail = () => {
    // const { id } = useParams();

    // console.log(useParams())

    const [id, setId] = useState(useParams().id);


    const [dataProductDetailPage, setDataProductDetailPage] = useState({});
    const [product, setProduct] = useState({});
    const [productVariants, setProductVariants] = useState(null);
    const [productAttributes, setProductAttributes] = useState([]);



    useEffect(() => {
        fetchProductDetailPage();
    }, [id]);

    const fetchProductDetailPage = async () => {
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

        console.log(dataProductDetailPage?.productVariants)
        console.log(productAttributes)

        // const selectedAttributes = productAttributes.map(attr => {
        //     const selectedValue = attr.attributeValues.find(val => val.isSelected);
        //     return selectedValue ? selectedValue.value : null;
        // });

        // const filteredVariants = dataProductDetailPage.productVariants.filter(variant => {
        //     return variant.options.every(option => {
        //         return selectedAttributes.includes(option.value);
        //     });
        // });

        // const selectedVariantId = filteredVariants[0].id;

        // console.log(filteredVariants)


        // const selectedOptions = dataProductDetailPage?.productVariants.filter(product => {
        //     // console.log(product)
        //     return product.options.some(option => {
        //         const attribute = productAttributes.find(attr => {
        //             return attr.name === option.name;
        //         });


        //         return attribute.isSelected && attribute.value === option.value;
        //     });
        // });

        // const variantIds = selectedOptions.map(option => {
        //     return option.id;
        // });

        // console.log(selectedOptions)

        // console.log(variantIds); // [16]


        // console.log(productAttributes)

        // console.log(product)
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
                                                value.value && value.isSelected == true &&
                                                <>
                                                    {
                                                        <btn onClick={() => handleClickAttributeValue(attributeIndex, valueIndex)} className='btn btn-primary me-3'>{value.value}</btn>
                                                    }
                                                </>
                                            }

                                            {
                                                value.value && value.isSelected == false &&
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