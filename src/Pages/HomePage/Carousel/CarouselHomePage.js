import { Carousel, message } from "antd";
import { useEffect, useState } from "react";
import { movieServ } from "../../../Service/movieService";

const CarouselHomepage = () => {
    const [banner, setBanner] = useState([]);
  

  
    useEffect(() => {
      movieServ
        .getBannerMovie()
        .then((res) => {
   
          setBanner(res.data);
        })
        .catch((err) => {
    
          message.error("Can't download data!");
          console.log(err);
        });
    }, []);
  
    let renderBanner = () => {
      return banner.map((item, index) => {
        return (
        //   <NavLink to={`/detail/${item.maPhim}`} key={index}>
            <div key={index}>
              <img className="h-full w-full" src={item?.hinh_anh} />
            </div>
        //   </NavLink>
        );
      });
    };
  
    return (
      <div className="w-9/12">
        <Carousel autoplay>{renderBanner()}</Carousel>
      </div>
    );
  };
  
  export default CarouselHomepage;
  