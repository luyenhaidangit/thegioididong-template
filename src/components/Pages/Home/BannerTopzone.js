// Libraries
import React from 'react'

// Style
import "../../../assets/Styles/Components/Home/BannerTopzone.css"

const BannerTopzone = (props) => {
    const { banner } = props;

    return (
        <>
            {
                banner &&
                <div className='banner-topzone'>
                    <div className='container cursor-pointer'>
                        {
                            banner &&
                            <img className='banner-topzone__img img-fluid w-100 overflow-hidden' src={banner.image} alt="Banner Topzone" />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default BannerTopzone