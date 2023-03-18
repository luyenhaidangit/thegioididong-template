// Libraries
import React, { useEffect, useState } from 'react'

// Styles
import "../../../assets/Styles/Components/Home/BigBanner.css"

// Data
import BigBannerApi from '../../../data/BigBanner';

const BigBanner = (props) => {
    const { banner } = props;
    // Hook
    const [dataBigBanner, setDataBigBanner] = useState([]);

    useEffect(() => {
        fetchItemBigBanner();
    }, []);

    const fetchItemBigBanner = async () => {
        let res = await BigBannerApi;
        setDataBigBanner(res);
    }

    console.log(banner)

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