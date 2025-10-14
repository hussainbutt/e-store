import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const SellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadSellerRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadSellerSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.Seller = action.payload;
    })
    .addCase("LoadSellerFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    // update Seller information
    .addCase("updateSellerInfoRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateSellerInfoSuccess", (state, action) => {
      state.loading = false;
      state.Seller = action.payload;
    })
    .addCase("updateSellerInfoFailed", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // update Seller address
    .addCase("updateSellerAddressRequest", (state) => {
      state.addressloading = true;
    })
    .addCase("updateSellerAddressSuccess", (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.Seller = action.payload.Seller;
    })
    .addCase("updateSellerAddressFailed", (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // delete Seller address
    .addCase("deleteSellerAddressRequest", (state) => {
      state.addressloading = true;
    })
    .addCase("deleteSellerAddressSuccess", (state, action) => {
      state.addressloading = false;
      state.successMessage = action.payload.successMessage;
      state.Seller = action.payload.Seller;
    })
    .addCase("deleteSellerAddressFailed", (state, action) => {
      state.addressloading = false;
      state.error = action.payload;
    })

    // get all Sellers --- admin
    .addCase("getAllSellersRequest", (state) => {
      state.SellersLoading = true;
    })
    .addCase("getAllSellersSuccess", (state, action) => {
      state.SellersLoading = false;
      state.Sellers = action.payload;
    })
    .addCase("getAllSellersFailed", (state, action) => {
      state.SellersLoading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    })
    .addCase("clearMessages", (state) => {
      state.successMessage = null;
    });
});
