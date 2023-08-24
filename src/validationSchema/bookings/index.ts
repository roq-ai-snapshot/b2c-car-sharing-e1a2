import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  car_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
