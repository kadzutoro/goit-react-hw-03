import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues = {
    name: "",
    number: ""
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });

export default function ContactForm ({ onAdd }) {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: Date.now(),
            ...values
        });
        actions.resetForm();
    }
    return (
        <Formik initialValues={initialValues} validationSchema={ContactsSchema} onSubmit={handleSubmit}>
            <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" as="span" />
            <Field type='text' name='number'/>
            <ErrorMessage name="number" as="span" />
            <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}   