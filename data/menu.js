import { links } from "./footerlink";

export const menuItems = [
  {
    id: 1,
    title: "HOME",
    isActive: true,
    link: "/"
  },
  {
    id: 2,
    title: "SERVICES",
    subMenuItems: [
      { id: 21, label: "Architecture & Design", link: "/architecture-and-design" },
      { id: 21, label: "MEP Design", link: "/mep-design" },
      { id: 21, label: "Structural Engineering", link: "/structural-engineering" },
      { id: 21, label: "Project Management Consultancy", link: "/project-management-consultancy" },
      { id: 21, label: "Environmental Solutions", link: "/environmental-solutions" },
      { id: 21, label: "Landscaping", link: "/landscaping" },
      { id: 21, label: "Fit Out & Interior Design", link: "/fitout-and-interiordesign" },
    ],
  },
  {
    id: 3,
    title: "PORTFOLIO",
    link: "/portfolio"
  },
  {
    id: 4,
    title: "ABOUT",
    link: "/about"
    // subMenuItems: [
    //   { id: 41, label: "Blog Standard", link: "/blog" },
    //   { id: 42, label: "Blog 2 Column", link: "/blog-2" },
    //   { id: 43, label: "Blog Details", link: "/blog-details/2" },
    // ],
  },
  {
    id: 5,
    title: "CONTACT",
    link: "/contact",
  },
];
