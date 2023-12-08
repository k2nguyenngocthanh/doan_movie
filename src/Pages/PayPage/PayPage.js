/** @format */
import React, { useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import momo from "../../img/MoMo.png";
import vnpay from "../../img/qr.jpg";
import { useState } from "react";

function PayPage() {
  let itemData = useSelector((state) => state.seatReducer.seatSelected);
  let [checked, setChecked] = useState(null);
  const [totalSeconds, setTotalSeconds] = useState(120);
  const [minutes, setMinutes] = useState(Math.floor(totalSeconds / 60));
  const [seconds, setSeconds] = useState(totalSeconds % 60);
  const [message, setMessage] = useState("");

  let renderInfo = () => {
    return itemData.map((item) => {
      return (
        <tr key={item.soGhe} border="1">
          <td>{item.soGhe}</td>
          <td>
            {item.gia.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </td>
        </tr>
      );
    });
  };

  let handleTotal = () => {
    let total = 0;
    for (let i = 0; i < itemData.length; i++) {
      total += itemData[i].gia;
    }
    return total;
  };

  const handleCheckboxChange = (value) => {
    setChecked(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds === 0) {
          clearInterval(interval);
          setMessage("Time is up!");
          return 0;
        } else {
          const newMinutes = Math.floor(prevTotalSeconds / 60);
          const newSeconds = prevTotalSeconds % 60;
          setMinutes(newMinutes);
          setSeconds(newSeconds);
          return prevTotalSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-3">
          <div className="infoTicket">
            <div className="card-header-title text-muted bg-slate-300 rounded-t-lg pl-2 text-lg text-slate-400">
              Tóm tắt đơn hàng
            </div>
            <div className="card">
              <div className="card-header">
                <table className="w-full text-center" border="1">
                  <thead>
                    <tr className="uppercase bg-slate-200 text-gray-500">
                      <th>Số ghế</th>
                      <th>Giá</th>
                    </tr>
                  </thead>
                  <tbody>{renderInfo()}</tbody>
                  <tbody className="text-lg">
                    <th>Tổng</th>
                    <th>
                      {handleTotal().toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </th>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="infoPayment">
            <div className="card-header-title text-muted bg-slate-300 rounded-t-lg pl-2 text-lg text-slate-400">
              Hình thức thanh toán
            </div>
            <div className="card">
              <div className="card-header">
                <div>
                  <div className="flex items-center mb-4">
                    <input
                      id="checkbox"
                      type="checkbox"
                      value="MoMo"
                      checked={checked === "MoMo"}
                      className="radioCheck w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => handleCheckboxChange("MoMo")}
                    />
                    <img
                      src={momo}
                      className="w-10 mt-4 mr-2 ml-4 flex justify-center"
                    />
                    <label
                      htmlFor="checkbox"
                      className="ms-2 text-lg font-medium text-gray-400 dark:text-gray-500"
                    >
                      Momo
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value="VNPay"
                      checked={checked === "VNPay"}
                      className="radioCheck w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={() => handleCheckboxChange("VNPay")}
                    />
                    <img src={vnpay} className="w-10 mt-4 mr-2 ml-4" />
                    <label
                      htmlFor="checked-checkbox"
                      className="ms-2 text-lg font-medium text-gray-400 dark:text-gray-500"
                    >
                      VNPay
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="infoUser mt-10">
            <div className="card-header-title text-muted bg-slate-300 rounded-t-lg pl-2 text-lg text-slate-400">
              Thông tin cá nhân
            </div>
            <div className="card">
              <div className="card-header">
                <div>
                  <div className="mb-6">
                    <label
                      htmlFor="name-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name-input"
                      required
                      placeholder="Họ và tên"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    placeholder="Email"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    id="phone-input"
                    required
                    placeholder="Số điện thoại"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightInfo ml-8">
          <div>
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="grid grid-cols-2">
                <div className="sumOrder">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tổng đơn hàng
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {handleTotal().toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
                <div className="timerOrder">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Thời gian giữ ghế
                  </h5>
                  <div className="text-red-500">
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p className="text-white mb-2">
                Vé đã mua không thể đổi hoặc hoàn tiền.
              </p>
              <p className="text-white">
                Mã vé sẽ được gửi 01 lần qua số điện thoại và email đã nhập. Vui
                lòng kiểm tra lại thông tin trước khi tiếp tục.
              </p>
            </a>
          </div>
          <div className="paymentInfo">
            <button className="bg-blue-500 text-2xl w-52 rounded-2xl uppercase mt-4 text-center h-10">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    seatSelected: state.seatReducer.seatSelected,
  };
};

export default connect(mapStateToProps)(PayPage);
