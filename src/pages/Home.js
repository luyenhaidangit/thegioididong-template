// React
import React, { useEffect, useState } from 'react'

// Components
import BannerTopzone from '../components/Pages/Home/BannerTopzone'
import BigBanner from '../components/Pages/Home/BigBanner'
import BigCampaign from '../components/Pages/Home/BigCampaign'
import CategoryFeature from '../components/Pages/Home/CategoryFeature'
import DailySuggest from '../components/Pages/Home/DailySuggest'
import DiscountPayOnline from '../components/Pages/Home/DiscountPayOnline'
import HotDeal from '../components/Pages/Home/HotDeal'
import NewChain from '../components/Pages/Home/NewChain'
import OptionPromo from '../components/Pages/Home/OptionPromo'
import PromoAnother from '../components/Pages/Home/PromoAnother'
import ServiceConversation from '../components/Pages/Home/ServiceConversation'
import ShoppingTrend from '../components/Pages/Home/ShoppingTrend'
import TechNew from '../components/Pages/Home/TechNew'
import TradeMark from '../components/Pages/Home/TradeMark'

// Data
import { GetSlideBigCampaign, GetSlideOptionPromo } from "../apis/slideApiService";
import { GetBannerMain, GetBannerTopzone } from '../apis/bannerApiService';
import { GetProductsHotDeal, GetProductDailySuggest } from '../apis/productApiService'
import { GetProductFeaturesHome } from '../apis/productApiService'
import { GetProductCategoriesFeaturesHome } from '../apis/productCategoryApiService'

const Home = () => {
    const [dataSlideBigCampaign, setDataSlideBigCampaign] = useState({});
    const [dataSlideOptionPromo, setDataSlideOptionPromo] = useState({});
    const [dataBannerTopzone, setDataBannerTopzone] = useState({});
    const [dataBannerMain, setDataBannerMain] = useState({});
    const [dataProductsHotDeal, setDataProductsHotDeal] = useState([]);
    const [dataProductFeaturesHome, setDataProductFeaturesHome] = useState([]);
    const [dataProductCategoryFeatureHome, setDataProductCategoryFeature] = useState([]);
    const [dataProductDailySuggest, setDataProductDailySuggest] = useState([]);

    useEffect(() => {
        fetchSlidesBigCampaign();
        fetchSlideOptionPromo();
        fetchBannerMain();
        fetchDataProductsHotDeal();
        fetchDataBannerTopzone();
        fetchDataProductFeaturesHome();
        fetchDataProductCategoriesFeature();
        fetchDataProductDailySuggest();
    }, []);

    // Func
    const fetchSlidesBigCampaign = async () => {
        let res = await GetSlideBigCampaign();
        setDataSlideBigCampaign(res);
    }

    const fetchSlideOptionPromo = async () => {
        let res = await GetSlideOptionPromo();
        setDataSlideOptionPromo(res);
    }

    const fetchBannerMain = async () => {
        let res = await GetBannerMain();
        setDataBannerMain(res);
    }

    const fetchDataProductsHotDeal = async () => {
        let res = await GetProductsHotDeal();
        setDataProductsHotDeal(res);
    }

    const fetchDataBannerTopzone = async () => {
        let res = await GetBannerTopzone();
        setDataBannerTopzone(res);
    }

    const fetchDataProductFeaturesHome = async () => {
        let res = await GetProductFeaturesHome();
        setDataProductFeaturesHome(res);
    }

    const fetchDataProductDailySuggest = async () => {
        let res = await GetProductDailySuggest();
        setDataProductDailySuggest(res);
    }

    const fetchDataProductCategoriesFeature = async () => {
        let res = await GetProductCategoriesFeaturesHome();
        setDataProductCategoryFeature(res);
    }

    return (
        <div className='content bg-gray'>
            <BigBanner banner={dataBannerMain} />
            <div className='main-content position-relative'>
                <BigCampaign slide={dataSlideBigCampaign} />
                <OptionPromo slide={dataSlideOptionPromo} />
                <BannerTopzone banner={dataBannerTopzone} />
                <HotDeal products={dataProductsHotDeal} />
                <PromoAnother productFeatures={dataProductFeaturesHome} />
                <ShoppingTrend />
                <CategoryFeature productCategories={dataProductCategoryFeatureHome} />
                <DiscountPayOnline />
                <ServiceConversation />
                <DailySuggest
                    latestProducts={dataProductDailySuggest?.latestProducts}
                    popularProducts={dataProductDailySuggest?.popularProducts}
                    sellingProducts={dataProductDailySuggest?.sellingProducts}
                    topRatedProducts={dataProductDailySuggest?.topRatedProducts}
                />
                <TechNew />
                <TradeMark />
                <NewChain />
            </div>
        </div>
    )
}

export default Home