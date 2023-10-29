import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  location: yup.string().required(),
  posting_date: yup.date().required(),
  closing_date: yup.date().required(),
  company_id: yup.string().nullable().required(),
});
