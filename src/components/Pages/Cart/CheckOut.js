import React, { useState } from 'react'
import "../../../assets/Styles/Components/Cart/CheckOut.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GrFormAdd, GrFormSubtract } from "react-icons/gr"
import FormatCurrency from '../../../helpers/Strings/FormatCurrency';

const CheckOut = () => {
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
                <div className='body-cart py-0'>
                <div class="alertsuccess-new">
                    <i class="new-cartnew-success"></i>
                    <strong>Đặt hàng thành công</strong>
                </div>
                    <div className='cart__info-customer'>
                        <div className='info-customer'>
                            <p className='order-content-p'>Cảm ơn Anh Test đã cho Thế Giới Di Động cơ hội được phục vụ.</p>
                            <div className='infor-order d-flex flex-column'>
                            <label>
                                <span class="">
                                    <span>
                                        <strong>Đơn hàng: </strong>#12345
                                    </span>
                                </span>
                            </label>
                            <label>
                                <span class="">
                                    <span>
                                        <strong>Người nhận hàng: </strong>Anh Test, 0979999997
                                    </span>
                                </span>
                            </label>
                            <label>
                                <span class="">
                                    <span>
                                        <strong>Giao đến: </strong>Yên Mỹ - Hưng Yên
                                    </span>
                                </span>
                            </label>
                            <label>
                                <span class="">
                                    <span>
                                        <strong>Tổng tiền: </strong>12.000.000đ
                                    </span>
                                </span>
                            </label>
                            <label>
                                <span class="">
                                    <span>
                                        <strong>Ghi chú: </strong>Hehe
                                    </span>
                                </span>
                            </label>
                            </div>
                        </div>

                        <h4 class="order-infor-alert"> Đơn hàng chưa được thanh toán </h4>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CheckOut