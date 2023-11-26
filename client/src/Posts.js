import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../src/Pages/Post.css";
const Posts = ()=>{

    const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (imageId) => {
    setHoveredImage(imageId);
  };
    const navigate = useNavigate();
    
    return(
        <div id="page3" className="col-1">
            
            <div className="child" id="child1" onMouseEnter={() => handleImageHover(1)} onMouseLeave={() => handleImageHover(null)}>
            <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699162619/WhatsApp_Image_2023-11-05_at_11.06.06_AM_prdly3.jpg"
                    alt="" onClick={()=>navigate('/popup')} />
                    {hoveredImage === 1 && <div className="hover-text">MENS</div>}
                   
            </div>
            <div className="child" id="child1" onMouseEnter={() => handleImageHover(1)} onMouseLeave={() => handleImageHover(null)}>
            <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1700977041/scout/244188868_570354887420649_1669272980551569962_n_vcj6ik.jpg"
                    alt="" onClick={()=>navigate('/popup')} />
                    {hoveredImage === 1 && <div className="hover-text">WOMENS</div>}
                <div   >
            
          </div>
            </div>
            <div className="child" id="child1" onMouseEnter={() => handleImageHover(1)} onMouseLeave={() => handleImageHover(null)}>
            <img src="https://assets.ajio.com/medias/sys_master/root/20220419/6qen/625ee6e3aeb26921af2b5980/-473Wx593H-464198883-gold-MODEL.jpg"
                    alt="" onClick={()=>navigate('/popup')} />
                    {hoveredImage === 1 && <div className="hover-text">JEWELLERY</div>}

            </div>
            <div className="child" id="child1" onMouseEnter={() => handleImageHover(1)} onMouseLeave={() => handleImageHover(null)}>
            <img src="https://www.tresmode.com/cdn/shop/products/The-Montgomery-Blue.jpg?v=1666340308"
                   alt="" onClick={()=>navigate('/popup')} />
                   {hoveredImage === 1 && <div className="hover-text">SHOES</div>}

            </div>

            {/* <div class="column">
  <div>
    <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
    <span>Hover</span>
  </div>
  <div>
    <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
    <span>Hover</span>
  </div>
  <div>
    <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
    <span>Hover</span>
  </div>
</div> */}
            
        </div>
    )
}
export default Posts;