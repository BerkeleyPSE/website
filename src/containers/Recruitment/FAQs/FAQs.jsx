import React from 'react';

// components
import FAQS from '../../../constants/faqs';
import AccordionItem from '../../components/AccordionItem.jsx';
import { PageHeader } from '../../components/HeaderStyles';

const FAQs = () => {
  document.title = 'FAQs - Pi Sigma Epsilon | Zeta Chi Chapter';

  const faqs = FAQS.map(f => {
    if (f.question && f.answer) {
      return (
        <AccordionItem
          key={`accordion_faq_${f.question.toLowerCase().replace(/\s/g, '-')}`}
          question={f.question}
          answer={f.answer}
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
