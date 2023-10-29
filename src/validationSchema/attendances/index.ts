import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  check_in_time: yup.date().required(),
  check_out_time: yup.date().required(),
  date: yup.date().required(),
  status: yup.string().required(),
  notes: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
