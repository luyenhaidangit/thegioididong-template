// React
import React from 'react'
import BannerTopzone from './BannerTopzone'

// Components
import BigBanner from './BigBanner'
import BigCampaign from './BigCampaign'
import CategoryFeature from './CategoryFeature'
import DiscountPayOnline from './DiscountPayOnline'
import HotDeal from './HotDeal'
import OptionPromo from './OptionPromo'
import PromoAnother from './PromoAnother'
import ServiceConversation from './ServiceConversation'
import ShoppingTrend from './ShoppingTrend'

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
                <div className='category-feature'>category-feature</div>
                <div className='daily-suggestion'>daily-suggest</div>
                <div className='trademark '>trademark </div>
                <div className='technology-box'>technology-box</div>
                <div className='newchain'>newchain</div>
                <div className='promo-bhx'>promo-bhx</div>
            </div>
        </div>
    )
}

export default Home