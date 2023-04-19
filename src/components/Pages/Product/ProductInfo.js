import React, { useState, useEffect } from 'react';

const data = {
    options: [
        {
            name: 'Color',
            values: ['Red', 'Green', 'Blue']
        },
        {
            name: 'Size',
            values: ['Small', 'Medium', 'Large']
        },
        // Các thuộc tính khác
    ],
    products: [
        {
            id: 1,
            name: 'Product 1',
            options: [
                { name: 'Color', value: 'Red' },
                { name: 'Size', value: 'Medium' }
                // Các thuộc tính khác của sản phẩm
            ]
        },
        {
            id: 2,
            name: 'Product 2',
            options: [
                { name: 'Color', value: 'Green' },
                { name: 'Size', value: 'Small' }
                // Các thuộc tính khác của sản phẩm
            ]
        },
        {
            id: 3,
            name: 'Product 1',
            options: [
                { name: 'Color', value: 'Red' },
                { name: 'Size', value: 'Small' }
                // Các thuộc tính khác của sản phẩm
            ]
        },
        {
            id: 4,
            name: 'Product 1',
            options: [
                { name: 'Color', value: 'Blue' },
                { name: 'Size', value: 'Small' }
                // Các thuộc tính khác của sản phẩm
            ]
        },
        // Các sản phẩm khác
    ]
};

const ProductInfo = () => {


    const [productData, setProductData] = useState(data);
    const [selectedOptions, setSelectedOptions] = useState({});
    // const [currentOption, setSelectedOptions] = useState({});

    useEffect(() => {
        setProductData(data)
    }, []);

    const handleOptionChange = (optionName, optionValue) => {
        setSelectedOptions(prevOptions => {
            const newOptions = {
                ...prevOptions,
                [optionName]: optionValue
            };
            // const newOptions = {
            //     [optionName]: optionValue
            // };
            // Xét giá trị của các thuộc tính khác
            productData.options.forEach(option => {
                if (option.name !== optionName && !newOptions.hasOwnProperty(option.name)) {
                    // Tìm giá trị đầu tiên có thể chọn cho thuộc tính khác
                    const availableValues = productData.products
                        .filter(product =>
                            product.options.every(productOption =>
                                newOptions.hasOwnProperty(productOption.name)
                                // newOptions[productOption.name] === productOption.value
                            )
                        )
                        .flatMap(product => product.options)
                        .filter(productOption => productOption.name === option.name)
                        .map(productOption => productOption.value);
                    if (availableValues.length > 0) {
                        newOptions[option.name] = availableValues[0];
                    }
                }
            });
            return newOptions;
        });
    };

    const renderOptions = () => {
        if (!productData) {
            return <div>Loading options...</div>;
        }

        console.log(selectedOptions)
        const selectedValues = Object.values(selectedOptions);

        const availableProducts = productData.products.filter((product) => {
            return product?.options?.every((option) => {
                return (
                    selectedValues.includes(option.value) ||
                    !selectedOptions.hasOwnProperty(option.name)
                );
            });
        });
        return productData.options.map((option) => (
            <div key={option.name}>
                <h4>{option.name}</h4>
                <ul>
                    {option.values.map((value) => {
                        // console.log(option)
                        // console.log(selectedOptions)
                        const isSelected = selectedOptions[option.name] === value;
                        // console.log(isSelected)
                        // console.log(selectedOptions[option.name])
                        // console.log(value)
                        // console.log(option.name)
                        const optionName = option?.name;
                        const isOptionMatched = Object.keys(selectedOptions).some(selectedOptionKey => selectedOptionKey === optionName);

                        console.log(isOptionMatched); //
                        let isDisabled = false;
                        if (isOptionMatched) {
                            isDisabled = false;
                        } else {
                            isDisabled = selectedValues.length > 0 &&
                                !availableProducts.some((product) =>
                                    product.options.some(
                                        (productOption) =>
                                            productOption.name === option.name &&
                                            productOption.value === value &&
                                            (!selectedOptions[option.name] ||
                                                productOption.value === selectedOptions[option.name])
                                    )
                                );
                        }


                        return (
                            <li key={value}>
                                <button
                                    className={isSelected ? "btn btn-primary" : ""}
                                    onClick={() => handleOptionChange(option.name, value)}
                                    disabled={isDisabled}
                                >
                                    {value}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        ));
    };


    return (
        <div>
            <h2>Product Options</h2>
            {renderOptions()}
        </div>
    );
};

export default ProductInfo;
