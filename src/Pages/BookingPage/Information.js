/** @format */

import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  handleBookingAction,
  handleDeleteSeatAction,
} from "../../Redux/action/movieAction";
import "../BookingPage/Information.css";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";

class Information extends Component {
  renderInfo = () => {
    return this.props.seatSelected.map((item) => {
      return (
        <tr key={item.soGhe}>
          <td>{item.soGhe}</td>
          <td>
            {item.gia.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleDeleteSeat(item.soGhe);
              }}
              className="text-lg w-14"
            >
              Hủy
            </button>
          </td>
        </tr>
      );
    });
  };

  handleTotal = () => {
    let total = 0;

    for (let i = 0; i < this.props.seatSelected.length; i++) {
      total += this.props.seatSelected[i].gia;
    }
    return total;
  };

  render() {
    return (
      <div className="grid grid-rows-2 space-y-2 justify-center">
        <div className="inforMovie w-96 h-32">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {this.props.data.ten_phim}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {this.props.data.mo_ta}
            </p>
          </a>
        </div>

        <div className="detailMovie">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tổng đơn hàng:
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {this.handleTotal().toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </p>
          </a>
        </div>
        {/* <div className="grid grid-cols-2">
          <button
            className="totalBtn mt-4 "
            onClick={() => {
              this.props.handleBooking();
            }}
          >
            Đặt vé
          </button>
          <NavLink to={"/login"}>
            <button className="btnPay">Thanh toán</button>
          </NavLink>
        </div> */}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    seatSelected: state.seatReducer.seatSelected,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteSeat: (id) => {
      dispatch(handleDeleteSeatAction(id));
    },

    handleBooking: () => {
      dispatch(handleBookingAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);
