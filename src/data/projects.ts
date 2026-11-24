import type { Discipline } from "../lib/disciplines";
import pickars from "../assets/images/pickars.webp";
import skypay from "../assets/images/skypay.webp";
import kokohor from "../assets/images/kokohor.webp";
import yare from "../assets/images/yare.webp";
import oneCommunity from "../assets/images/one-community.webp";
import bussto from "../assets/images/bussto.webp";
import medicules from "../assets/images/medicules.webp";

export type Project = {
  title: string;
  company: string;
  description: string;
  link: string;
  tag: string;
  discipline: Discipline;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Pickars",
    company: "Pickars Courier Limited",
    description: "Logistics ecosystem streamlining last-mile delivery.",
    link: "#",
    tag: "Logistics",
    discipline: "mobile",
    image: pickars,
  },
  {
    title: "SkyPay Africa",
    company: "SkyPay Africa",
    description: "Secure digital wallet built for seamless transfers, bill payments, and everyday money management.",
    link: "https://www.skypay.africa/",
    tag: "Fintech",
    discipline: "mobile",
    image: skypay,
  },
  {
    title: "Kokohor",
    company: "Boring Thinkers Ltd",
    description:
      "A private space for the circles you care about — chat freely, keep family history safe, and protect what matters in a Safety Vault.",
    link: "https://www.kokohorcircle.com/",
    tag: "Community",
    discipline: "mobile",
    image: kokohor,
  },
  {
    title: "Yare Height",
    company: "Yare Height Learning Hub",
    description: "Live online lessons for Nigerian families — qualified teachers, live classes, homework and progress reports in one place.",
    link: "https://www.yareheightlearninghub.com/",
    tag: "Edutech",
    discipline: "web",
    image: yare,
  },
  {
    title: "One Community Home Health",
    company: "JACOP Healthcare Services, Inc.",
    description: "Modern digital interface and brand bento grids for a Texas-based care provider.",
    link: "https://one-community-one.vercel.app/",
    tag: "Healthcare",
    discipline: "web",
    image: oneCommunity,
  },
  {
    title: "Bussto",
    company: "Bussto",
    description:
      "Agentic CRM for customer support — live chat, email, voice and WhatsApp in one inbox, with AI agents handling routing and replies.",
    link: "https://bussto.com/",
    tag: "CRM",
    discipline: "ai",
    image: bussto,
  },
  {
    title: "Medicules",
    company: "Medicules",
    description:
      "Agentic EMR and hospital management — clinical notes, billing & HMO, lab and pharmacy workflows, and real-time ward tracking.",
    link: "https://medicules.vercel.app/",
    tag: "Healthcare",
    discipline: "ai",
    image: medicules,
  },
];

export type AppLink = { name?: string; ios?: string; android?: string };

export type LiveApp = {
  label: string;
  title: string;
  description: string;
  status: "Live" | "Shipped" | "Open";
  apps: AppLink[];
};

export const LIVE_APPS: LiveApp[] = [
  {
    label: "Active project",
    title: "Skypay Africa",
    description:
      "A cross-border fintech app making payments seamless across Africa — built with React Native and TypeScript for iOS and Android.",
    status: "Live",
    apps: [
      {
        ios: "https://apps.apple.com/us/app/skypay-africa/id6758510766",
        android: "https://play.google.com/store/apps/details?id=com.skypayafrica.app",
      },
    ],
  },
  {
    label: "Just shipped",
    title: "Pickars",
    description:
      "A two-sided logistics platform — the rider app and the driver app, both live. Connecting pickups to drivers across Nigeria.",
    status: "Shipped",
    apps: [
      {
        name: "Pickars — Rider App",
        ios: "https://apps.apple.com/us/app/pickars/id6746796884",
        android: "https://play.google.com/store/apps/details?id=com.pickars.app",
      },
      {
        name: "Pickars Riders — Driver App",
        ios: "https://apps.apple.com/us/app/pickars-riders/id6748903962",
        android: "https://play.google.com/store/apps/details?id=com.pickars.drivers&hl=en",
      },
    ],
  },
  {
    label: "Upcoming",
    title: "Could be you",
    description:
      "Got an app idea, a product to ship, or a team that needs a mobile engineer? Let's build something together.",
    status: "Open",
    apps: [],
  },
];
