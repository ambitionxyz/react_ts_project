import { useFormik, FormikProps } from "formik";
// import * as Yup from "yup";

import { useAppSelector } from "../../stores";

interface IUseLogin {
  isLoading: boolean | undefined;
  isScreenLoading: boolean | undefined;
  formik: FormikProps<{ email: string }>;
}

// export default function useLogin(): IUseLogin {

// }
