import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/styles.module.scss";

import { useSelector } from "react-redux";
import Image from "next/future/image";
import ShanshawnLight from "./assets/images/shanshawn-light.gif";
import ShanshawnDark from "./assets/images/shanshawn-dark.gif";
import { FormattedMessage } from "react-intl";
import {
  Accordion,
  Card,
  Col,
  Container,
  Row,
  useAccordionButton,
} from "react-bootstrap";
import CloudToLeft from "../shared/CloudToLeft";
import { featuresData } from "./data";
import Plus from "./assets/images/plus.svg";
import { useRouter } from "next/router";

const Index = () => {
  const { theme } = useSelector((state) => state.theme);
  const [activeKey, setActiveKey] = useState(null);
  const { locale } = useRouter();
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setActiveKey((prevKey) => (prevKey === eventKey ? null : eventKey));
    });

    return (
      <button type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }
  return (
    <div className={styles.features} id="features">
      <div className="features-wrapper">
        <Container>
          <div className="features-content">
            <Row>
              <Col xs={12} md={6}>
                <div className="character-img">
                  <Image
                    src={theme === "dark" ? ShanshawnDark : ShanshawnLight}
                    alt="character"
                  />
                  <div className="cloud-wrapper">
                    <CloudToLeft>
                      <foreignObject x="100" y="70" width="310" height="400">
                        <div className="character-info">
                          <h3 className="name">
                            <FormattedMessage id="name" /> : شنشون
                          </h3>
                          <p className="role">
                            <FormattedMessage id="role" /> : الشخصية المساعدة
                          </p>
                          <p className="characterDescription">
                            لئيم كذئبٍ في الظلال، ماكٌر كحكايات الخيال، خبيث
                            يتقن فن الجدال، يسعى دائما لاغضاب القلوب بهدايا
                            غريبة لا تناسب الاحوال، متعته إثارة الاستفزاز
                            والاحتيال.{" "}
                          </p>
                        </div>
                      </foreignObject>
                    </CloudToLeft>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="text">
                  <h3>مميزات التطبيق </h3>

                  <Accordion activeKey={activeKey}>
                    {featuresData?.map((item, index) => {
                      const currentEventKey = index.toString();
                      const isActive = activeKey === currentEventKey;

                      return (
                        <Card
                          key={index}
                          className={`accordion-card ${
                            isActive ? "active-accordion" : ""
                          }`}
                        >
                          <Card.Header className="accordion-header">
                            <CustomToggle eventKey={currentEventKey}>
                              <span className="fs-md fc-text order">
                                {index + 1}
                              </span>
                              <h3 className="title ">
                                {item?.title?.[locale]}
                              </h3>
                              <span className="plus-icon">
                                <Plus />
                              </span>
                            </CustomToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={currentEventKey}>
                            <Card.Body className="accordion-body">
                              <p className="description">
                                {item?.description?.[locale]}
                              </p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      );
                    })}
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Index;
