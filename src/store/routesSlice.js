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
        nodes: [
          { id: v4(), route: "test", nodes: [], title: "Test" },
          { id: v4(), route: "test1", nodes: [], title: "Test1" },
        ],
        title: "Main",
      },
      {
        id: v4(),
        route: "main1",
        nodes: [
          { id: v4(), route: "test1", nodes: [], title: "Test1" },
          { id: v4(), route: "test11", nodes: [], title: "Test11" },
        ],
        title: "Main1",
      },
      {
        id: v4(),
        route: "main2",
        nodes: [
          { id: v4(), route: "test2", nodes: [], title: "Test2" },
          { id: v4(), route: "test21", nodes: [], title: "Test21" },
        ],
        title: "Main2",
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
