import { createReducer } from "@reduxjs/toolkit";
import data from "../../data/data.json";
import { setSearchQuery } from "../actions/searchActions";
import { filterItemsByQueryAndClassification } from "../../utils/serachReducerUtils";

const initialState = {
    searchQuery: '',
    allItems: data,
    filteredItems: null,
    screen: ''
  };

const searchReducer = createReducer( initialState, (builder) => {
    builder
    .addCase(setSearchQuery, (state, action) => {
        const { query, screen } = action.payload;
        state.searchQuery = query;
        state.screen = screen;
        state.filteredItems = filterItemsByQueryAndClassification(state.allItems, query, screen);
      });
});

export default searchReducer;