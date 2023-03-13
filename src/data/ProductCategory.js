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
const Product_Image_05 = require("../assets/Images/Product/product_image_05.jpg")
const Product_Image_06 = require("../assets/Images/Product/product_image_06.jpg")
const Product_Image_07 = require("../assets/Images/Product/product_image_07.jpeg")
const Product_Image_08 = require("../assets/Images/Product/product_image_08.jpg")
const Product_Image_09 = require("../assets/Images/Product/product_image_09.jpg")
const Product_Image_10 = require("../assets/Images/Product/product_image_10.jpeg")
const Product_Image_11 = require("../assets/Images/Product/product_image_11.jpeg")
const Product_Image_12 = require("../assets/Images/Product/product_image_12.jpeg")
const Product_Image_13 = require("../assets/Images/Product/product_image_13.jpg")
const Product_Image_14 = require("../assets/Images/Product/product_image_14.jpeg")
const Product_Image_15 = require("../assets/Images/Product/product_image_15.jpeg")
const Product_Image_16 = require("../assets/Images/Product/product_image_16.jpg")
const Product_Image_17 = require("../assets/Images/Product/product_image_17.jpeg")
const Product_Image_18 = require("../assets/Images/Product/product_image_18.png")
const Product_Image_19 = require("../assets/Images/Product/product_image_19.jpeg")
const Product_Image_20 = require("../assets/Images/Product/product_image_20.jpg")
const Product_Image_21 = require("../assets/Images/Product/product_image_21.jpg")
const Product_Image_22 = require("../assets/Images/Product/product_image_22.jpg")
const Product_Image_23 = require("../assets/Images/Product/product_image_23.jpg")

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

