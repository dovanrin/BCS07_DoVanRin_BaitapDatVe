import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinGhe extends Component {
  render() {
    return (
      <div>
        <div className="">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light ">Ghế Được Chọn</span> <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light ">Ghế Đang Chọn</span>
          <br />
          <button className="gheChuaChon ms-0 disabled"></button>{" "}
          <span className="text-light ">Ghế Chưa Chọn</span>
        </div>
        <div className="mt-5">
          <div className="table-responsive">
            <table className="table table-dark text-center border-2 bg-opacity-10">
              <thead>
                <tr className="yelow">
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Hủy Vé</th>
                </tr>
              </thead>
              <tbody>
                {this.props.danhSachGheDangChon.map((gheDangChon, index) => {
                  return (
                    <tr key={index}>
                      <td className="fw-bold ">
                        <button className="gheDangChon boder-2">
                          {gheDangChon.soGhe}
                        </button>
                      </td>
                      <td className="">{gheDangChon.gia.toLocaleString()}</td>
                      <td>
                        <button
                          className="ms-3 text-center"
                          onClick={() => {
                            // dispatch cai ghe nay len redux, push vao mang gheDangChon
                            this.props.huyDatGhe(gheDangChon.soGhe);
                          }}
                        >
                          <i class="fa-solid fa-delete-left"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>Tông Tiền:</td>
                  <td>
                    {this.props.danhSachGheDangChon.reduce(
                      (tongTien, gheDangChon, index) => {
                        return (tongTien += gheDangChon.gia);
                      },
                      0
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangChon: state.thongTinDatVeReduxcer.danhSachGheDangChon,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    huyDatGhe: (soGhe) => {
      dispatch({
        type: "HUY_DAT_GHE",
        soGhe,
      });
    },
  };
};
const ReduxComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThongTinGhe);
export default ReduxComponent;
