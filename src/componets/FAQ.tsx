"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is ACM GHRCE Student Chapter?",
    answer:
      "The ACM GHRCE Student Chapter is a community of tech enthusiasts at G. H. Raisoni College of Engineering. We aim to promote learning, innovation, and collaboration in computer science and technology through events, workshops, and competitions.",
  },
  {
    question: "Who can join the ACM GHRCE Student Chapter?",
    answer:
      "Any student from GHRCE with an interest in technology, coding, design, or research can join the chapter. We welcome students from all branches who are curious and eager to learn.",
  },
  {
    question: "What kind of events does the chapter organize?",
    answer:
      "We organize a variety of events including coding competitions, hackathons, expert tech talks, hands-on workshops, and collaborative projects to help students enhance their practical knowledge.",
  },
  {
    question: "Do I need to have prior experience in programming to join?",
    answer:
      "Not at all! We have activities and learning sessions for all levels — whether you are a beginner or an advanced coder. Our mentors and seniors help guide new members throughout their journey.",
  },
  {
    question: "What are the benefits of joining ACM?",
    answer:
      "Members get exclusive access to ACM resources, opportunities to participate in international events, network with industry professionals, and gain valuable experience in leadership and teamwork.",
  },
  {
    question: "How can I become a member?",
    answer:
      "You can join by signing up through our membership form or during our recruitment drive. Follow our social media pages or official website for announcements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      {/* Title Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Frequently Asked <span className="text-blue-400">Questions</span>
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get answers to some of the most common questions about the ACM GHRCE
          Student Chapter and how you can be part of our tech-driven community.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto flex flex-col divide-y divide-white/10">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span
                className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                  openIndex === index ? "text-blue-400" : "text-white"
                }`}
              >
                {faq.question}
              </span>

              <ChevronDown
                className={`text-gray-300 w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Footer */}
      <div className="text-center mt-10">
        <p className="text-gray-500">
          Still have questions?{" "}
          <Link
            to = "/contact"
            className="text-blue-400 hover:underline font-medium"
          >
            Contact Us
          </Link>{" "}
          — we’d love to help!
        </p>
      </div>
    </section>
  );
}