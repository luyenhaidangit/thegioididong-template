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
    listProduct: [
        {
            id: 1,
            isInterest: true,
            name: "iPhone 12 256GB",
            image: Product_Image_01,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '8GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 23990000,
            discountedPrice: 18090000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 2,
            isInterest: true,
            name: "Tai nghe Bluetooth True Wireless Mozard TS11 mini",
            image: Product_Image_02,
            badgeProduct: {
                name: 'Giảm thêm 1 triệu',
                image: BadgeImage2,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '8GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 790000,
            discountedPrice: 315000,
            discountPercent: 60,
            quantityPeft: 13,
            quantityTotal: 20,
            starRating: 5,
            reviewCount: 2,
        },
        {
            id: 3,
            isInterest: true,
            name: "BeU Active 1 45mm dây silicone",
            image: Product_Image_03,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 23990000,
            discountedPrice: 18090000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 4,
            isInterest: true,
            name: "Surface Laptop Go i5 1035G1",
            image: Product_Image_04,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 17490000,
            discountedPrice: 13990000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 5,
            isInterest: true,
            name: "MSI Modern 14 B11MOU i3 1115G4 (1027VN)",
            image: Product_Image_06,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage3,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 17490000,
            discountedPrice: 13990000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 6,
            isInterest: true,
            name: "BeU Active 1 45mm dây silicone",
            image: Product_Image_15,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 23990000,
            discountedPrice: 18090000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 4,
            isInterest: true,
            name: "Surface Laptop Go i5 1035G1",
            image: Product_Image_16,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 17490000,
            discountedPrice: 13990000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 5,
            isInterest: true,
            name: "MSI Modern 14 B11MOU i3 1115G4 (1027VN)",
            image: Product_Image_17,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage3,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 17490000,
            discountedPrice: 13990000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 5,
            isInterest: true,
            name: "MSI Modern 14 B11MOU i3 1115G4 (1027VN)",
            image: Product_Image_18,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage3,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 17490000,
            discountedPrice: 13990000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 6,
            isInterest: true,
            name: "BeU Active 1 45mm dây silicone",
            image: Product_Image_19,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 23990000,
            discountedPrice: 18090000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
        {
            id: 4,
            isInterest: true,
            name: "Surface Laptop Go i5 1035G1",
            image: Product_Image_20,
            badgeProduct: {
                name: 'Giảm 1TR SS Wallet',
                image: BadgeImage1,
            },
            attributeValueProminents: ['6,71"', 'HD+'],
            optionVariantAttribute: [
                {
                    id: 1,
                    name: '2GB - 128GB'
                },
                {
                    id: 2,
                    name: '8GB - 256GB'
                },
            ],
            originalPrice: 17490000,
            discountedPrice: 13990000,
            discountPercent: 24,
            starRating: 4.5,
            reviewCount: 100,
        },
    ],
}

export default ProductCategory;