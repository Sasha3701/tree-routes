import { createSlice } from "@reduxjs/toolkit";
import { addRoute } from "../utils";
import { v4 } from "uuid";

export const routesSlice = createSlice({
  name: "routes",
  initialState: {
    value: [
      {
        id: v4(),
        route: "main",
        nodes: [],
        title: "Main",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      const { parent, route } = action.payload;
      state.value = addRoute(state.value, parent, route);
    },
  },
});

export const { add } = routesSlice.actions;

export default routesSlice.reducer;