const ProductCategory = {
    name: 'Điện thoại',
    topBanner: {
        slide: {
            id: 1,
            slideItems: [
                {
                    id: 1,
                    image: ProductCategoryBanner1,
                    url: null,
                },
                {
                    id: 2,
                    image: ProductCategoryBanner2,
                    url: null,
                },
                {
                    id: 3,
                    image: ProductCategoryBanner3,
                    url: null,
                },
                {
                    id: 4,
                    image: ProductCategoryBanner4,
                    url: null,
                },
                {
                    id: 5,
                    image: ProductCategoryBanner5,
                    url: null,
                },
                {
                    id: 6,
                    image: ProductCategoryBanner6,
                    url: null,
                },
                {
                    id: 8,
                    image: ProductCategoryBanner8,
                    url: null,
                },
                {
                    id: 9,
                    image: ProductCategoryBanner9,
                    url: null,
                }
            ]
        },
        bannerFirst: {
            id: 1,
            image: ProductCategoryPromoBanner1,
            url: null,
        },
        bannerSecond: {
            id: 2,
            image: ProductCategoryPromoBanner2,
            url: null,
        },
    },
    boxFilter: {
        attributeFilters: [
            {
                id: 1,
                name: 'Loại điện thoại',
                attributeValues: [
                    {
                        id: 1,
                        value: 'Android',
                        selected: false,
                    },
                    {
                        id: 2,
                        value: 'iPhone (iOS)',
                        selected: false,
                    },
                    {
                        id: 3,
                        value: 'Điện thoại phổ thông',
                        selected: false,
                    }
                ],
                quickFilter: false,
            },
            {
                id: 2,
                name: 'Nhu cầu',
                attributeValues: [
                    {
                        id: 1,
                        value: 'Chơi game/Cấu hình cao',
                        selected: false,
                    },
                    {
                        id: 2,
                        value: 'Chụp ảnh, quay phim',
                        selected: false,
                    },
                    {
                        id: 3,
                        value: 'Mỏng nhẹ',
                        selected: false,
                    },
                    {
                        id: 4,
                        value: 'Nhỏ gọn, dễ cầm',
                        selected: false,
                    }
                ],
                quickFilter: true,
            },
            {
                id: 3,
                name: 'RAM',
                attributeValues: [
                    {
                        id: 1,
                        value: '2GB',
                        selected: false,
                    },
                    {
                        id: 2,
                        value: '3GB',
                        selected: false,
                    },
                    {
                        id: 3,
                        value: '4GB',
                        selected: false,
                    },
                    {
                        id: 4,
                        value: '6GB',
                        selected: false,
                    },
                    {
                        id: 5,
                        value: '8GB',
                        selected: false,
                    },
                    {
                        id: 6,
                        value: '12GB',
                        selected: false,
                    }
                ],
                quickFilter: false,
            },
            {
                id: 4,
                name: 'ROM',
                attributeValues: [
                    {
                        id: 1,
                        value: '32GB',
                        selected: false,
                    },
                    {
                        id: 2,
                        value: '64GB',
                        selected: false,
                    },
                    {
                        id: 3,
                        value: '128GB',
                        selected: false,
                    },
                    {
                        id: 4,
                        value: '256GB',
                        selected: false,
                    },
                    {
                        id: 5,
                        value: '512GB',
                        selected: false,
                    },
                    {
                        id: 6,
                        value: '1TB',
                        selected: false,
                    }
                ]
            },
            {
                id: 5,
                name: 'Pin & sạc',
                attributeValues: [
                    {
                        id: 1,
                        value: 'Pin khủng trên 5000W',
                        selected: false,
                    },
                    {
                        id: 2,
                        value: 'Sạc nhanh (từ 18W)',
                        selected: false,
                    },
                    {
                        id: 3,
                        value: 'Sạc siêu nhanh (từ 33W)',
                        selected: false,
                    },
                    {
                        id: 4,
                        value: 'Sạc không dây',
                        selected: false,
                    }
                ],
                quickFilter: false,
            },
            {
                id: 5,
                name: 'Tính năng đặc biệt',
                attributeValues: [
                    {
                        id: 1,
                        value: 'Kháng bụi, nước',
                        selected: false,
                    },
                    {
                        id: 2,
                        value: 'Hỗ trợ 5G',
                        selected: false,
                    },
                    {
                        id: 3,
                        value: 'Bảo mật khuôn mặt',
                        selected: false,
                    },
                    {
                        id: 4,
                        value: 'Chống rung quang học',
                        selected: false,
                    }
                ]
            },
        ],
        priceFilter: {
            minPrice: 500000,
            maxPrice: 43000000,
            rangePrices: [
                {
                    id: 1,
                    startPrice: null,
                    endPrice: 2000000,
                },
                {
                    id: 3,
                    startPrice: 2000000,
                    endPrice: 4000000,
                },
                {
                    id: 4,
                    startPrice: 4000000,
                    endPrice: 7000000,
                },
                {
                    id: 5,
                    startPrice: 4000000,
                    endPrice: 7000000,
                },
                {
                    id: 6,
                    startPrice: 7000000,
                    endPrice: 13000000,
                },
                {
                    id: 7,
                    startPrice: 13000000,
                    endPrice: 20000000,
                },
                {
                    id: 8,
                    startPrice: 20000000,
                    endPrice: null,
                },
            ]
        },
        brandFilter: [
            {
                id: 1,
                image: BrandImage1,
            },
            {
                id: 2,
                image: BrandImage2,
            },
            {
                id: 3,
                image: BrandImage3,
            },
            {
                id: 4,
                image: BrandImage4,
            },
            {
                id: 5,
                image: BrandImage5,
            },
            {
                id: 6,
                image: BrandImage6,
            },
            {
                id: 7,
                image: BrandImage7,
            },
            {
                id: 8,
                image: BrandImage8,
            },
            {
                id: 9,
                image: BrandImage9,
            },
            {
                id: 10,
                image: BrandImage10,
            },
            {
                id: 11,
                image: BrandImage11,
            },
        ]
    },
    products: [
        {
            id: 1,
            name: "iPhone 12 256GB",
            image: Product_Image_01,
            original_price: 23990000,
            discounted_price: 18090000,
            discount_percent: 24,
            quantity_left: 21,
            quantity_total: 22,
        },
        {
            id: 2,
            name: "Tai nghe Bluetooth True Wireless Mozard TS11 mini",
            image: Product_Image_02,
            original_price: 790000,
            discounted_price: 315000,
            discount_percent: 60,
            quantity_left: 13,
            quantity_total: 20,
        },
        {
            id: 3,
            name: "BeU Active 1 45mm dây silicone",
            image: Product_Image_03,
            original_price: 1490000,
            discounted_price: 490000,
            discount_percent: 67,
            quantity_left: 76,
            quantity_total: 142,
        },
        {
            id: 4,
            name: "Surface Laptop Go i5 1035G1",
            image: Product_Image_04,
            original_price: 17490000,
            discounted_price: 13990000,
            discount_percent: 20,
            quantity_left: 8,
            quantity_total: 10,
        },
        {
            id: 5,
            name: "ADRIATICA 26 mm Nữ A3637.1263QZ",
            image: Product_Image_05,
            original_price: 3550000,
            discounted_price: 1242000,
            discount_percent: 65,
            quantity_left: 19,
            quantity_total: 20,
        },
        {
            id: 6,
            name: "MSI Modern 14 B11MOU i3 1115G4 (1027VN)",
            image: Product_Image_06,
            original_price: 13790000,
            discounted_price: 10490000,
            discount_percent: 23,
            quantity_left: 17,
            quantity_total: 20,
        },
        {
            id: 7,
            name: "Asus TUF Gaming F15 FX506LHB i5 10300H",
            image: Product_Image_07,
            original_price: 20990000,
            discounted_price: 16990000,
            discount_percent: 19,
            quantity_left: 14,
            quantity_total: 20,
        },
        {
            id: 8,
            name: "MATHEY TISSOT 30 mm Nữ D450AI",
            image: Product_Image_08,
            original_price: 3990000,
            discounted_price: 1396000,
            discount_percent: 65,
            quantity_left: 20,
            quantity_total: 20,
        },
        {
            id: 9,
            name: "iPhone 14 Plus 512GB",
            image: Product_Image_09,
            original_price: 36990000,
            discounted_price: 26990000,
            discount_percent: 27,
            quantity_left: 21,
            quantity_total: 22,
        },
        {
            id: 10,
            name: "Sạc dây Xmobile TS-C079S",
            image: Product_Image_10,
            original_price: 120000,
            discounted_price: 45000,
            discount_percent: 60,
            quantity_left: 19,
            quantity_total: 20,
        },
        {
            id: 11,
            name: "BeFit B4 44mm dây silicone",
            image: Product_Image_11,
            original_price: 990000,
            discounted_price: 490000,
            discount_percent: 50,
            quantity_left: 114,
            quantity_total: 142,
        },
        {
            id: 12,
            name: "Xmobile P68D",
            image: Product_Image_12,
            original_price: 750000,
            discounted_price: 375000,
            discount_percent: 50,
            quantity_left: 6,
            quantity_total: 20,
        },
        {
            id: 13,
            name: "MSI Modern 14 B11MOU i3 1115G4 (1027VN)",
            image: Product_Image_13,
            original_price: 13790000,
            discounted_price: 10490000,
            discount_percent: 23,
            quantity_left: 17,
            quantity_total: 20,
        },
        {
            id: 14,
            name: "Xmobile P68D",
            image: Product_Image_14,
            original_price: 750000,
            discounted_price: 375000,
            discount_percent: 50,
            quantity_left: 3,
            quantity_total: 20,
        },
        {
            id: 15,
            name: "Sạc 2 Cổng AVA+ TCED2",
            image: Product_Image_15,
            original_price: 220000,
            discounted_price: 110000,
            discount_percent: 50,
            quantity_left: 17,
            quantity_total: 20,
        },
        {
            id: 16,
            name: "Tai nghe Có Dây Mozard DS510-WB",
            image: Product_Image_16,
            discounted_price: 75000,
            original_price: 150000,
            discount_percent: 50,
            quantity_left: 1,
            quantity_total: 20,
        },
        {
            id: 17,
            name: "Tai nghe Bluetooth 1 Bên Roman Q5C",
            image: Product_Image_17,
            original_price: 300000,
            discounted_price: 120000,
            discount_percent: 60,
            quantity_left: 18,
            quantity_total: 20,
        },
        {
            id: 18,
            name: "Tai nghe Bluetooth True Wireless Mozard Air 3",
            image: Product_Image_18,
            discounted_price: 355000,
            original_price: 890000,
            discount_percent: 23,
            quantity_left: 0,
            quantity_total: 20,
        },
        {
            id: 19,
            name: "Xmobile P68D",
            image: Product_Image_19,
            original_price: 375000,
            discounted_price: 375000,
            discount_percent: 50,
            quantity_left: 6,
            quantity_total: 20,
        },
        {
            id: 20,
            name: "Energizer Báo Xám QE10000GY",
            image: Product_Image_20,
            original_price: 900000,
            discounted_price: 630000,
            discount_percent: 30,
            quantity_left: 20,
            quantity_total: 20,
        },
        {
            id: 21,
            name: "Sạc Xmobile TC20P",
            image: Product_Image_21,
            original_price: 300000,
            discounted_price: 150000,
            discount_percent: 50,
            quantity_left: 5,
            quantity_total: 20,
        },
        {
            id: 22,
            name: "Tai nghe Có Dây Kanen S40",
            image: Product_Image_22,
            original_price: 75000,
            discounted_price: 35000,
            discount_percent: 50,
            quantity_left: 12,
            quantity_total: 20,
        },
        {
            id: 23,
            name: "Tai nghe Chụp Tai Mozard IP-840",
            image: Product_Image_23,
            original_price: 350000,
            discounted_price: 150000,
            discount_percent: 57,
            quantity_left: 12,
            quantity_total: 20,
        },
    ],
}

export default ProductCategory;