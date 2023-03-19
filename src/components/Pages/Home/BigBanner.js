// Libraries
import React from 'react'

// Styles
import "../../../assets/Styles/Components/Home/BigBanner.css"

const BigBanner = (props) => {
    const { banner } = props;

    return (
        <>
            {
                banner &&
                <div className='big-banner'>
                    {
                        <img className={"big-banner__img big-banner__img-size-"} src={banner.image} alt="BigBanner" />
                    }
                </div>
            }
        </>
    )
}

export default BigBanner