import React, {useState} from 'react';
import "./GalleryStyles.css"
import { FaRegWindowClose } from "react-icons/fa"

import Img1 from "../assets/imgs/1.jpeg";
import Img2 from "../assets/imgs/2.jpg";
import Img3 from "../assets/imgs/3.jpg";
import Img4 from "../assets/imgs/4.jpeg";
import Img5 from "../assets/imgs/5.jpg";
import Img6 from "../assets/imgs/6.jpg";
import Img7 from "../assets/imgs/7.jpeg";
import Img8 from "../assets/imgs/8.jpg";
import Img9 from "../assets/imgs/9.jpg";
import Img10 from "../assets/imgs/10.jpg";
import Img11 from "../assets/imgs/11.jpeg";

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        }
    ]

    const [model, setModel]= useState(false);
    const [tempimgSrc, setTempImgSrc]= useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true)
    }

    return (
        <>
        <div className={model? 'model open': 'model'}>
            <img src={tempimgSrc}/>
            <FaRegWindowClose onClick={()=> setModel(false)}/>
        </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}

            </div>
        </>
    )
}
export default Gallery