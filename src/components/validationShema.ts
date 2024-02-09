import * as yup from "yup";

const movieShema = yup
  .object({
    title: yup
      .string()
      .required("title is required")
      .min(2, "The title must have min. 2 chars")
      .max(30, "The title must have max 30 chars"),
    director: yup.string().required("director is required"),
    runtime: yup.number().required("runtime is required"),
  })
  .required();
export default movieShema;
