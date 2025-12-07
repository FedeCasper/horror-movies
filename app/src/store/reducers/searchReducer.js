import { createReducer } from "@reduxjs/toolkit";
import { setSearchQuery, setInitialItems } from "../actions/searchActions";
import { filterItemsByQueryAndClassification } from "../../utils/serachReducerUtils";

const initialState = {
    searchQuery: '',
    allItems: [],
    filteredItems: null,
    screen: ''
  };

const searchReducer = createReducer( initialState, (builder) => {
    builder
    .addCase(setInitialItems, (state, action) => {
      state.allItems = action.payload;
      if (state.searchQuery) {
        state.filteredItems = filterItemsByQueryAndClassification(
          state.allItems,
          state.searchQuery,
          state.screen
        );
      }
    })
    .addCase(setSearchQuery, (state, action) => {
        const { query, screen } = action.payload;
        state.searchQuery = query;
        state.screen = screen;
        state.filteredItems = filterItemsByQueryAndClassification(state.allItems, query, screen);
      });
});

export default searchReducer;