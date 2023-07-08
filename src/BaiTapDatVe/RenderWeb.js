import React, { Component } from "react";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGhe from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class RenderWeb extends Component {
  hangGhe = () => {
    return danhSachGhe.map((item, index) => {
      return (
        <div key={index}>
          <HangGhe item={item} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bigAll">
        <div className="affter">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                <div className="d.flex justify-content-center">
                  <div className="screen">Màn Hình</div>
                </div>
                {this.hangGhe()}
                <p className="text-center text-light fs-3">Nhấn lại để hủy</p>
              </div>
              <div className="col-4 mt-3">
                <h4 className="text-warning text-center">
                  DANH SÁCH GHẾ BẠN CHỌN
                </h4>
                <ThongTinGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
