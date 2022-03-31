import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import CompanyReviewsReducer from "./slices/company-reviews";
import CvTemplateReducer from "./slices/cv";

const reducer = {
  auth: authReducer,
  company_review: CompanyReviewsReducer,
  cv_template: CvTemplateReducer,
  message: messageReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
