import React from "react";
import { Container, Accordion as RBAccordion } from "react-bootstrap";
import "../../Css/Style.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const faqs = [
    {
      question: "What types of home services do you offer?",
      answer:
        "We offer plumbing, electrical, HVAC, appliance repair, and maintenance services tailored to your needs.",
    },
    {
      question: "Are your servicing products eco-friendly?",
      answer:
        "Yes! We prioritize eco-friendly and sustainable products to ensure safety for both your home and the environment.",
    },
    {
      question: "How do I schedule home service?",
      answer:
        "You can schedule a service through our website or by calling our customer service hotline. We offer flexible appointment slots.",
    },
    {
      question: "Do I need to be home during services?",
      answer:
        "It depends on the service. We provide instructions if you prefer to leave keys or grant temporary access.",
    },
    {
      question: "What if I am not satisfied with the home servicing?",
      answer:
        "We offer a satisfaction guarantee. Our team will address any concerns promptly or arrange for a follow-up service.",
    },
  ];

  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div>
      <section className="faq-section py-5">
        <Container>
          <div className="faq-header text-center mb-4">
            <div className="tag">My Home Buddy</div>
            <h2>Frequently Asked Questions</h2>
          </div>

          <RBAccordion activeKey={activeKey} flush>
            {faqs.map((item, index) => (
              <RBAccordion.Item eventKey={index.toString()} key={index}>
                <RBAccordion.Header
                  onClick={() => handleToggle(index.toString())}
                >
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <span>{item.question}</span>
                    {activeKey === index.toString() ? (
                      <div className="toggle-btn">
                        <FaChevronUp size={30} color="white" />
                      </div>
                    ) : (
                      <div className="toggle-btn">
                        {" "}
                        <FaChevronDown size={30} color="white" />
                      </div>
                    )}
                  </div>
                </RBAccordion.Header>
                <RBAccordion.Body>{item.answer}</RBAccordion.Body>
              </RBAccordion.Item>
            ))}
          </RBAccordion>
        </Container>
      </section>
    </div>
  );
};

export default Faq;
