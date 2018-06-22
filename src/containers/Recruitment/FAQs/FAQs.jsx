import React from 'react';

// components
import FAQ_INFO from './faq_constants.js';
import AccordionItem from '../../components/AccordionItem.jsx';
import { PageHeader } from '../../components/HeaderStyles';

const FAQs = () => {
  document.title = 'FAQs - Pi Sigma Epsilon | Zeta Chi Chapter';

  const faqs = FAQ_INFO.map((item, index) => {
    if (item.question && item.answer) {
      return (
        <AccordionItem
          key={`accordion_item_${index}`}
          question={item.question}
          answer={item.answer}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div id="faqs-container">
      <PageHeader>Frequently Asked Questions</PageHeader>
      <div className="py-1q px-0">{faqs}</div>
    </div>
  );
};

export default FAQs;
