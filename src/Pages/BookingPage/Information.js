/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleBookingAction,
  handleDeleteSeatAction,
} from "../../Redux/action/movieAction";
import "../BookingPage/Information.css";

class Information extends Component {
  renderInfo = () => {
    return this.props.seatSelected.map((item) => {
      return (
        <tr key={item.soGhe}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleDeleteSeat(item.soGhe);
              }}
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
      <div className="text-center">
        <h4 className="text-2xl uppercase mb-3">Danh sách ghế bạn chọn</h4>
        <table className="informationTable w-100 text-black" border="1">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.renderInfo()}</tbody>
        </table>
        <div className="total d-flex justify-content-between mt-3">
          <span>Tổng tiền: </span>
          <span>{this.handleTotal()} VNĐ</span>
        </div>
        <button
          className="totalBtn mt-4"
          onClick={() => {
            this.props.handleBooking();
          }}
        >
          Đặt vé
        </button>
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
