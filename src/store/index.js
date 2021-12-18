import { configureStore } from "@reduxjs/toolkit";
import routesSlice from "./routesSlice";
import { loadState } from "./storage";

export default configureStore({
  reducer: {
    routes: routesSlice
  },
  preloadedState: loadState()
});
