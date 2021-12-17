import { configureStore } from "@reduxjs/toolkit";
import routesSlice from "./routesSlice";

export default configureStore({
  reducer: {
    routes: routesSlice
  },
});
