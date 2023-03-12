// Libraries
import React, { useEffect, useState } from 'react'

// Style
import "../../../assets/Styles/Components/Home/BannerTopzone.css"

// Data
import BannerTopzoneApi from '../../../data/BannerTopzone'

const BannerTopzone = () => {
    // Hook
    const [dataBannerTopzone, setDataBannerTopzone] = useState({});

    useEffect(() => {
        fetchDataBannerTopzone();
    }, []);

    const fetchDataBannerTopzone = async () => {
        let res = await BannerTopzoneApi;
        setDataBannerTopzone(res);
    }

    return (
        <>
            {
                dataBannerTopzone &&
                <div className='banner-topzone'>
                    <div className='container cursor-pointer'>
                        {
                            dataBannerTopzone &&
                            <img className='banner-topzone__img img-fluid w-100 overflow-hidden' src={dataBannerTopzone.image} alt="Banner Topzone" />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default BannerTopzone