import type { Discipline } from "../lib/disciplines";
import pickars from "../assets/images/pickars.webp";
import skypay from "../assets/images/skypay.webp";
import kokohor from "../assets/images/kokohor.webp";
import yare from "../assets/images/yare.webp";
import oneCommunity from "../assets/images/one-community.webp";
import colsphere from "../assets/images/colsphere.webp";

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
    description: "Cooperative management for financial transparency.",
    link: "#",
    tag: "Management",
    discipline: "web",
    image: kokohor,
  },
  {
    title: "Yare",
    company: "Yare Learning Hub",
    description: "Democratizing access to high-impact learning.",
    link: "#",
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
    title: "Colsphere",
    company: "Colsphere",
    description: "Collaborative ecosystem for team interaction.",
    link: "#",
    tag: "SaaS",
    discipline: "mobile",
    image: colsphere,
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
    label: "Live product",
    title: "Colsphere",
    description: "A clean, focused mobile experience designed for seamless everyday use.",
    status: "Live",
    apps: [{ android: "https://play.google.com/store/apps/details?id=com.colz.app" }],
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
