import React from "react";
import styles from "../../styles/Sections/Contact.module.scss";
import Input from "../Ui/Input";
import Button from "../Ui/Button";
import Footer from "../Ui/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { defaultAnimationEasing } from "../../Animations";
import { MyContext } from "../Context/Context";
import * as yup from "yup";

const Contact: React.FC = () => {
  const [hasSubmittedForm, setSubmittedForm] = React.useState<boolean>(false);
  const [isSubmitting, setSubmitting] = React.useState<boolean>(false);
  const globalState = React.useContext(MyContext);
  const sectionRef = React.useRef(null);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const { handleChange, values, errors, handleSubmit } = useFormik({
    validateOnChange: hasSubmittedForm,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setSubmitting(true);

        const data = await axios.post(
          "https://mariodev.vercel.app/api/mailMe",
          values
        );

        toast.success(data?.data?.message || "Email sent successfully!");

        setSubmitting(false);
      } catch (error: any) {
        console.error(error);

        toast.error(
          error?.response?.data?.message ||
            "An error happened. Try copying my contact information from the menu!"
        );

        setSubmitting(false);
      }
    },
  });

  React.useEffect(() => {
    let tempSections = globalState.currentSections;
    tempSections.push(sectionRef.current);

    globalState.setCurrentSections(tempSections);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={styles.section}>
      <motion.p
        initial={{ opacity: 0, x: -150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: defaultAnimationEasing },
        }}
        className={styles.section_subHeader}
      >
        contact
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: defaultAnimationEasing,
            delay: 0.4,
          },
        }}
        className={styles.section_header}
      >
        Lets get you on started!
      </motion.h1>

      <motion.form
        initial={{
          y: 150,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.4,
            ease: defaultAnimationEasing,
          },
        }}
        onSubmit={(e) => {
          e.preventDefault();

          setSubmittedForm(true);
          handleSubmit(e);
        }}
        className={styles.section_form}
      >
        <Input
          error={errors.name}
          placeholder={"your name"}
          onChange={handleChange("name")}
          value={values.name}
        />
        <Input
          error={errors.email}
          placeholder={"your email"}
          onChange={handleChange("email")}
          value={values.email}
        />
        <Input
          error={errors.message}
          placeholder={"your message"}
          onChange={handleChange("message")}
          value={values.message}
          isTextArea={true}
        />
        <Button
          disabled={isSubmitting}
          style={{ width: "100%" }}
          type={"submit"}
        >
          {isSubmitting ? "Sending... Please wait" : "Send!"}
        </Button>
      </motion.form>
      <Footer />
    </section>
  );
};

export default Contact;
