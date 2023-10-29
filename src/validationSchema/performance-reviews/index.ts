import * as yup from 'yup';

export const performanceReviewValidationSchema = yup.object().shape({
  review_date: yup.date().required(),
  rating: yup.number().integer().required(),
  comments: yup.string().required(),
  next_review_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  reviewer_id: yup.string().nullable().required(),
});
