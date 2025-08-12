import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ Data (You can fetch this from an API or keep it static)
const faqData = [
  {
    question: "WealthSync ka use kaise karein?",
    answer:
      "WealthSync ka use karne ke liye pehle account create karein. Uske baad apne transactions add karein, budgets set karein, aur AI-powered insights ka faida uthayein.",
  },
  {
    question: "WealthSync free hai ya paid?",
    answer:
      "WealthSync ek freemium app hai. Basic features free mein available hain, lekin advanced features ke liye premium subscription leni padti hai.",
  },
  {
    question: "AI categorization kaise kaam karti hai?",
    answer:
      "AI apke past transactions ko analyze karti hai aur automatically unhe categories mein distribute karti hai. For example, groceries, utilities, entertainment, etc.",
  },
  {
    question: "Recurring transactions kaise manage karein?",
    answer:
      "Recurring transactions ko manage karne ke liye 'Recurring' section mein jayein aur naye recurring transactions add karein. App automatically unhe process karega.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ answer
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-semibold text-lg flex justify-between items-center">
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </h3>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
