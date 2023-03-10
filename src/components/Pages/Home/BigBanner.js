// Libraries
import React, { useEffect, useState } from 'react'

// Styles
import "../../../assets/Styles/Components/Home/BigBanner.css"

// Data
import BigBannerApi from '../../../data/BigBanner';

const BigBanner = () => {
    // Hook
    const [dataBigBanner, setDataBigBanner] = useState([]);

    useEffect(() => {
        fetchItemBigBanner();
    }, []);

    const fetchItemBigBanner = async () => {
        let res = await BigBannerApi;
        setDataBigBanner(res);
    }

    return (
        <>
            {
                dataBigBanner && dataBigBanner.length > 0 &&
                <div className='big-banner'>
                    {
                        dataBigBanner && dataBigBanner.length > 0 &&
                        dataBigBanner.map((item, index) => {
                            return (
                                <img key={`"big-banner__img-${index}`} className={"big-banner__img big-banner__img-size-" + item.size} src={item.image} alt="BigBanner" />
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default BigBanner