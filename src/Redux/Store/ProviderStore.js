import { configureStore } from "@reduxjs/toolkit";
import providerreducer from "../Slice/Providerslice";
const store = configureStore({
  reducer: {
    reg: providerreducer,
  },
});
export default store;
