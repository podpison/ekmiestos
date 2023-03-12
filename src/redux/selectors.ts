import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//static reducer
export const selectProductCategories = createDraftSafeSelector(selectSelf, state => state.static.productCategories);
export const selectMainPageHeroitems = createDraftSafeSelector(selectSelf, state => state.static.mainPageHeroitems);


// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);
// export const selectStartupItems = createDraftSafeSelector(selectSelf, state => state.static.startups);