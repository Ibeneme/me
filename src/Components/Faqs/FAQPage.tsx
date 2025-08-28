import React, { useEffect, useState } from "react";
import MinusIcon from "../Icons/MinusIcon";
import AddIcon from "../Icons/AddIcon";
import "./FAQPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What services does Boring Thinkers Limited provide?",
    answer:
      "Boring Thinkers Limited specializes in designing and developing user-centric software solutions, including web applications, mobile apps, enterprise software, and AI-powered tools. We also offer UI/UX design, software consulting, and product strategy services.",
  },
  {
    question:
      "How does Boring Thinkers Limited ensure quality in its software solutions?",
    answer:
      "We follow a structured process that includes thorough research, ideation, design, agile development, rigorous testing, and continuous improvement. Our focus is on building reliable, scalable, and intuitive solutions that meet real-world needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We develop solutions for various industries, including fintech, e-commerce, logistics, education, and AI-driven applications. Our team is flexible and can tailor software to meet the unique needs of any sector.",
  },
  {
    question: "Do you have a platform for clients to track their projects?",
    answer:
      "Yes! We’ve built our own custom software specifically for managing and tracking client projects. Once onboarded, clients receive secure login credentials to access real-time updates about their project’s progress, milestones, team activity, and more. This ensures full visibility and accountability throughout the development process.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We provide dedicated and top-quality customer support through multiple channels, including email, WhatsApp, and in-app messaging. Our team is always ready to respond promptly, solve issues, and ensure a smooth experience for our clients.",
  },
  {
    question: "Do you offer flexible payment plans?",
    answer:
      "Yes, we offer flexible payment structures tailored to our clients’ needs. Whether it's milestone-based, monthly subscriptions, or phased payments, we adapt to ensure affordability and alignment with project goals.",
  },
  {
    question: "Can I do equity-based business with Boring Thinkers Limited?",
    answer:
      "Yes, we’re open to equity and cash-based partnerships for select clients and startups. We’re happy to discuss hybrid business models that align incentives and create long-term value for both sides.",
  },

  {
    question:
      "How can I collaborate with Boring Thinkers Limited for my project?",
    answer:
      "You can reach out to us via email at contact@boringthinkers.com or through our website. We will discuss your project needs, define the scope, and develop a customized solution that aligns with your vision.",
  },
  {
    question:
      "Why choose Boring Thinkers Limited over other development firms?",
    answer:
      "We prioritize innovation, simplicity, and effectiveness in our solutions. Our team is committed to delivering products that make complex tasks easier, improve productivity, and enhance user experience. Plus, we focus on long-term partnerships and continuous product growth.",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <p className="faq-subtext">
        Get answers to some of the most common questions about our services. If
        you have further inquiries, feel free to reach out to us!
      </p>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          // data-aos={activeIndex !== index ? "zoom-out" : ''}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3 className="faq-title">{faq.question}</h3>
            <span
              style={{
                marginLeft: 12,
                backgroundColor: "#023009",
                border: "1px solid #023009",
                borderRadius: "50%",
                padding: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {activeIndex === index ? (
                <MinusIcon width={24} height={24} color={`#FFD000`} />
              ) : (
                <AddIcon width={24} height={24} color={`#fff`} />
              )}
            </span>
          </div>
          <span>
            {activeIndex === index && (
              <p className="faq-answer">
                {faq?.answer?.split(" ").map((word, i) =>
                  word.includes("contact@boringthinkers.com") ? (
                    <span key={i} className="highlighted-email">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  )
                )}
              </p>
            )}
          </span>{" "}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
