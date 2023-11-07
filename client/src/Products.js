import React from "react";
const Products = ()=>{
    return(
        <div id="page2">
        <div id="elem1" className="elem">
            <img data-scroll data-scroll-speed="1"
                src="https://res.cloudinary.com/dpiatasuq/image/upload/v1692574055/p3_swtcll.png"
                alt=""/>
            <div data-scroll data-scroll-speed="-2" className="dets">
            <span>Mya khalifa</span>
            </div>

        </div>
        <div id="elem2" className="elem">
            <img data-scroll data-scroll-speed="0"
                src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699162619/WhatsApp_Image_2023-11-05_at_11.06.06_AM_prdly3.jpg"
                alt=""/>
            <div data-scroll data-scroll-speed="-2" className="dets"> <span>Pranshu Yadav</span></div>

        </div>
        <div id="elem3" className="elem">
            <img data-scroll data-scroll-speed="1"
                src="https://media.licdn.com/dms/image/D4D03AQFDzSKFX9IFjQ/profile-displayphoto-shrink_400_400/0/1683466820270?e=1704931200&v=beta&t=jo78QSClIBu1A0_kjuzhiUDcORF8a9B808KqtlfgCsY"
                alt=""/>
            <div data-scroll data-scroll-speed="-2" className="dets">
            <span>Akash Gupta</span>
            </div>
           
        </div>

    </div>
    )
}
export default Products