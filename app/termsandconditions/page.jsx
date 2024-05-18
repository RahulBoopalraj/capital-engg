import MarqueeComponent from "./MarqueeComponent";
import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import Breadcumb2 from "./Breadcumb2";

import ProjectDetails from "./ProjectDetails";
import { allPortfolio } from "@/data/portfolio";
export const metadata = {
  title:
    "Project Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header3 />
      <Breadcumb2 />
      <ProjectDetails portfolioId={params.id} />
      <MarqueeComponent />
      <Footer1 />
    </>
  );
}
