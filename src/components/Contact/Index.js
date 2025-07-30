import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Woshwo from "./assets/woshwo.png";
import { useForm } from "react-hook-form";
// import server from "@/api/server";
import { useIntl } from "react-intl";
import toast from "react-hot-toast";

import Styles from "./styles/styles.module.scss";

const Contact = () => {
  const { formatMessage } = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // await server({}).post(`/pages/contact/sections`, {
      //   section: {
      //     ...data,
      //   },
      // });

      reset();
      toast.success(`${formatMessage({ id: "thankMsg" })}`);
      // Swal.fire(
      //   `${formatMessage({ id: "thanks" })}`,
      //   `${formatMessage({ id: "thankMsg" })}`,
      //   "success"
      // );
    } catch (error) {
      toast.error(`${formatMessage({ id: "error" })}`);

      console.error("Error sending request:", error);
    }
  };
  return (
    <section className={Styles.contact}>
      <Container className="contact-content">
        <div className="contact-body" data-aos="flip-down">
          <h2 className="fs-xl fc-primary">هل ترغب فى الانضمام لاسرة وشوو ؟</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="form-row">
              <Col md={6}>
                <input
                  type="text"
                  placeholder="الاسم"
                  {...register("name", { required: "الاسم مطلوب" })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </Col>

              <Col md={6}>
                <input
                  type="text"
                  placeholder="رقم الهاتف"
                  {...register("phone", {
                    required: "رقم الهاتف مطلوب",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "رقم الهاتف غير صالح",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </Col>

              <Col md={6}>
                <input
                  type="text"
                  placeholder="البريد الالكترونى"
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "بريد إلكتروني غير صالح",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </Col>

              <Col md={6}>
                <input
                  type="text"
                  placeholder="الوظيفة"
                  {...register("job", { required: "الوظيفة مطلوبة" })}
                />
                {errors.job && <p className="error">{errors.job.message}</p>}
              </Col>

              <button>ارسال</button>
            </Row>
          </form>
        </div>
        <div className="woshwo" data-aos="fade-left">
          <Image src={Woshwo} alt="woshwo" width={200} height={335} />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
