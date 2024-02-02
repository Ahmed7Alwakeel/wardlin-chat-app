import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { bannerData } from "@/utils/FixedData";
const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [prevSlide, setPrevSlide] = useState(-1)
    const [firstLoad, setFirstLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => { setFirstLoad(false) }, 4000)
    }, [])

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setActiveSlide(activeSlide + 1)
            setPrevSlide(prevSlide > activeSlide ? 0 : prevSlide + 1)
            if (activeSlide === 2) {
                setActiveSlide(0)
                setPrevSlide(activeSlide)
            }

        }, 4000)
        return () => clearTimeout(timeOut)
    }, [activeSlide, prevSlide])

    return (
        <div className="banner-swiper">
            {
                bannerData?.images.map((img, index) => (
                    <div className={`
                    ${activeSlide === index ? "active" : ""} 
                    ${prevSlide === index ? "prev" : ""}
                     banner-img`} key={index}>
                        <Image
                            fill
                            src={img}
                            alt="img"
                        />
                    </div>
                ))
            }
            <div className="swiper-pagination-bullets">
                {
                    bannerData?.images.map((img, index) => (
                        <div className={`
                    ${activeSlide === index ? "active" : ""} 
                    swiper-pagination-bullet`}
                            key={index}>
                            <div className={`
                            ${firstLoad && 'firstLoad'}
                            `}></div>
                        </div>
                    ))
                }
            </div>
            <div className="banner-data">
                <h1>{bannerData?.header}</h1>
                <p>{bannerData?.description}</p>
                <Link className="link" passHref href={"/chatroom"}>{bannerData?.buttonText}
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                    </svg>
                </Link>
            </div>
            <div className="overlay"></div>
            <div className="scroll-down">
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </div>
        </div>
    );
}

export default Banner;