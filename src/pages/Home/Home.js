import React from 'react'
import BigBanner from './BigBanner'

const Home = () => {
    return (
        <body>
            <BigBanner />
            <div className='main-content container'>
                <div className='big-campaign'>big-campaign</div>
                <div className='option-promo'>option-promo</div>
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
        </body>
    )
}

export default Home