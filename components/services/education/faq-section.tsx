'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What services do you offer for university admissions?",
    answer: "We provide comprehensive university admission services including university selection, application guidance, essay review, and interview preparation."
  },
  {
    question: "How do you help with test preparation?",
    answer: "Our test preparation services include personalized study plans, practice tests, one-on-one tutoring, and strategies for specific exams like SAT, TOEFL, and IELTS."
  },
  {
    question: "What makes your career counseling unique?",
    answer: "Our career counseling combines industry insights, personality assessment, and academic planning to create a tailored career roadmap for each student."
  },
  {
    question: "How long does the consultation process take?",
    answer: "The initial consultation typically takes 30-60 minutes, during which we discuss your goals and create a preliminary action plan."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our services</p>
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