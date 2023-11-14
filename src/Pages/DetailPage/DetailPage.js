import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { movieServ } from '../../Service/movieService';
import moment from 'moment/moment';
import { Progress, Rate } from 'antd';
import ShowTime from './ShowTime';



export default function DetailPage() {
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
      let fetchDetail = async () => {
        try {
          let result = await movieServ.getDetailMovie(id);
          setMovie(result.data);
        } catch (error) {}
      };
      fetchDetail();
    }, []);
  
    return (
      <div
        style={{
          backgroundImage: `url(${movie.hinh_anh})`,
          backgroundSize: "100%",
          minHeight: "100vh",
          backgroundPosition: "center",
        }}
      >
        <div className='custom'
        >
          <div className="grid grid-cols-12 ">
            <div className="col-span-5 col-start-3">
              <div className="grid grid-cols-3">
                <img
                  className="col-span-1 "
                  src={movie.hinh_anh}
                  style={{ width: "100%", height: 300 }}
                  alt="anh phim"
                />
                <div className="col-span-2 ml-5 " style={{ marginTop: "25%" }}>
                  <p className="text-2xl">
                    Ngày chiếu: {moment(movie.ngay_khoi_chieu).format("DD.MM.YYYY")}
                  </p>
                  <p className="text-4xl text ">{movie.ten_phim}</p>
                  <p>{movie.mo_ta?.substring(0, 100)} ...</p>
                </div>
              </div>
            </div>
  
            <div className="col-span-4 ml-5">
              <p className="text-4xl ">Đánh giá phim</p>
              <Progress percent={movie.danh_gia * 10} />
              <h1
                style={{ marginLeft: "5%" }}
                className="text-yellow-500 text-2xl"
              >
                <Rate
                  allowHalf
                  value={movie.danh_gia / 2}
                  style={{ color: "yellow", fontSize: 30 }}
                />
              </h1>
              <br />
              <br />
  
              <a
                href="#DatVe"
                className="rounded px-5 py-2 bg-red-600 text-white font-medium "
              >
                Mua vé
              </a>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5">
            <ShowTime  />
          </div>
        </div>
      </div>
    );
}
