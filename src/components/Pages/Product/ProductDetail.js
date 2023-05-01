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
import {BsFillBoxFill} from "react-icons/gr"
import Modal from 'react-bootstrap/Modal';
import FormatCurrency from '../../../helpers/Strings/FormatCurrency';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {AiOutlineInbox} from "react-icons/ai"

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

    const handleButtonClick = async  () => {
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: 'Nhập số lượng cần mua',
            input: 'number',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Bỏ qua',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
              return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                  if (!response.ok) {
                    throw new Error(response.statusText)
                  }
                  return response.json()
                })
                .catch(error => {
                  Swal.showValidationMessage(
                    `Request failed: ${error}`
                  )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result)=>{
            if (result.isConfirmed) {
                const quantity = result?.value?.login;
              
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
           
        }
         MySwal.fire(
            'Thành công!',
            'Sản phẩm bạn đặt mua đã được thêm vào giỏ hàng.',
            'success'
          ).then(()=>{
            navigate("/gio-hang");
          });
      
          // Chuyển trang
          
            }
          })
     
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

            <div className='product-body d-flex gap-4'>
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
                    <div class="accompanying-program-product">
                                    <div class="row border-bottom">
                                        <div class="col-12 col-md-6">
                                            <div class="accompanying-program-product__item d-flex py-2">
                                                {/* <AiOutlineInbox fontSize={40} className='me-2 text-primary'/> */}
                                                <div class="product-item-core__text text-dark">   
                                                    Hư gì đổi nấy <strong>12 tháng</strong> tại 3301 siêu thị toàn quốc (miễn phí tháng đầu) <a class="ms-2" href="#">Xem chi tiết</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-6">
                                            <div class="accompanying-program-product__item d-flex py-2">
                                                <i class="fad fa-shield-check text-primary me-2"></i>
                                                <div class="product-item-core__text text-dark">   
                                                    Bảo hành <strong>chính hãng điện thoại 1 năm</strong> tại các trung tâm bảo hành hãng <a class="ms-2" href="#">Xem chi tiết</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 col-md-6">
                                            <div class="accompanying-program-product__item d-flex py-2">
                                                <i class="fad fa-box text-primary me-2"></i>
                                                <div class="product-item-core__text text-dark">   
                                                    Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C, Củ sạc nhanh Type C  <a class="ms-2" href="#">Xem chi tiết</a>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6">

                                        </div>
                                    </div>
                    </div>
                    <div className='product-description'>
                        <img className='w-100' src="https://cdn.tgdd.vn/Products/Images/42/251192/Kit/iphone-14-pro-max-note.jpg"/>
                        <h3 class="article__content__title">Thông tin sản phẩm</h3>
                        <h4>iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế hình màn hình mới, hứa hẹn mang lại những trải nghiệm đầy mới mẻ cho người dùng iPhone.</h4>
                        <p>
                        iPhone năm nay sẽ được thừa hưởng nét đặc trưng từ người anh iPhone 13 Pro Max, vẫn sẽ là khung thép không gỉ và mặt lưng kính cường lực kết hợp với tạo hình vuông vức hiện đại thông qua cách tạo hình phẳng ở các cạnh và phần mặt lưng.
                        </p>
                        <img className='w-100' src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-041222-103237.jpg"/>
                        <p>Nhìn vào màn hình ta sẽ thấy được một độ trong trẻo vô cùng thích mắt, nội dung hiển thị có chiều sâu, cảm giác khi xem phim hay chơi game cũng trở nên sống động hơn.

