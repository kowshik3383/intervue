import React, { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react'; // Import Lucide icons

const Section4 = () => {
  const [openIndex, setOpenIndex] = useState([]); // No items open by default

  const faqs = [
    {
      question: "How do I schedule an interview?",
      answer: "Go to intervue.io/homepage and select the profile and rounds you want to schedule the interview for. Add candidate and company details and click 'Schedule Interview.'"
    },
    {
      question: "Will I be charged per interview?",
      answer: "For on-demand interviews, you will get paid credits to use per month."
    },
    {
      question: "Can I get a trial for On-demand interviews?",
      answer: "Yes! Enjoy 2 free credits (1 credit = 1 interview) or you can reach out to us."
    }
  ];

  const toggleAccordion = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter(i => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <section className="w-full bg-[#f4e7e7]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-4xl font-normal text-[#2b2b2b] mb-4">FAQs</h3>
            <div className="text-[#2b2b2b] text-lg mb-16">
              Here are frequently asked questions to clear all your doubts.
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-medium text-[#2b2b2b] mb-2">
                Still have doubts?
              </div>
              <a href="#" className="inline-flex items-center text-[#1d68bd] hover:text-blue-700">
                <Phone className="w-5 h-5" />
                <span className="ml-2">Talk to our representative</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-b  border-black">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="text-lg font-bold text-[#2b2b2b]">{faq.question}</div>
                  <div>
                    {openIndex.includes(index) ? <Minus className="w-5 h-5 text-[#2b2b2b]" /> : <Plus className="w-5 h-5 text-[#2b2b2b]" />}
                  </div>
                </button>
                {openIndex.includes(index) && (
                  <div className="pl-4 pb-3 text-[#2b2b2b]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile "Still have doubts?" section */}
            <div className="md:hidden mt-12 border-t border-gray-200 pt-6">
              <div className="text-lg font-medium text-[#2b2b2b] mb-2">
                Still have doubts?
              </div>
              <a href="#" className="inline-flex items-center text-[#1d68bd] hover:text-blue-700">
                <Phone className="w-5 h-5" />
                <span className="ml-2">Talk to our representative</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
