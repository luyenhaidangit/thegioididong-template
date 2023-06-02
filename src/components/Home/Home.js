// React
import React, { useEffect, useState } from 'react'

// Components
import BannerTopzone from './BannerTopzone';
import BigBanner from './BigBanner'
import BigCampaign from './BigCampaign'
import CategoryFeature from './CategoryFeature'
import DailySuggest from './DailySuggest'
import DiscountPayOnline from './DiscountPayOnline'
import HotDeal from './HotDeal'
import NewChain from './NewChain'
import OptionPromo from './OptionPromo'
import PromoAnother from './PromoAnother'
import ServiceConversation from './ServiceConversation'
import ShoppingTrend from './ShoppingTrend'
import TechNew from './TechNew'
import TradeMark from './TradeMark'

// Data
import { GetSlideBigCampaign, GetSlideOptionPromo, GetSlideShoppingTrends } from "../../apis/slideApiService";
import { GetBannerMain, GetBannerTopzone } from '../../apis/bannerApiService';
import { GetProductsHotDeal, GetProductDailySuggest } from '../../apis/productApiService'
import { GetProductFeaturesHome } from '../../apis/productApiService'
import { GetProductCategoriesFeaturesHome } from '../../apis/productCategoryApiService'



const Home = () => {
    // Data
    const [data, setData] = useState({
        dataSlideBigCampaign: {},
        dataSlideOptionPromo: {},
        dataBannerTopzone: {},
        dataBannerMain: {},
        dataProductsHotDeal: [],
        dataProductFeaturesHome: [],
        dataProductCategoryFeatureHome: [],
        dataProductDailySuggest: [],
        dataSlideShoppingTrends: {}, 
    }); 

    const { dataSlideBigCampaign,dataSlideOptionPromo,dataBannerTopzone,dataBannerMain,dataProductsHotDeal,dataProductFeaturesHome,dataProductCategoryFeatureHome,dataProductDailySuggest,dataSlideShoppingTrends } = data;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [
                dataSlideBigCampaign, 
                dataSlideOptionPromo,
                dataBannerTopzone,
                dataBannerMain,
                dataProductsHotDeal,
                dataProductFeaturesHome,
                dataProductCategoryFeatureHome,
                dataProductDailySuggest,
                dataSlideShoppingTrends
            ] = await Promise.all(
            [
                GetSlideBigCampaign(),
                GetSlideOptionPromo(),
                GetBannerTopzone(),
                GetBannerMain(),
                GetProductsHotDeal(),
                GetProductFeaturesHome(),
                GetProductCategoriesFeaturesHome(),
                GetProductDailySuggest(),
                GetSlideShoppingTrends(),
            ]);
    
            setData({
                dataSlideBigCampaign: dataSlideBigCampaign,
                dataSlideOptionPromo: dataSlideOptionPromo,
                dataBannerTopzone: dataBannerTopzone,
                dataBannerMain: dataBannerMain,
                dataProductsHotDeal: dataProductsHotDeal,
                dataProductFeaturesHome: dataProductFeaturesHome,
                dataProductCategoryFeatureHome: dataProductCategoryFeatureHome,
                dataProductDailySuggest: dataProductDailySuggest,
                dataSlideShoppingTrends: dataSlideShoppingTrends
            });
        } catch (error) {
            setData({
                dataSlideBigCampaign: {},
                dataSlideOptionPromo: {},
                dataBannerTopzone: {},
                dataBannerMain: {},
                dataProductsHotDeal: [],
                dataProductFeaturesHome: [],
                dataProductCategoryFeatureHome: [],
                dataProductDailySuggest: [],
                dataSlideShoppingTrends: {}, 
            });
        }
    };

    return (
        <div className='content bg-gray'>
            <BigBanner banner={dataBannerMain} />
            <div className='main-content position-relative'>
                <BigCampaign slide={dataSlideBigCampaign} />
                <OptionPromo slide={dataSlideOptionPromo} />
                <BannerTopzone banner={dataBannerTopzone} />
                <HotDeal products={dataProductsHotDeal} />
                <PromoAnother productFeatures={dataProductFeaturesHome} />
                <ShoppingTrend slide={dataSlideShoppingTrends} />
                <CategoryFeature productCategories={dataProductCategoryFeatureHome} />
                <DiscountPayOnline />
                <ServiceConversation slide={dataSlideShoppingTrends} />
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