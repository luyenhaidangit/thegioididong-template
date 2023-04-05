import React from 'react'
import "../../../assets/Styles/Components/Cart/Cart.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GrFormAdd, GrFormSubtract } from "react-icons/gr"

const Cart = () => {
    return (
        <div className='cart bg-gray pb-4'>
            <div className='container'>
                <div className='header-cart d-flex justify-content-between'>
                    <span className='cart__buy-more cursor-pointer'>Mua thêm sản phẩm khác</span>
                    <span className='cart__title'>Giỏ hàng của bạn</span>
                </div>
                <div className='body-cart'>
                    <div className='cart__list-item d-flex flex-column'>
                        <div className='cart__item d-flex gap-2'>
                            <div className='cart__item-left'>
                                <div className='cart__item-left__image cursor-pointer'>
                                    <img className='img-fluid' src="https://cdn.tgdd.vn/Products/Images/42/303579/samsung-galaxy-a14-bac-thumb-200x200.jpg" alt="A description of the" />
                                </div>
                                <div className='cart__item-left__button-delete d-flex justify-content-center align-items-center mt-2 cursor-pointer'>
                                    <AiOutlineCloseCircle fontSize={14} className='me-1' /> Xóa
                                </div>
                            </div>
                            <div className='cart__item-right w-100 d-flex justify-content-between'>
                                <div className='cart__item-right__start'>
                                    <div className='cart__item-title cursor-pointer'>Điện thoại Samsung Galaxy A14 4GB</div>
                                    <div className='cart__item-option-other mt-1'>
                                        <div className='cart__item-option-other-item cursor-pointer'>
                                            Màu: Vàng
                                        </div>
                                        <div className='cart__item-option-other-item cursor-pointer'>
                                            Ram: 4GB
                                        </div>
                                    </div>
                                </div>
                                <div className='cart__item-right__end d-flex flex-column'>
                                    <div className='cart__item-price d-flex flex-column align-items-end'>
                                        <span className='cart__item-price__sale-price'>4.090.000₫</span>
                                        <span className='cart__item-price__original-price text-decoration-line-through'>4.090.000₫</span>
                                    </div>
                                    <div className='cart__item-quantity d-flex mt-3'>
                                        <div className='add-quantity-item d-flex justify-content-center align-items-center'><GrFormAdd /></div>
                                        <input className='cart__item-quantity-value' value={1} type='text' />
                                        <div className='sub-quantity-item d-flex justify-content-center align-items-center'><GrFormSubtract /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cart__item d-flex gap-2 mt-3'>
                            <div className='cart__item-left'>
                                <div className='cart__item-left__image cursor-pointer'>
                                    <img className='img-fluid' src="https://cdn.tgdd.vn/Products/Images/42/303579/samsung-galaxy-a14-bac-thumb-200x200.jpg" alt="A description of the" />
                                </div>
                                <div className='cart__item-left__button-delete d-flex justify-content-center align-items-center mt-2 cursor-pointer'>
                                    <AiOutlineCloseCircle fontSize={14} className='me-1' /> Xóa
                                </div>
                            </div>
                            <div className='cart__item-right w-100 d-flex justify-content-between'>
                                <div className='cart__item-right__start'>
                                    <div className='cart__item-title cursor-pointer'>Điện thoại Samsung Galaxy A14 4GB</div>
                                    <div className='cart__item-option-other mt-1'>
                                        <div className='cart__item-option-other-item cursor-pointer'>
                                            Màu: Vàng
                                        </div>
                                        <div className='cart__item-option-other-item cursor-pointer'>
                                            Ram: 4GB
                                        </div>
                                    </div>
                                </div>
                                <div className='cart__item-right__end d-flex flex-column'>
                                    <div className='cart__item-price d-flex flex-column align-items-end'>
                                        <span className='cart__item-price__sale-price'>4.090.000₫</span>
                                        <span className='cart__item-price__original-price text-decoration-line-through'>4.090.000₫</span>
                                    </div>
                                    <div className='cart__item-quantity d-flex mt-3'>
                                        <div className='add-quantity-item d-flex justify-content-center align-items-center'><GrFormAdd /></div>
                                        <input className='cart__item-quantity-value' value={1} type='text' />
                                        <div className='sub-quantity-item d-flex justify-content-center align-items-center'><GrFormSubtract /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart__info-customer'>
                        <div className='info-customer'>
                            <div className='info-customer__title'>THÔNG TIN KHÁCH HÀNG</div>
                            <div className='info-customer__sex d-flex gap-3'>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="option1"
                                        className='me-2'
                                    />
                                    Nam
                                </div>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="option1"
                                        className='me-2'
                                    />
                                    Nữ
                                </div>
                            </div>
                            <div className='info-customer__basic d-flex gap-3'>
                                <div className='info-customer__basic-item w-100'>
                                    <input
                                        type="text"
                                        placeholder='Họ và tên'
                                        className='info-customer__basic-input w-100'
                                    />
                                </div>

                                <div className='info-customer__basic-item w-100'>
                                    <input
                                        type="text"
                                        placeholder='Số điện thoại'
                                        className='info-customer__basic-input w-100'
                                    />
                                </div>
                            </div>
                            <div className='info-customer__title mt-3'>CHỌN CÁCH THỨC GIAO HÀNG</div>
                            <div className='info-customer__sex d-flex gap-3'>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="option1"
                                        className='me-2'
                                    />
                                    Giao hàng tận nơi
                                </div>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="option1"
                                        className='me-2'
                                    />
                                    Nhận hàng tại siêu thị
                                </div>
                            </div>
                            <div className='info-customer__basic d-flex gap-3'>
                                <div className='info-customer__basic-item w-100'>
                                    <input
                                        type="text"
                                        placeholder='Địa chỉ nhận hàng'
                                        className='info-customer__basic-input w-100'
                                    />
                                </div>

                                {/* <div className='info-customer__basic-item w-100'>
                                    <input
                                        type="text"
                                        placeholder='Số điện thoại'
                                        className='info-customer__basic-input w-100'
                                    />
                                </div> */}
                            </div>
                            <div className='info-customer__basic d-flex gap-3'>
                                <div className='info-customer__basic-item w-100'>
                                    <input
                                        type="text"
                                        placeholder='Sử dụng mã giảm giá ( Nếu có )'
                                        className='info-customer__basic-input w-100'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart__submit pt-2'>
                        {/* <div className='total-cart-price d-flex justify-content-between'>
                            <strong className='total-cart-price__title'>Tạm tính</strong>
                            <strong className='total-cart-price__price'>4.340.000₫</strong>
                        </div> */}
                        <div className='total-cart-price d-flex justify-content-between'>
                            <strong className='total-cart-price__title'>Tạm tính</strong>
                            <strong className='total-cart-price__price'>4.340.000₫</strong>
                        </div>
                        <div className='total-cart-price d-flex justify-content-between'>
                            <strong className='total-cart-price__title'>Giảm giá</strong>
                            <strong className='total-cart-price__price'>4.340.000₫</strong>
                        </div>
                        <div className='total-cart-price d-flex justify-content-between'>
                            <strong className='total-cart-price__title'>Tổng tiền</strong>
                            <strong className='total-cart-price__price'>4.340.000₫</strong>
                        </div>
                        <div className='cart__submit-button'>
                            <buttom className='btn btn-primary w-100'>Đặt hàng</buttom>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart