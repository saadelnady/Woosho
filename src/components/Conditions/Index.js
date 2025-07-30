import React from "react";
import { Container } from "react-bootstrap";
import Styles from "./styles/styles.module.scss";
import { terms } from "./data";

const Conditions = () => {
  return (
    <section className={Styles.conditions} id="terms">
      <Container className="conditions-content">
        <div className="titles" data-aos="fade-up">
          <h2 className="fs-xl fc-primary"> الشروط والاحكام </h2>
          <p className="fs-md fc-text">
            باستخدام هذا التطبيق، فإنك توافق على الالتزام بالشروط والأحكام
            التالية. يُرجى قراءتها بعناية قبل استخدام التطبيق.
          </p>
        </div>
        <ul>
          {terms?.map((term, index) => (
            <li key={index} data-aos="zoom-in">
              <p className="fs-md fc-text">{term}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Conditions;
