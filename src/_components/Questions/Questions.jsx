"use client";

import React, { useState } from "react";
import style from "./Questions.module.css";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the payment terms?",
      answer:
        "Our payment terms for design projects are 80% upfront and remaining 20% after deliverables are fulfilled. For marketing it is 100% upfront.",
    },
    {
      question: "Is the premium theme added in the quotation?",
      answer: "Cost for the Premium theme is not covered in the quotation.",
    },
    {
      question: "Do you do logo design and product labelling?",
      answer:
        "No we do not, however we can put you in touch with other partners who can provide you the same.",
    },
    {
      question: "How much time does it takes to build the website?",
      answer:
        "In order to build a professional website we need around 5-6 weeks, sometimes more.",
    },
    {
      question: "Apart from website design what services do you offer?",
      answer: "We also provide marketing setup services for select clients.",
    },
    {
      question: "What do I need to provide to get started?",
      answer:
        "We need the Logo, Complete Brand Informations and Product details to get started.",
    },
  ];

  return (
    <div className={style.faqContainer}>
      <h2 className={style.faqTitle}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${style.faqItem} ${activeIndex === index ? style.active : ""}`}
        >
          <h3
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {faq.question}
            <span className={style.icon}>
              {activeIndex === index ? "−" : "+"}
            </span>
          </h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
