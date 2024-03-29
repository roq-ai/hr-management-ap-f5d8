import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  application_date: yup.date().required(),
  status: yup.string().required(),
  resume: yup.string().required(),
  cover_letter: yup.string().required(),
  job_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
