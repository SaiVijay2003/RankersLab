import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Enrolling in a course is simple. Create an account, browse our course catalog, select the course you're interested in, and click the \"Enroll\" button. You can then proceed to payment to complete your enrollment."
    },
    {
      question: "What are the payment options?",
      answer: "We accept various payment methods including credit/debit cards, net banking, and mobile wallets. We also offer installment plans for selected courses to make quality education more accessible."
    },
    {
      question: "Are the classes live or recorded?",
      answer: "We offer both live and recorded classes. Our live classes provide real-time interaction with tutors, while recorded sessions allow you to learn at your own pace. Many of our courses include a mix of both formats for optimal learning."
    },
    {
      question: "How can I contact an instructor?",
      answer: "Once enrolled in a course, you can message your instructor directly through our platform. We also host regular Q&A sessions where you can interact with instructors live and ask any questions you may have."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Rankerslab.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <AccordionTrigger className="px-4 py-4 font-medium text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
