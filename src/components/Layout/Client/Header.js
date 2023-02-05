import React from 'react'
import "../../../assets/Styles/Client/Layout/Header.css"
import { AiOutlineCaretDown, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai"

import Logo from "../../../assets/Images/Logo/logo-dagstore.png"
import LogoSmall from "../../../assets/Images/Logo/logo-dagstore-small.png"

const Header = () => {
    return (
        <header className='header pt-2'>
            <div className='container'>
                <div className='header__top d-flex justify-content-between align-items-center'>
                    <div className='header__logo me-3'>
                        <img className='img-fluid' src={Logo} alt='logo' />
                        <img className='img-fluid' src={LogoSmall} alt='logo' />
                    </div>
                    <div className='header__andress d-flex justify-content-between align-items-center me-3'>
                        <div className='header__andress-left me-2'>
                            <span className='header__andress-title'>Xem giá, tồn kho tại:</span>
                            <div className='header__andress-current'>Hưng Yên</div>
                        </div>
                        <div className='header__andress-right'>
                            <AiOutlineCaretDown />
                        </div>
                    </div>
                    <form className="header__search flex-fill me-3">
                        <input type="text" className="header__search-input" placeholder="Bạn tìm gì..." autoComplete="off" maxLength="100" />
                        <span className="header__search-submit">
                            <AiOutlineSearch size={"20px"} />
                        </span>
                        <div className="header-search-result"></div>
                    </form>
                    <div className='header__history-order text-center me-3'>
                        Lịch sử đơn <br />hàng
                    </div>
                    <div className='header__order d-flex justify-content-center align-items-center'>
                        <AiOutlineShoppingCart size={"24px"} />
                        <span className='header__order-title fw-bold ms-2'>Giỏ hàng</span>
                    </div>
                    <div className='header__listtop justify-content-between align-items-center'>
                        <span className='header__listtop-item px-2 text-center'>24h<br />Công Nghệ</span>
                        <span className='header__listtop-item px-2'>Hỏi Đáp</span>
                        <span className='header__listtop-item px-2'>Game App</span>
                    </div>
                    <div className='header__collapse justify-content-center align-items-center'>
                        <AiOutlineMenu fontSize={"20px"} className='header__collapse-icon' />
                    </div>
                </div>
                <div className='header__search-reponsive mt-2'>
                    <input type="text" className="header__search-input" placeholder="Bạn tìm gì..." autoComplete="off" maxLength="100" />
                    <span className="header__search-submit">
                        <AiOutlineSearch size={"20px"} />
                    </span>
                    <div className="header-search-result"></div>
                </div>
                <div className='header__main'>
                    Main
                </div>
            </div>
        </header>
    )
}

export default Header