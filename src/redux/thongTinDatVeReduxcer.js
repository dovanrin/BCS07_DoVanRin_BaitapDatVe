const stateDefault = {
  danhSachGheDangChon: [],
};
// { soGhe: "A1", gia: 1000 }
const thongTinDatVeReduxcer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
      let index = danhSachGheDangChonUpdate.findIndex(
        (gheDangChon) => gheDangChon.soGhe === action.ghe.soGhe
      );
      console.log(index);
      if (index !== -1) {
        danhSachGheDangChonUpdate.splice(index, 1);
      } else {
        danhSachGheDangChonUpdate.push(action.ghe);
      }

      return { ...state, danhSachGheDangChon: [...danhSachGheDangChonUpdate] };
    }
    case "HUY_DAT_GHE": {
      let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
      let index = danhSachGheDangChonUpdate.findIndex(
        (gheDangChon) => gheDangChon.soGhe === action.soGhe
      );
      console.log(index);
      if (index !== -1) {
        danhSachGheDangChonUpdate.splice(index, 1);
      }
      return { ...state, danhSachGheDangChon: [...danhSachGheDangChonUpdate] };
    }
    default:
      return { ...state };
  }
};

export default thongTinDatVeReduxcer;
