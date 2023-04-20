import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { GetProductDetailPage } from '../../../apis/productApiService';
import { Button } from 'react-bootstrap';
import "../../../assets/Styles/Components/Product/ProductDetail.css"
import { AiFillStar, AiFillLike } from "react-icons/ai"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import Modal from 'react-bootstrap/Modal';

const slide1 = require("../../../assets/Images/Slide/slide-product-detail-1.jpg")
const slide2 = require("../../../assets/Images/Slide/slide-product-detail-2.jpg")
const slide3 = require("../../../assets/Images/Slide/slide-product-detail-3.jpg")
const icon1 = require("../../../assets/Images/Icon/medal.png")
const checkListIcon = require("../../../assets/Images/Icon/check-list-icon.png")
const icon2 = require("../../../assets/Images/Icon/product-detail-icon-1.jpg")
const icon3 = require("../../../assets/Images/Icon/product-detail-icon-2.jpg")

const ProductDetail = () => {
    const navigate = useNavigate();
    const [idVariantCurrent, setVariantCurrent] = useState(useParams().id);
    const [dataProductDetailPage, setDataProductDetailPage] = useState({});
    const [product, setProduct] = useState({});
    const [productVariants, setProductVariants] = useState(null);
    const [productAttributes, setProductAttributes] = useState([]);
    const [valueAttributeClick, setValueAttributeClick] = useState({})

    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleModalDetail = () => {
        setShow(true);
    };

    const handleSelect = (key) => {
        if (key === 'detail') {
            // Xử lý sự kiện click trên tab thứ hai
            setShow(true);
            return false;
        }
        setActiveTab(key)
    };

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
        console.log(productVariants)
        console.log(selectedAttributes)
        const matchingVariants = dataProductDetailPage?.productVariants?.filter(variant => {
            return variant.options.some(option => {
                const selectedValue = productAttributes.find(attribute => attribute.name === option.name)?.attributeValues.find(value => value.isSelected);
                return selectedValue && selectedValue.value === option.value;
            });
        }).sort((a, b) => {
            let aSimilarity = 0;
            let bSimilarity = 0;
            a.options.forEach(option => {
                const selectedValue = productAttributes.find(attribute => attribute.name === option.name)?.attributeValues.find(value => value.isSelected);
                if (selectedValue && selectedValue.value === option.value) {
                    aSimilarity++;
                }
            });
            b.options.forEach(option => {
                const selectedValue = productAttributes.find(attribute => attribute.name === option.name)?.attributeValues.find(value => value.isSelected);
                if (selectedValue && selectedValue.value === option.value) {
                    bSimilarity++;
                }
            });
            return bSimilarity - aSimilarity;
        });
        if (matchingVariants) {
            const matchingVariant = matchingVariants[0];

            if (matchingVariant) {
                console.log(`The matching product variant has an id of ${matchingVariant.id}.`);
                setVariantCurrent(matchingVariant.id);
                // fetchProductDetailPage(matchingVariant.id);
                navigate(`/san-pham/${matchingVariant.id}`);
            } else {
                console.log('No matching product variant was found.');
                const matchingVariants = dataProductDetailPage?.productVariants?.filter(variant => {
                    return variant.options.some(option => {
                        const selectedValue = productAttributes.find(attribute => attribute.name === option.name)?.attributeValues.find(value => value.isSelected);
                        return selectedValue && selectedValue.value === option.value;
                    });
                }).sort((a, b) => {
                    let aSimilarity = 0;
                    let bSimilarity = 0;
                    a.options.forEach(option => {
                        const selectedValue = productAttributes.find(attribute => attribute.name === option.name)?.attributeValues.find(value => value.isSelected);
                        if (selectedValue && selectedValue.value === option.value) {
                            aSimilarity++;
                        }
                    });
                    b.options.forEach(option => {
                        const selectedValue = productAttributes.find(attribute => attribute.name === option.name)?.attributeValues.find(value => value.isSelected);
                        if (selectedValue && selectedValue.value === option.value) {
                            bSimilarity++;
                        }
                    });
                    return bSimilarity - aSimilarity;
                });
                if (matchingVariants) {
                    setVariantCurrent(matchingVariants[0].id);
                    navigate(`/san-pham/${matchingVariants[0].id}`);
                }
            }
        }

        function isEmptyObject(obj) {
            return Object.keys(obj).length === 0;
        }

        console.log(valueAttributeClick)
        if (!isEmptyObject(valueAttributeClick)) {
            productAttributes.forEach(attribute => {
                if (attribute.name !== valueAttributeClick.name) {
                    attribute.attributeValues.forEach(attributeValue => {
                        const matchingVariant = productVariants.find(variant => {
                            return variant.options.some(option => {
                                return option.name === attribute.name && option.value === attributeValue.value;
                            }) && variant.options.some(option => {
                                return option.name === valueAttributeClick.name && option.value === valueAttributeClick.value;
                            });
                        });
                        if (!matchingVariant) {
                            attributeValue.disable = true;
                        }
                    });
                }
            });
        }




        console.log(productAttributes)
        // console.log(valueAttributeClick)

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
                attribute.attributeValues.map((value, j) => {
                    if (j === valueIndex) {
                        setValueAttributeClick({ name: attribute.name, value: value.value })
                    }
                })
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
        // setValueAttributeClick
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
            navigate("/gio-hang")
        }
    };

    const handleClickValue = () => {

    }
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className="product-detail container">
            <ul class="breadcrumb">
                <li className='cursor-pointer'>
                    <span>Điện thoại</span>
                </li>
                <li className='cursor-pointer'>
                    <span>›</span>
                    <span>Điện thoại Samsung</span>
                </li>
            </ul>

            <div className='product-header d-flex justify-content-between align-items-center border-bottom pb-3'>
                <div className='product-header__start d-flex align-items-center'>
                    <h1 className='product-header__name me-2 mb-0'>Điện thoại Samsung Galaxy S23 5G 128GB</h1>
                    <div class="product-header__rating d-flex align-items-center gap-2">
                        <div className='cursor-pointer'>
                            <AiFillStar size={14} color='FB6E2E' />
                            <AiFillStar size={14} color='FB6E2E' />
                            <AiFillStar size={14} color='FB6E2E' />
                            <AiFillStar size={14} color='FB6E2E' />
                            <AiFillStar size={14} color='FB6E2E' />
                            <AiFillStar size={14} color='FB6E2E' />
                        </div>
                        <div class="product-header__rating-count cursor-pointer">12 <span>đánh giá</span></div>
                    </div>
                </div>
                <div className='product-header__end'>
                    <div className='product-header__link d-flex gap-2'>
                        <div className='product-header__link-item d-flex align-items-center cursor-pointer'>
                            <AiFillLike />
                            Thích
                        </div>
                        <div className='product-header__link-item d-flex align-items-center cursor-pointer'>
                            Chia sẻ
                        </div>
                    </div>
                </div>
            </div>

            <div className='product-body'>
                <div className='product-body__start col-8 pt-3'>
                    <div className='product-body__gallery d-flex flex-column-reverse'>
                        <Tabs
                            activeKey={activeTab}
                            id="uncontrolled-tab-example"
                            className="product-slide__navs mb-3"
                            onSelect={handleSelect}
                        >
                            <Tab eventKey="home" title={<>
                                <div className='product-slide__button d-flex flex-column mt-3'>
                                    <div className='product-slide__button-img'>
                                        <img className='' src={icon1} />
                                    </div>
                                    <span className='product-slide__button-title'>
                                        Điểm nổi bật
                                    </span>
                                </div>
                            </>}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={0}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }}
                                >
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide1} alt={""} />
                                    </SwiperSlide>
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide2} alt={""} />
                                    </SwiperSlide>
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide3} alt={""} />
                                    </SwiperSlide>

                                    <div ref={navigationPrevRef} className="header-top-bar__swiper-button"><GrFormPrevious className='header-top-bar__swiper-icon swiper-button-prev' /></div>
                                    <div ref={navigationNextRef} className="header-top-bar__swiper-button"><GrFormNext className='header-top-bar__swiper-icon swiper-button-next' /></div>
                                </Swiper>
                            </Tab>
                            <Tab eventKey="profile" title={
                                <>
                                    <div className='product-slide__button d-flex flex-column mt-3'>
                                        <div className='product-slide__button-img'>
                                            <img className='' src={icon2} />
                                        </div>
                                        <span className='product-slide__button-title'>
                                            Tím nhạt
                                        </span>
                                    </div>
                                </>
                            }>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={0}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }}
                                >
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide1} alt={""} />
                                    </SwiperSlide>
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide2} alt={""} />
                                    </SwiperSlide>
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide3} alt={""} />
                                    </SwiperSlide>

                                    <div ref={navigationPrevRef} className="header-top-bar__swiper-button"><GrFormPrevious className='header-top-bar__swiper-icon swiper-button-prev' /></div>
                                    <div ref={navigationNextRef} className="header-top-bar__swiper-button"><GrFormNext className='header-top-bar__swiper-icon swiper-button-next' /></div>
                                </Swiper>
                            </Tab>
                            <Tab eventKey="contact" title={
                                <>
                                    <div className='product-slide__button d-flex flex-column mt-3'>
                                        <div className='product-slide__button-img'>
                                            <img className='' src={icon3} />
                                        </div>
                                        <span className='product-slide__button-title'>
                                            Kem
                                        </span>
                                    </div>
                                </>
                            }>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={0}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }}
                                >
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide1} alt={""} />
                                    </SwiperSlide>
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide2} alt={""} />
                                    </SwiperSlide>
                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                        <img className='product-slide__item-img' src={slide3} alt={""} />
                                    </SwiperSlide>

                                    <div ref={navigationPrevRef} className="header-top-bar__swiper-button"><GrFormPrevious className='header-top-bar__swiper-icon swiper-button-prev' /></div>
                                    <div ref={navigationNextRef} className="header-top-bar__swiper-button"><GrFormNext className='header-top-bar__swiper-icon swiper-button-next' /></div>
                                </Swiper>
                            </Tab>
                            <Tab eventKey="detail" title={
                                <>
                                    <div className='product-slide__button d-flex flex-column mt-3'>
                                        <div className='product-slide__button-img'>
                                            <img className='' src={checkListIcon} />
                                        </div>
                                        <span className='product-slide__button-title'>
                                            Thông tin sản phẩm
                                        </span>
                                    </div>
                                </>
                            }>
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                    className='product-detail__modal'
                                    size="lg" aria-labelledby="example-modal-long-title"
                                >
                                    <Modal.Body>
                                        <Tabs
                                            activeKey={activeTab}
                                            id="uncontrolled-tab-example"
                                            className="product-slide__navs mb-3"
                                            onSelect={handleSelect}
                                        >
                                            <Tab eventKey="home" title={<>
                                                <div className='btn-tab-modal'>Điểm nổi bật</div>

                                            </>}>
                                                ok
                                            </Tab>
                                            <Tab eventKey="profile" title={
                                                <>
                                                    <div className='btn-tab-modal'>Tím</div>
                                                </>
                                            }>
                                                <Swiper
                                                    spaceBetween={50}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    speed={0}
                                                    navigation={{
                                                        prevEl: navigationPrevRef.current,
                                                        nextEl: navigationNextRef.current,
                                                    }}
                                                    onBeforeInit={(swiper) => {
                                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                                    }}
                                                >
                                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                                        <img className='product-slide__item-img' src={slide1} alt={""} />
                                                    </SwiperSlide>
                                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                                        <img className='product-slide__item-img' src={slide2} alt={""} />
                                                    </SwiperSlide>
                                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                                        <img className='product-slide__item-img' src={slide3} alt={""} />
                                                    </SwiperSlide>

                                                    <div ref={navigationPrevRef} className="header-top-bar__swiper-button"><GrFormPrevious className='header-top-bar__swiper-icon swiper-button-prev' /></div>
                                                    <div ref={navigationNextRef} className="header-top-bar__swiper-button"><GrFormNext className='header-top-bar__swiper-icon swiper-button-next' /></div>
                                                </Swiper>
                                            </Tab>
                                            <Tab eventKey="contact" title={
                                                <>
                                                    <div className='btn-tab-modal'>Đen</div>
                                                </>
                                            }>
                                                <Swiper
                                                    spaceBetween={50}
                                                    slidesPerView={1}
                                                    loop={true}
                                                    speed={0}
                                                    navigation={{
                                                        prevEl: navigationPrevRef.current,
                                                        nextEl: navigationNextRef.current,
                                                    }}
                                                    onBeforeInit={(swiper) => {
                                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                                    }}
                                                >
                                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                                        <img className='product-slide__item-img' src={slide1} alt={""} />
                                                    </SwiperSlide>
                                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                                        <img className='product-slide__item-img' src={slide2} alt={""} />
                                                    </SwiperSlide>
                                                    <SwiperSlide className='product-slide__item d-flex align-items-center justify-content-center' key={`slide-header-top-bar`}>
                                                        <img className='product-slide__item-img' src={slide3} alt={""} />
                                                    </SwiperSlide>

                                                    <div ref={navigationPrevRef} className="header-top-bar__swiper-button"><GrFormPrevious className='header-top-bar__swiper-icon swiper-button-prev' /></div>
                                                    <div ref={navigationNextRef} className="header-top-bar__swiper-button"><GrFormNext className='header-top-bar__swiper-icon swiper-button-next' /></div>
                                                </Swiper>
                                            </Tab>
                                            <Tab eventKey="detail" title={
                                                <>
                                                    <div className='btn-tab-modal'>Thông tin sản phẩm</div>
                                                </>
                                            }>
                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                    backdrop="static"
                                                    keyboard={false}
                                                    className='product-detail__modal'
                                                    size="lg" aria-labelledby="example-modal-long-title"
                                                >
                                                    <Modal.Body>
                                                        I will not close if you click outside me. Don't even try to press
                                                        escape key.
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary">Understood</Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Tab>
                                        </Tabs>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Tab>
                        </Tabs>
                    </div>
                </div>

            </div>

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
                                                        <Button onClick={() => { handleClickAttributeValue(attributeIndex, valueIndex); handleClickValue() }} className='btn btn-primary me-3'>{value.value}</Button>
                                                    }
                                                </>
                                            }

                                            {
                                                value.value && value.isSelected === false &&
                                                <>
                                                    {
                                                        valueAttributeClick && value.disable &&
                                                        <Button className={"btn btn-danger me-3"}>{value.value}</Button>
                                                    }
                                                    {
                                                        value.disable !== true &&
                                                        <Button onClick={() => { handleClickAttributeValue(attributeIndex, valueIndex); handleClickValue() }} className={"btn btn-secondary me-3"}>{value.value}</Button>
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
        </div >
    )
}

export default ProductDetail