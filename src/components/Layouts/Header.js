// Libraries
import React from 'react'

import { useNavigate } from 'react-router-dom';

import { AiOutlineCaretDown, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai"

// Styles
import "../../assets/Styles/Layouts/Header.css"

// Resources
import Logo from "../../assets/Images/Logo/logo-dagstore.png"
import LogoSmall from "../../assets/Images/Logo/logo-dagstore-small.png"

const Header = (props) => {
    // Hook
    const { productCategories } = props;

    const navigate = useNavigate();

    return (
        <header className='header pt-2'>
            <div className='container'>
                <div className='header__top d-flex justify-content-between align-items-center'>
                    <div onClick={() => navigate('/')} className='header__logo me-3'>
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
                        Tài khoản & <br />  đơn hàng
                    </div>
                    <div onClick={() => navigate('/gio-hang')} className='header__order d-flex justify-content-center align-items-center'>
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
                <ul className='header__main main-nav d-flex justify-content-between align-items-center mt-4 mb-0 p-0'>
                    {
                        productCategories && productCategories.length > 0 &&
                        productCategories.map((categoryMain, index) => {
                            return (
                                <div onClick={() => navigate(`/loai-san-pham/${categoryMain.id}`)} key={`categoryMain-${index}`} className='main-nav__item pb-3'>
                                    <span className="main-nav__item-link d-flex align-items-center">
                                        {
                                            categoryMain.badgeIcon && categoryMain.badgeIcon.length > 0 &&
                                            <img src={categoryMain.badgeIcon} className="main-nav__item-icon img-fluid me-1" alt="icon-category"></img>
                                        }
                                        {categoryMain.name}
                                        {
                                            categoryMain.listProductCategoryChild && categoryMain?.listProductCategoryChild?.length > 0 &&
                                            <AiOutlineCaretDown fontSize={"12px"} className="main-nav__item-icon ms-1" />
                                        }
                                        {
                                            categoryMain?.productCategoryGroups && categoryMain?.productCategoryGroups?.length > 0 &&
                                            <AiOutlineCaretDown fontSize={"12px"} className="main-nav__item-icon ms-1" />
                                        }
                                    </span>
                                    {
                                        (categoryMain?.listProductCategoryChild?.length > 0 || categoryMain?.productCategoryGroups?.length > 0) &&
                                        <ul className="main-sub-nav">
                                            {
                                                categoryMain.listProductCategoryChild && categoryMain?.listProductCategoryChild?.length > 0 &&
                                                <div className="main-sub-nav__group d-flex flex-column">
                                                    {
                                                        categoryMain.listProductCategoryChild && categoryMain?.listProductCategoryChild?.length > 0 &&
                                                        categoryMain.listProductCategoryChild.map((categoryChild, index) => {
                                                            return (
                                                                <h3 key={`main-sub-nav__item-${index}`} className='main-sub-nav__item mt-2 mb-1'>{categoryChild.name}</h3>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }

                                            <div className="main-sub-nav__group group-product-category d-flex flex-column flex-wrap">
                                                {
                                                    categoryMain.productCategoryGroups && categoryMain?.productCategoryGroups?.length > 0 &&
                                                    categoryMain.productCategoryGroups.map((productCategoryProduct, index) => {
                                                        return (
                                                            <div key={`group-product-category__item-${index}`} className='group-product-category__item pb-1 mt-2'>
                                                                <strong className='group-product-category__title pb-1'>
                                                                    {productCategoryProduct.name}
                                                                </strong>
                                                                {
                                                                    productCategoryProduct && productCategoryProduct?.productCategories?.length > 0 &&
                                                                    productCategoryProduct?.productCategories.map((productCategoryGroupItem, index) => {
                                                                        return (
                                                                            <h3 key={`group-product-category__item-category-${index}`} className='group-product-category__item-category mb-0'>{productCategoryGroupItem.name}</h3>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </ul>
                                    }
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header