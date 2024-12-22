'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What travel services do you offer for students?",
    answer: "We provide comprehensive travel services including visa assistance, flight bookings, travel insurance, and complete study abroad packages tailored for international students."
  },
  {
    question: "How do you assist with visa applications?",
    answer: "Our visa assistance includes document preparation, application review, interview preparation, and guidance throughout the entire visa process."
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we offer comprehensive travel insurance packages that cover medical emergencies, trip cancellations, lost baggage, and other travel-related incidents."
  },
  {
    question: "Can you help with accommodation arrangements?",
    answer: "Yes, we assist in finding and booking suitable accommodation options near your university or destination."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our travel services</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};