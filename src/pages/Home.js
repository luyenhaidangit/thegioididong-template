// React
import React from 'react'

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

const Home = () => {
    return (
        <div className='content'>
            <BigBanner />
            <div className='main-content position-relative'>
                <BigCampaign />
                <OptionPromo />
                <BannerTopzone />
                <HotDeal />
                <PromoAnother />
                <ShoppingTrend />
                <CategoryFeature />
                <DiscountPayOnline />
                <ServiceConversation />
                <DailySuggest />
                <TechNew />
                <TradeMark />
                <NewChain />
            </div>
        </div>
    )
}

export default Home