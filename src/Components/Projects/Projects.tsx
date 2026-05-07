import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Star } from "lucide-react";

// Project Image Imports
import pickarsImg from "../../assets/projects/new/pickars.png";
import kindredImg from "../../assets/projects/new/kindred.png";
import skypayImg from "../../assets/projects/new/skypay.png";
import yareImg from "../../assets/projects/new/yare.png";
import clonekraft from "../../assets/projects/new/clonekraft.png";
import colsphere from "../../assets/projects/new/colsphere.png";

const recentProjects = [
  {
    id: "p1",
    title: "Pickars",
    company: "Pickars Courier Limited",
    description:
      "On-demand courier ecosystem streamlining last-mile logistics for the Port Harcourt metropolitan area.",
    link: "https://www.pickars.com",
    tag: "Logistics On-Demand",
    image: pickarsImg,
  },
  {
    id: "p6",
    title: "Kokohor",
    company: "Boring Thinkers Ltd",
    description:
      "A specialized cooperative management platform designed for financial transparency and community contributions.",
    link: "https://kindred-web.onrender.com/",
    tag: "Fintech / Cooperative",
    image: kindredImg,
  },
  {
    id: "p3",
    title: "SkyPay Africa",
    company: "Sky Pay Fintech",
    description:
      "A seamless digital payment gateway designed to simplify cross-border transactions and financial management for the modern era.",
    link: "https://skypay-landing.vercel.app/",
    tag: "Fintech Solutions",
    image: skypayImg,
  },
  {
    id: "p0",
    title: "Yare",
    company: "Yare Learning Hub",
    description:
      "A comprehensive Edutech platform designed to democratize access to high-impact learning resources and digital skill-building.",
    link: "https://yare-t04i.onrender.com/",
    tag: "Edutech / E-Learning",
    image: yareImg,
  },
  {
    id: "p2",
    title: "Clonekraft",
    company: "Clonekraft AI",
    description:
      "Harnessing AI vision to bridge the gap between complex furniture design and localized carpentry costing.",
    link: "https://www.clonekraft.com/",
    tag: "AI Structural Vision",
    image: clonekraft,
  },
  {
    id: "p5",
    title: "Colsphere",
    company: "Colsphere",
    description:
      "A collaborative ecosystem designed for digital connectivity and high-velocity team interactions.",
    link: "https://colsphere.com/",
    tag: "SaaS Collaboration",
    image: colsphere,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FEFEFE] py-32 px-6 font-sans selection:bg-[#FFD000] selection:text-black overflow-hidden">
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[#FFD000] opacity-[0.07] blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-[#FFD000] opacity-[0.05] blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-32 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD000]/20 text-[#B89600] font-bold text-xs uppercase tracking-wider mb-8"
          >
            <Sparkles size={14} /> Proven Track Record
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tightest uppercase leading-none mb-6">
            Most Recent <br />
            <span className="text-gray-300">Projects.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl font-medium leading-relaxed">
            A collection of Mobile apps, servers, websites and softwares built
            with performance and scalability in mind.
          </p>
        </header>

        <div className="space-y-48 lg:space-y-72">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-black/10 font-mono italic">
                      / 0{index + 1}
                    </span>
                    <div className="h-px w-8 bg-black/5" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#FFD000] text-black font-black rounded-2xl shadow-[0_15px_30px_-10px_rgba(255,208,0,0.3)] flex items-center gap-3 text-xs uppercase tracking-widest"
                    >
                      Explore Live <ArrowUpRight size={16} />
                    </motion.a>
                    <span className="text-black/30 text-[10px] font-black uppercase tracking-widest">
                      {project.company}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-7 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative group">
                  <div className="relative aspect-video w-full max-w-4xl rounded-[2.5rem] overflow-hidden border-[10px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] bg-white transition-all duration-700 group-hover:shadow-[0_80px_120px_-20px_rgba(0,0,0,0.2)] group-hover:-translate-y-3">
                    {project.image ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute top-0 left-0 object-cover transition-all duration-1000"
                          style={{
                            width: "calc(100% + 16px)",
                            height: "calc(100% + 2px)",
                            maxWidth: "none", // Prevents CSS framework overrides
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                        <Sparkles size={60} className="text-gray-200" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-64 pt-20 border-t border-gray-100 flex flex-col items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-[#FEFEFE] bg-gray-100 overflow-hidden shadow-sm"
              >
                <img
                  src={`https://i.pravatar.cc/100?u=project${i}`}
                  alt="Client"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#FEFEFE] bg-[#FFD000] flex items-center justify-center text-xs font-black shadow-sm">
              +12
            </div>
          </div>
          <p className="text-gray-400 text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3">
            Trusted by tech teams worldwide{" "}
            <Star size={14} className="fill-[#FFD000] text-[#FFD000]" />
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ProjectsPage;
