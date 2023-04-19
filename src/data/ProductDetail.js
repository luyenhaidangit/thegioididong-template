const ProductCategoryBanner1 = require("../assets/Images/TopBanner/product-category-banner-1.webp")
const ProductCategoryBanner2 = require("../assets/Images/TopBanner/product-categroy-banner-2.png")
const ProductCategoryBanner3 = require("../assets/Images/TopBanner/product-categroy-banner-3.png")
const ProductCategoryBanner4 = require("../assets/Images/TopBanner/product-categroy-banner-4.png")
const ProductCategoryBanner5 = require("../assets/Images/TopBanner/product-categroy-banner-5.png")
const ProductCategoryBanner6 = require("../assets/Images/TopBanner/product-categroy-banner-6.png")
const ProductCategoryBanner8 = require("../assets/Images/TopBanner/product-categroy-banner-8.png")
const ProductCategoryBanner9 = require("../assets/Images/TopBanner/product-categroy-banner-9.png")
const ProductCategoryPromoBanner1 = require("../assets/Images/TopBanner/product-category-promo-banner-1.png")
const ProductCategoryPromoBanner2 = require("../assets/Images/TopBanner/product-category-promo-banner-2.png")

const Product_Image_01 = require("../assets/Images/Product/product_image_01.jpg")
const Product_Image_02 = require("../assets/Images/Product/product_image_02.jpg")
const Product_Image_03 = require("../assets/Images/Product/product_image_03.jpeg")
const Product_Image_04 = require("../assets/Images/Product/product_image_04.jpg")
const Product_Image_06 = require("../assets/Images/Product/product_image_06.jpg")
const Product_Image_15 = require("../assets/Images/Product/product_image_15.jpeg")
const Product_Image_16 = require("../assets/Images/Product/product_image_16.jpg")
const Product_Image_17 = require("../assets/Images/Product/product_image_17.jpeg")
const Product_Image_18 = require("../assets/Images/Product/product_image_18.png")
const Product_Image_19 = require("../assets/Images/Product/product_image_19.jpeg")
const Product_Image_20 = require("../assets/Images/Product/product_image_20.jpg")

const BrandImage1 = require("../assets/Images/Brand/brand-1.png")
const BrandImage2 = require("../assets/Images/Brand/brand-2.png")
const BrandImage3 = require("../assets/Images/Brand/brand-3.jpg")
const BrandImage4 = require("../assets/Images/Brand/brand-4.png")
const BrandImage5 = require("../assets/Images/Brand/brand-5.png")
const BrandImage6 = require("../assets/Images/Brand/brand-6.png")
const BrandImage7 = require("../assets/Images/Brand/brand-7.jpg")
const BrandImage8 = require("../assets/Images/Brand/brand-8.jpg")
const BrandImage9 = require("../assets/Images/Brand/brand-9.jpg")
const BrandImage10 = require("../assets/Images/Brand/brand-10.jpg")
const BrandImage11 = require("../assets/Images/Brand/brand-11.png")

const BadgeImage1 = require("../assets/Images/Icon/badge-icon-1.webp")
const BadgeImage2 = require("../assets/Images/Icon/badge-icon-2.webp")
const BadgeImage3 = require("../assets/Images/Icon/badge-icon-3.webp")

const ProductDetail = {
    id: 1,
    productCategory: {
        id: 1,
        name: "Điện thoại"
    },
    brand: {
        id: 1,
        name: "Samsung"
    },
    rating: {
        numberStar: 5,
        countRating: 12
    },
    galleries: [
        {
            id: 1,
            name: "Điểm nổi bật",
            image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-2-200x200.jpg",
            galleryImages: [
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/Slider/man-hinh-s23-series-1020x570.jpg",
                },
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/Slider/vi-vn-samsung-galaxy-s23-5g-256gb--(2).jpg",
                },
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/Slider/man-hinh-s23-series-1-1020x570.jpg",
                }
            ]
        },
        {
            id: 2,
            name: "Đen",
            image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-2-200x200.jpg",
            galleryImage: [
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-den-1-1.jpg",
                },
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-den-2-1.jpg",
                },
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-den-3-1.jpg",
                }
            ]
        },
        {
            id: 2,
            name: "Tím nhạt",
            image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-2-200x200.jpg",
            galleryImage: [
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-den-1-1.jpg",
                },
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-den-2-1.jpg",
                },
                {
                    id: 1,
                    image: "https://cdn.tgdd.vn/Products/Images/42/301795/samsung-galaxy-s23-den-3-1.jpg",
                }
            ]
        }
    ],
    productVariants: [
        {
            id: 1,
            name: "Samsung Galaxy S23 5G 128GB",
            discountedPrice: 19990000,
            originalPrice: 22990000,
            isInterest: true,
            specifications: [
                {
                    name: "Màu",
                    value: "Đỏ"
                },
                {
                    name: "RAM",
                    value: "128GB"
                }
            ],
        }
    ],
    fullDescripton: "Samsung Galaxy S23 5G 128GB chắc hẳn không còn là cái tên quá xa lạ đối với các tín độ công nghệ hiện nay, được xem là một trong những gương mặt chủ chốt đến từ nhà Samsung với cấu hình mạnh mẽ bậc nhất, camera trứ danh hàng đầu cùng lối hoàn thiện vô cùng sang trọng và hiện đại.",
}

export default ProductDetail;