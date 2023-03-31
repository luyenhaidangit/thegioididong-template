// Libraries
import React, { useState } from 'react'

import { Form } from 'react-bootstrap';
import { IoIosFlash } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'

// Helper
import FormatCurrency from '../../../helpers/Strings/FormatCurrency';

// Styles
import "../../../assets/Styles/Components/ProductCategory/ListProduct.css"

const ListProduct = (props) => {
    const { listProduct } = props;

    const [sortOptions, setSortOptions] = useState({
        sortOption1: false,
        sortOption2: false,
        sortOption3: false,
        // Thêm các kiểu sort khác nếu cần thiết
    });

    const handleCheckboxChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setSortOptions({
            ...sortOptions,
            [name]: value,
        });
    };

    const [sortOption, setSortOption] = useState('sortOption1');

    const handleSelectChange = (event) => {
        setSortOption(event.target.value);
    };

    const isMatrixValid = (matrix) => {
        const rows = matrix.length;

        for (let i = 1; i < rows; i++) {
            if (matrix[i].length !== rows) {
                return false; // Không phải ma trận vuông
            }
        }

        for (let i = 0; i < rows; i++) {
            if (matrix[i][i] !== 0) {
                return false; // Không phải ma trận kề ( đường chéo bằng 0 )
            }
        }
        return true;
    }

    const calculateInAndOutDegreeMatrix = (matrix) => {
        let matrixType = 1;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] !== matrix[j][i]) {
                    matrixType = 2;
                    break;
                }
            }
        }

        if (isMatrixValid(matrix) && matrixType === 1) {
            const numVertices = matrix.length;
            const degrees = new Array(numVertices).fill(0);

            for (let i = 0; i < numVertices; i++) {
                for (let j = 0; j < numVertices; j++) {
                    if (matrix[i][j] !== 0) {
                        degrees[i]++;
                    }
                }
            }

            for (let i = 0; i < numVertices; i++) {
                console.log(`Đỉnh ${i}: có bậc ${degrees[i]}`);
            }
        }

        if (isMatrixValid(matrix) && matrixType === 2) {
            const numVertices = matrix.length;
            const inDegrees = new Array(numVertices).fill(0);
            const outDegrees = new Array(numVertices).fill(0);

            for (let i = 0; i < numVertices; i++) {
                for (let j = 0; j < numVertices; j++) {
                    if (matrix[i][j] !== 0) {
                        outDegrees[i]++;
                        inDegrees[j]++;
                    }
                }
            }

            for (let i = 0; i < numVertices; i++) {
                console.log(`Đỉnh ${i}: có bán bậc vào là ${inDegrees[i]} và bán bậc ra là ${outDegrees[i]}`);
            }
        }
    }

    const matrix = [
        [0, 3, 0, 0, 7],
        [1, 0, 2, 0, 0],
        [2, 7, 0, 6, 0],
        [0, 2, 0, 0, 1],
        [0, 0, 9, 1, 0],
    ];
    calculateInAndOutDegreeMatrix(matrix);




    return (
        <div className='product-list mt-3 pb-4'>
            <div className='container'>
                <div className='sort-box d-flex justify-content-between'>
                    <div className='sort-box__left d-flex gap-3'>
                        <span className='sort-box__total font-weight-bold'>117 điện thoại</span>
                        <Form className='sort-box__checkbox'>
                            <Form.Group controlId="sortOptions" className='d-flex align-items-center gap-3'>
                                <Form.Check
                                    name="sortOption1"
                                    checked={sortOptions.sortOption1}
                                    onChange={handleCheckboxChange}
                                    label={<><IoIosFlash size='16' /> Giao nhanh</>}
                                    className='flash-ship__checkbox'
                                />
                                <Form.Check
                                    name="sortOption1"
                                    checked={sortOptions.sortOption1}
                                    onChange={handleCheckboxChange}
                                    label="Giảm giá"
                                />
                                <Form.Check
                                    name="sortOption2"
                                    checked={sortOptions.sortOption2}
                                    onChange={handleCheckboxChange}
                                    label="Trả góp"
                                />
                                <Form.Check
                                    name="sortOption3"
                                    checked={sortOptions.sortOption3}
                                    onChange={handleCheckboxChange}
                                    label="Mới"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='sort-box__right'>
                        <Form className="small">
                            <Form.Group controlId="sortOptions">
                                <Form.Select className="form-control-sm" value={sortOption} onChange={handleSelectChange}>
                                    <option value="sortOption2">Xếp theo: Giá cao đến thấp</option>
                                    <option value="sortOption1">Xếp theo: Giá thấp đến cao</option>
                                    <option value="sortOption3">Xếp theo: Phần trăm giảm</option>
                                    <option value="sortOption4">Xếp theo: Nổi bật</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className='product-box mt-3'>
                    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
                        {
                            listProduct && listProduct.length > 0 &&
                            listProduct.map((item, index) => {
                                return (
                                    <div className='col' key={`latestProducts-${index}`}>
                                        <div className='product-card__item product-category__product-item px-3 cursor-pointer border' key={`product__item-${index}`}>
                                            <div className='product-card__item-label d-flex gap-3 mb-3'>
                                                {
                                                    item?.isInterest && item.isInterest === true
                                                    && <span className='product-card__item-label__item' style={{ backgroundColor: "#f1f1f1", color: "#333" }}>Trả góp 0%</span>
                                                }
                                            </div>
                                            <div className='product-card__item-image d-flex justify-content-center mb-3'>
                                                <img className='img-fluid' src={item.image} alt={"Product Card Imgae"} />
                                            </div>
                                            {
                                                item?.badgeProduct &&
                                                <div className='product-card__item-note d-flex gap-3 mb-2'>
                                                    <span className='product-card__item-note__item d-inline-flex align-items-center gap-1 cursor-pointer' style={{ background: item?.badgeProduct?.backgroundColor, borderRadius: "20px", color: "#fff", padding: "0 10px 0 0", }}>
                                                        {
                                                            item?.badgeProduct?.image &&
                                                            <img className='product-card__item-note__item-img' src={item?.badgeProduct?.image} alt="product-card__item-note__item" />
                                                        }
                                                        {
                                                            item?.badgeProduct?.name
                                                        }
                                                    </span>
                                                </div>
                                            }

                                            <h3 className='product-card__item-name mb-1'>
                                                {item.name}
                                            </h3>
                                            {
                                                item?.attributeValueProminents && item?.attributeValueProminents.length > 0 &&
                                                <div className='product-card__item-label d-flex gap-1 mb-2'>
                                                    {
                                                        item?.attributeValueProminents && item?.attributeValueProminents.length > 0 &&
                                                        item?.attributeValueProminents?.map((value, index) => {
                                                            return (
                                                                <span key={`product-card__item-label__item-${index}`} className='product-card__item-label__item' style={{ backgroundColor: "#f1f1f1", color: "#333" }}>{value}</span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                            {
                                                item?.optionVariantAttribute && item?.optionVariantAttribute.length > 0 &&
                                                <div className='product-card__item-label d-flex gap-1 mb-1'>
                                                    {
                                                        item?.optionVariantAttribute && item?.optionVariantAttribute.length > 0 &&
                                                        item?.optionVariantAttribute?.map((value, index) => {
                                                            return (
                                                                <div key={`product-card__item-label-attribute__item-${index}`} className='d-flex gap-1'>
                                                                    {
                                                                        value.selected && value.selected === true &&
                                                                        <span className='product-card__item-label-attribute__item active' style={{ backgroundColor: "#f1f1f1", color: "#333" }}>{value.name}</span>
                                                                    }

                                                                    {
                                                                        value.selected &&
                                                                        <span className='product-card__item-label-attribute__item' style={{ backgroundColor: "#f1f1f1", color: "#333" }}>{value.name}</span>
                                                                    }

                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }

                                            {
                                                <span className="text-decoration-line-through product-card__item-original-price mb-3">{FormatCurrency(item.originalPrice)}</span>
                                            }
                                            {
                                                <span className='product-card__item-discount-percent ms-2'>-{item.discountPercent}%</span>
                                            }
                                            {
                                                <p className='product-card__item-price mb-1'>{FormatCurrency(item.discountedPrice)}</p>
                                            }
                                            {
                                                <p className='product-card__item-rating d-flex align-items-center mb-1'>
                                                    <b className='product-card__item-number-star d-flex align-items-center me-2'>4.8 <AiFillStar /></b>
                                                    (158)
                                                </p>
                                            }




                                            {/* 


                                            <p className='product-card__item-comment p-0'>Giảm 3 triệu, Trả góp 0%, Thu cũ tài trợ 3 triệu, Ốp lưng BTS</p> */}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='readmore-btn d-flex justify-content-center mt-3 mb-0 cursor-pointer'>
                        Xem tất cả
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProduct