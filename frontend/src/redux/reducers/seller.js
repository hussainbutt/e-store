import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const SellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadSellerRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.Seller = action.payload;
    })
    .addCase("LoadSellerFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    // update Seller information
    .addCase("updateSellerInfoRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("updateSellerInfoSuccess", (state, action) => {
      state.isLoading = false;
      state.Seller = action.payload;
    })
    .addCase("updateSellerInfoFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // update Seller address
    .addCase("updateSellerAddressRequest", (state) => {
      state.addressisLoading = true;
    })
    .addCase("updateSellerAddressSuccess", (state, action) => {
      state.addressisLoading = false;
      state.successMessage = action.payload.successMessage;
      state.Seller = action.payload.Seller;
    })
    .addCase("updateSellerAddressFailed", (state, action) => {
      state.addressisLoading = false;
      state.error = action.payload;
    })

    // delete Seller address
    .addCase("deleteSellerAddressRequest", (state) => {
      state.addressisLoading = true;
    })
    .addCase("deleteSellerAddressSuccess", (state, action) => {
      state.addressisLoading = false;
      state.successMessage = action.payload.successMessage;
      state.Seller = action.payload.Seller;
    })
    .addCase("deleteSellerAddressFailed", (state, action) => {
      state.addressisLoading = false;
      state.error = action.payload;
    })

    // get all Sellers --- admin
    .addCase("getAllSellersRequest", (state) => {
      state.SellersisLoading = true;
    })
    .addCase("getAllSellersSuccess", (state, action) => {
      state.SellersisLoading = false;
      state.Sellers = action.payload;
    })
    .addCase("getAllSellersFailed", (state, action) => {
      state.SellersisLoading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    })
    .addCase("clearMessages", (state) => {
      state.successMessage = null;
    });
});
