import React, { useState } from 'react'
import "../../../assets/Styles/Components/Cart/Cart.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GrFormAdd, GrFormSubtract } from "react-icons/gr"
import FormatCurrency from '../../../helpers/Strings/FormatCurrency';

const Cart = () => {
    const products = JSON.parse(localStorage.getItem('cart')) || [];
    const [sex, setSex] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [andress, setAndress] = useState(null);
    const [note, setNote] = useState(null);

    const totalPrice = products.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
    console.log(totalPrice)

    const handleChangeSex = (event) => {
        setSex(event.target.value);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleDeliveryMethod = (event) => {
        setDeliveryMethod(event.target.value);
    };

    const handlePaymentMethod = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleOnSubmitCart = ()=>{
        const data = {
            products: products,
            sex: sex,
            name: name,
            email: email,
            deliveryMethod: deliveryMethod,
            andress: andress,
            note: note
        }

        console.log(data)
    }

    console.log(products)

    return (
        <div className='cart bg-gray pb-4'>
            <div className='container'>
                <div className='header-cart d-flex justify-content-between'>
                    <span className='cart__buy-more cursor-pointer'>Mua thêm sản phẩm khác</span>
                    <span className='cart__title'>Giỏ hàng của bạn</span>
                </div>
                <div className='body-cart'>
                    <div className='cart__list-item d-flex flex-column'>
                        {
                            products && products.length > 0 &&
                            products.map((item) => {
                                return (
                                    <div className='cart__item d-flex mt-3 gap-2'>
                                        <div className='cart__item-left'>
                                            <div className='cart__item-left__image cursor-pointer'>
                                                <img className='img-fluid' src={"https://localhost:7039/" + item.image} alt="A description of the" />
                                            </div>
                                            <div className='cart__item-left__button-delete d-flex justify-content-center align-items-center mt-2 cursor-pointer'>
                                                <AiOutlineCloseCircle fontSize={14} className='me-1' /> Xóa
                                            </div>
                                        </div>
                                        <div className='cart__item-right w-100 d-flex justify-content-between'>
                                            <div className='cart__item-right__start'>
                                                <div className='cart__item-title cursor-pointer'>{item.name}</div>
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
                                                    <span className='cart__item-price__sale-price'>{FormatCurrency(item.originalPrice)}</span>
                                                    <span className='cart__item-price__original-price text-decoration-line-through'>4.090.000₫</span>
                                                </div>
                                                <div className='cart__item-quantity d-flex mt-3'>
                                                    <div className='add-quantity-item d-flex justify-content-center align-items-center'><GrFormSubtract /></div>
                                                    <input className='cart__item-quantity-value' value={item.quantity} type='text' />
                                                    <div className='sub-quantity-item d-flex justify-content-center align-items-center'><GrFormAdd /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className='cart__item d-flex gap-2 mt-3'>
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
                        </div> */}
                    </div>
                    <div className='cart__info-customer'>
                        <div className='info-customer'>
                            <div className='info-customer__title'>THÔNG TIN KHÁCH HÀNG</div>
                            <div onChange={(e) => handleChangeSex(e)} className='info-customer__sex d-flex gap-3'>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        className='me-2'
                                        value="Nam"
                                        name="gender"
                                        checked={sex === "Nam"}
                                    />
                                    Nam
                                </div>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        className='me-2'
                                        value="Nữ"
                                        name="gender"
                                        checked={sex === "Nữ"}
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
                                        value={name} onChange={(e) => handleChangeName(e)}
                                    />
                                </div>

                                <div className='info-customer__basic-item w-100'>
                                    <input
                                        type="text"
                                        placeholder='Email'
                                        className='info-customer__basic-input w-100'
                                        value={email} onChange={(e) => handleChangeEmail(e)}
                                    />
                                </div>
                            </div>
                            <div className='info-customer__title mt-3'>CHỌN CÁCH THỨC GIAO HÀNG</div>
                            <div onChange={(e) => handleDeliveryMethod(e)} className='info-customer__sex d-flex gap-3'>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="0"
                                        name="deliveryMethod"
                                        className='me-2'
                                        checked={deliveryMethod === "0"}
                                    />
                                    Giao hàng tận nơi
                                </div>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="1"
                                        className='me-2'
                                        name="deliveryMethod"
                                        checked={deliveryMethod === "1"}
                                    />
                                    Nhận hàng tại siêu thị
                                </div>
                            </div>
                            <div className='info-customer__title mt-3'>CHỌN HÌNH THỨC THANH TOÁN</div>
                            <div onChange={(e) => handlePaymentMethod(e)} className='info-customer__sex d-flex gap-3'>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="0"
                                        name="paymentMethod"
                                        className='me-2'
                                        checked={paymentMethod === "0"}
                                    />
                                    Thanh toán khi nhận hàng
                                </div>
                                <div className='info-customer__sex-item'>
                                    <input
                                        type="radio"
                                        value="1"
                                        name="paymentMethod"
                                        className='me-2'
                                        checked={paymentMethod === "1"}
                                    />
                                    Thanh toán ngân hàng
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
                            <strong className='total-cart-price__price'>{FormatCurrency(totalPrice)}</strong>
                        </div>
                        <div className='total-cart-price d-flex justify-content-between'>
                            <strong className='total-cart-price__title'>Giảm giá</strong>
                            <strong className='total-cart-price__price'>0₫</strong>
                        </div>
                        <div className='total-cart-price d-flex justify-content-between'>
                            <strong className='total-cart-price__title'>Tổng tiền</strong>
                            <strong className='total-cart-price__price'>{FormatCurrency(totalPrice)}</strong>
                        </div>
                        <div className='cart__submit-button'>
                            <buttom onClick={()=>handleOnSubmitCart()} className='btn btn-primary w-100'>Đặt hàng</buttom>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart