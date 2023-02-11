// React
import React from 'react'
import BannerTopzone from './BannerTopzone'

// Components
import BigBanner from './BigBanner'
import BigCampaign from './BigCampaign'
import OptionPromo from './OptionPromo'

const Home = () => {
    return (
        <div className='content'>
            <BigBanner />
            <div className='main-content position-relative'>
                <BigCampaign />
                <OptionPromo />
                <BannerTopzone />
                <div className='flashsale'>flashsale</div>
                <div className='hotdeal'>hotdeal</div>
                <div className='promo-another'>promo-another</div>
                <div className='shopping-trends'>shopping-trends</div>
                <div className='category-feature'>category-feature</div>
                <div className='service-conversation'>service-conversation</div>
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