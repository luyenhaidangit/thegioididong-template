const HeaderMain_LogoDienThoai = require("../assets/Images/HeaderMain/icon-dien-thoai.png")
const HeaderMain_LogoLaptop = require("../assets/Images/HeaderMain/icon-laptop.png")
const HeaderMain_LogoTablet = require("../assets/Images/HeaderMain/icon-tablet.png")
const HeaderMain_LogoPhuKien = require("../assets/Images/HeaderMain/icon-phu-kien.png")
const HeaderMain_LogoSmartWatch = require("../assets/Images/HeaderMain/icon-smartwatch.png")
const HeaderMain_LogoWatch = require("../assets/Images/HeaderMain/icon-watch.png")
const HeaderMain_LogoPhone = require("../assets/Images/HeaderMain/icon-phone.png")
const HeaderMain_LogoPC = require("../assets/Images/HeaderMain/icon-pc.png")

const HeaderMain = [
    {
        id: 1,
        name: "Điện thoại",
        icon: HeaderMain_LogoDienThoai,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idProductCategoryGroup: null,
        listProductCategoryGroup: null,
    },
    {
        id: 2,
        name: "Laptop",
        description: null,
        icon: HeaderMain_LogoLaptop,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idProductCategoryGroup: null,
        listProductCategoryGroup: null,
    },
    {
        id: 3,
        name: "Tablet",
        description: null,
        icon: HeaderMain_LogoTablet,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idProductCategoryGroup: null,
        listProductCategoryGroup: null,
    },
    {
        id: 4,
        name: "Phụ kiện",
        description: null,
        logo: HeaderMain_LogoPhuKien,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idProductCategoryGroup: null,
        listProductCategoryGroup: [
            {
                id: 1,
                name: "Phụ kiện di động",
                listCategory: [
                    {
                        id: 11,
                        name: "Sạc dự phòng",
                    },
                    {
                        id: 12,
                        name: "Sạc, cáp",
                    },
                    {
                        id: 13,
                        name: "Ốp lưng điện thoại",
                    },
                    {
                        id: 14,
                        name: "Ốp lưng máy tín bảng",
                    },
                    {
                        id: 15,
                        name: "Miến dán màn hình",
                    },
                    {
                        id: 16,
                        name: "Gậy chụp ảnh, Gimbal",
                    },
                    {
                        id: 17,
                        name: "Giá đỡ điện thoại",
                    },
                    {
                        id: 18,
                        name: "Đế, móc điện thoại",
                    },
                    {
                        id: 19,
                        name: "Túi chống nước",
                    },
                    {
                        id: 20,
                        name: "Túi đựng AirPods",
                    },
                    {
                        id: 21,
                        name: "AirTag, Vỏ bảo vệ AirTag",
                    },
                    {
                        id: 22,
                        name: "Phụ kiện Tablet",
                    },
                    {
                        id: 22,
                        name: "Sạc dự phòng",
                    },
                ]
            },
            {
                id: 2,
                name: "Phụ kiện laptop",
                listCategory: [
                    {
                        id: 23,
                        name: "Sạc dự phòng",
                    },
                    {
                        id: 24,
                        name: "Thiết bị mạng",
                    },
                    {
                        id: 25,
                        name: "Balo, túi chống sốc",
                    },
                    {
                        id: 26,
                        name: "Giá đỡ laptop",
                    },
                    {
                        id: 27,
                        name: "Phần mềm",
                    },
                ]
            },
            {
                id: 3,
                name: "Thiết bị âm thanh",
                listCategory: [
                    {
                        id: 28,
                        name: "Tai nghe",
                    },
                    {
                        id: 29,
                        name: "Loa",
                    },
                    {
                        id: 30,
                        name: "Micro thu âm điện thoại",
                    },
                    {
                        id: 31,
                        name: "Micro",
                    },
                ]
            },
            {
                id: 4,
                name: "Thiết bị nhà thông minh",
                listCategory: [
                    {
                        id: 32,
                        name: "Khóa điện tử",
                    },
                    {
                        id: 33,
                        name: "Camera, webcam",
                    },
                    {
                        id: 34,
                        name: "Máy chiếu",
                    },
                    {
                        id: 35,
                        name: "TV Box",
                    },
                    {
                        id: 36,
                        name: "Ổ cắm, bóng đèn thông minh",
                    },
                ]
            },
            {
                id: 5,
                name: "Thiết bị lưu trữ",
                listCategory: [
                    {
                        id: 37,
                        name: "Ô cứng di động",
                    },
                    {
                        id: 38,
                        name: "Thẻ nhớ",
                    },
                    {
                        id: 39,
                        name: "USB",
                    },
                ]
            },
            {
                id: 6,
                name: "Thương hiệu hàng đầu",
                listCategory: [
                    {
                        id: 37,
                        name: "Apple",
                    },
                    {
                        id: 38,
                        name: "Samsung",
                    },
                    {
                        id: 39,
                        name: "Sony",
                    },
                    {
                        id: 40,
                        name: "JBL",
                    },
                    {
                        id: 41,
                        name: "Anker",
                    },
                ]
            },
            {
                id: 7,
                name: "Phụ kiện khác",
                listCategory: [
                    {
                        id: 42,
                        name: "Phụ kiện ô tô",
                    },
                    {
                        id: 43,
                        name: "Máy tính cầm tay",
                    },
                    {
                        id: 44,
                        name: "Quạt mini",
                    },
                    {
                        id: 45,
                        name: "Pin tiểu",
                    },
                ]
            },
        ],
    },
    {
        id: 5,
        name: "SmartWatch",
        description: null,
        logo: HeaderMain_LogoSmartWatch,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idCategoryGroup: null,
        listCategoryGroup: null,
    },
    {
        id: 6,
        name: "Đồng hồ",
        description: null,
        logo: HeaderMain_LogoWatch,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idCategoryGroup: null,
        listCategoryGroup: null,
    },
    {
        id: 7,
        name: "Máy cũ giá rẻ",
        description: null,
        logo: HeaderMain_LogoPhone,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idCategoryGroup: null,
        listCategoryGroup: null,
    },
    {
        id: 8,
        name: "PC, máy in",
        description: null,
        logo: HeaderMain_LogoPC,
        idParentProductCategory: null,
        listProductCategoryChild: [
            {
                id: 46,
                name: "Máy in",
            },
            {
                id: 47,
                name: "Mực in",
            },
            {
                id: 48,
                name: "Màn hình máy tính",
            },
            {
                id: 49,
                name: "Màn tính để bàn",
            },
        ],
        idCategoryGroup: null,
        listCategoryGroup: null,
    },
    {
        id: 9,
        name: "Sim, thẻ cào",
        description: null,
        logo: null,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idCategoryGroup: null,
        listCategoryGroup: null,
    },
    {
        id: 10,
        name: "Dịch vụ tiện ích",
        description: null,
        logo: null,
        idParentProductCategory: null,
        listProductCategoryChild: null,
        idCategoryGroup: null,
        listProductCategoryGroup: [
            {
                id: 8,
                name: "Thanh toán hóa đơn",
                listCategory: [
                    {
                        id: 50,
                        name: "Đóng tiền trả góp",
                    },
                    {
                        id: 51,
                        name: "Đóng tiền điện",
                    },
                    {
                        id: 52,
                        name: "Đóng tiền nước",
                    },
                    {
                        id: 53,
                        name: "Đóng tiền NET FPT",
                    },
                    {
                        id: 54,
                        name: "Đóng tiền net, cáp VNPT",
                    },
                    {
                        id: 55,
                        name: "Mua gói truyền hình",
                    },
                    {
                        id: 56,
                        name: "Vé tàu, xe, máy bay",
                    },
                    {
                        id: 57,
                        name: "Viện phí ĐH Y Dược TPHCM",
                    },
                ]
            },
            {
                id: 9,
                name: "Tài chính bảo hiểm",
                listCategory: [
                    {
                        id: 58,
                        name: "Mua bảo hiểm xe máy, ô tô",
                    },
                    {
                        id: 59,
                        name: "Đóng tiền bảo hiểm",
                    },
                ]
            },
            {
                id: 10,
                name: "Tiện ích viễn thông",
                listCategory: [
                    {
                        id: 60,
                        name: "Lắp đặt Internet, truyền hình",
                    },
                    {
                        id: 61,
                        name: "Mua gói data 3G, 4G",
                    },
                    {
                        id: 62,
                        name: "Nạp tiền trả trước",
                    },
                    {
                        id: 63,
                        name: "Nạp tiền trả sau",
                    },
                    {
                        id: 64,
                        name: "Thẻ cào game",
                    },
                    {
                        id: 65,
                        name: "Thẻ cào điện thoại",
                    },
                ]
            },
        ],
    },
]

export default HeaderMain;