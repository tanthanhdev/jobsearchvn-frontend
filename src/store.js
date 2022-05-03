import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import CompanyReviewsReducer from "./slices/company-reviews";
import CompanyProfileReducer from "./slices/company-profile";
import MemberProfileReducer from "./slices/member-profile";
import CvTemplateReducer from "./slices/cv";
import searchesReducer from "./slices/searches";
import searchNormalSlice from "./containers/HomePage/searchNormalSlice";
import searchLocationSlice from "./containers/HomePage/searchLocationSlice";
import viewDetailPageSlice from "./containers/HomePage/viewDetailPageSlice";
// import memberSlice from "./containers/ProfileMember/memberSlice";

const reducer = {
  auth: authReducer,
  company_review: CompanyReviewsReducer,
  cv_template: CvTemplateReducer,
  message: messageReducer,
  profileEmployer: CompanyProfileReducer,
  profileMember: MemberProfileReducer,
  searchNormalSlice: searchNormalSlice,
  searchLocationSlice: searchLocationSlice,
  viewDetailPageSlice: viewDetailPageSlice,
  searches: searchesReducer,
  // cua an
  // memberSlice:memberSlice,
  // cua an
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