Điểm vượt trội nhất mà các loại tấm nền khác khó mà đạt được là độ chuẩn các về màu sắc cao, mình cũng đã sử dụng iPhone 14 Pro Max để thiết kế một vài ấn phẩm như poster hay sticker đơn giản và thành quả lúc in ra sau khi đối chiếu lại với ảnh trên điện thoại thì gần như là bằng nhau, độ sai lệch không quá đáng kể giúp mình an tâm hơn trong việc thiết kế hình ảnh.</p>
                    </div>

                </div>
                <div className='product-body__end col-4 pt-3'>
                    <div className='btn-select-attribute'>
                    {
                productAttributes.map((attribute, attributeIndex) => {
                    return (
                        <>
                            <div className='mb-2'>
                            {
                                attribute.attributeValues.map((value, valueIndex) => {
                                    return (
                                        <>
                                            {
                                                value.value && value.isSelected === true &&
                                                <>
                                                    {
                                                        <div onClick={() => { handleClickAttributeValue(attributeIndex, valueIndex); handleClickValue() }} className='button-attribute-value active me-3'>{value.value}</div>
                                                    }
                                                </>
                                            }

                                            {
                                                value.value && value.isSelected === false &&
                                                <>
                                                    {
                                                        valueAttributeClick && value.disable &&
                                                        <div className={"button-attribute-value me-3"}>{value.value}</div>
                                                    }
                                                    {
                                                        value.disable !== true &&
                                                        <div onClick={() => { handleClickAttributeValue(attributeIndex, valueIndex); handleClickValue() }} className={"button-attribute-value me-3"}>{value.value}</div>
                                                    }
                                                </>
                                            }
                                        </>
                                    )
                                })
                            }
                            </div>
                        </>
                    )
                })
            }
                    </div>
                    <div className='btn-product-price py-3'>
                        <span className='btn-product-price__original-price'>{product.originalPrice > 0? FormatCurrency(product.originalPrice): null}</span>
                        <span className='btn-product-price__old-price ms-2'>22.990.000₫</span>
                        <span class="product-card__item-discount-percentage ms-2">-5%</span>
                    </div>
                    <div className='card-promo mt-2'>
                        <div className='card-promo__top'>
                            <div className='card-promo__top-title'>
                            Khuyến mãi
                            </div>
                            <div>
                            Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 24/04
                            </div>
                        </div>
                        <div className='card-promo__body'>
                            <div className='card-promo__item d-flex'>
                                <span class="card-promo__item-number">1</span>
                                <p className='ps-2'>Tặng gói bảo hành mở rộng 12 tháng (số lượng có hạn, không kèm Trả góp 0% và Thu cũ Đổi mới)</p>
                            </div>
                        </div>  
                    </div>
                    <div className='button-buy-card'>
                        <div className='button-buy-cart mt-4' onClick={handleButtonClick}>Mua ngay</div>
                    </div>

                    <div class="box-info-product mt-4">
                                    <h5>Cấu hình Điện thoại OPPO Reno8 Z 5G</h5>
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td scope="row">Màn hình:</td>
                                                <td>AMOLED6.43"Full HD+</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">Hệ điều hành:</td>
                                                <td>Android 12</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">Camera sau:</td>
                                                <td>Chính 64 MP & Phụ 2 MP, 2 MP</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">Camera trước:</td>
                                                <td>16 MP</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">Chip:</td>
                                                <td>Snapdragon 695 5G</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">RAM:</td>
                                                <td>8GB</td>
                                            </tr>


                                            <tr>
                                                <td scope="row">Bộ nhớ trong: </td>
                                                <td>256GB</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">SIM:</td>
                                                <td>2 Nano SIMHỗ trợ 5G</td>
                                            </tr>

                                            <tr>
                                                <td scope="row">Pin, Sạc:</td>
                                                <td>4500 mAh33 W</td>
                                            </tr>                                                               
                                        </tbody>
                                    </table>

                                    <div class="nav-item" role="presentation">
                                        <div class="product-preview-tab d-flex justify-content-center" control="#childButtonTab7" id="pills-home-tab" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" role="tab" aria-controls="pills-preview-product-7" aria-selected="false" tabindex="-1">

                                            <button type="button" class="btn btn-outline-primary w-60">Xem thêm cấu hình chi tiết</button>
                                        </div>
                                    </div>
                                </div>
                </div>            
            </div>
            
        </div >
    )
}

export default ProductDetail