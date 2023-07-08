import { configureStore } from "@reduxjs/toolkit";
import thongTinDatVeReduxcer from "./thongTinDatVeReduxcer";

export const store = configureStore({
  reducer: {
    thongTinDatVeReduxcer: thongTinDatVeReduxcer,
    //   gheDangChon: (state = stateDefault, action) => {
    //     //   switch (action.type) {
    //     //     default:
    //     // if (action.type == "THAYCSS") {
    //     //   state = action.payload;
    //     // }
    //     switch (key) {
    //       case value:

    //         break;

    //       default:
    //         break;
    //     }
    //     return state;
    //     //   }
    //   },
  },
});
