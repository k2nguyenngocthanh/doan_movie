/** @format */

import React, { useEffect, useMemo, useState } from "react";
import Seats from "./Seats";
import Information from "./Information";
import { movieServ } from "../../Service/movieService";
import { Link, NavLink, Navigate, useParams } from "react-router-dom";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  handleBookingAction,
  handleDeleteSeatAction,
} from "../../Redux/action/movieAction";

export default function BookingPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  useEffect(() => {
    let fetchDetail = async () => {
      try {
        let result = await movieServ.getDetailMovie(id);
        setMovie(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  }, []);

  return (
    <div className="container">
      <div className="w-full px-24 mb-24">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <div className="absolute -bottom-[0.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
                to={`/login`}
              >
                Chọn ghế
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <div className="absolute -bottom-[0.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Thanh toán
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <div className="absolute -bottom-[0.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Thông tin vé
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>

      <div className="grid grid-cols-2 container">
        <div>
          <Seats />
        </div>
        <div>
          <Information data={movie} />
          <div className="mt-8 text-center">
            <NavLink to={`/detail/${movie.ma_phim}/booking/pay`}>
              <Button className="bg-slate-400 w-28 pt-2 pb-2">Tiếp tục</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
