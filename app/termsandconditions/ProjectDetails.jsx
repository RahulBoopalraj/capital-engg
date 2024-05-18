"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function ProjectDetails({ portfolioId }) {
  const portfolioItem =
    allPortfolio.filter((elm) => elm.id == portfolioId)[0] || allPortfolio[1];
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),

    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <div className="project-details-page-area space">
      <div className="container">
        {/* <Slider className="row global-carousel default" {...slideroptions}>
          {itemsImages.map((elm, i) => (
            <div key={i} className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={elm}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </Slider> */}

        <div className="row justify-content-center flex-row-reverse">
         {/*  <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Category:</span>Development
                </li>
                <li>
                  <span>Software:</span>WordPress, Figma
                </li>
                <li>
                  <span>Service:</span>Development
                </li>
                <li>
                  <span>Client:</span>Eunice Mills
                </li>
                <li>
                  <span>Date:</span>October 6, 2023
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h3 className="sec-title">Terms and Conditions</h3>
              <p className="sec-text mt-30">
              Welcome to Capital Engineering Consultancy, a trading name of Capital Engineering 
              Consultancy Private Limited, a leading provider of innovative 
              engineering solutions. These Terms & Conditions govern your use 
              of our website and services. By accessing or using our website, you 
              agree to abide by these terms. If you do not agree with any part of 
              these terms, please refrain from using our website.
              </p>
            </div>
            <h4>1. Acceptance of Terms:</h4>
            <p className="sec-text mb-n1">
            By accessing or using our website, you agree to be bound by 
            these Terms & Conditions, which constitute a legally binding 
            agreement between you and Capital Engineering Consultancy.
            </p>
            <h4 className="mt-35">2. Use of Website:</h4>
            <p className="sec-text mb-n1">
            You may use our website for lawful purposes only. You agree 
            not to engage in any activity that violates applicable laws 
            or infringes upon the rights of others.
            </p>
            <h4 className="mt-35">3. Intellectual Property:</h4>
            <p className="sec-text mb-n1">
            All content on this website, including but not limited to 
            text, graphics, logos, images, and software, is the property 
            of Capital Engineering Consultancy, a trading name of Capital 
            Engineering Consultancy Private Limited, and is protected by 
            intellectual property laws. "Capital Engineering" is a 
            registered trademark, and "Capital Engineering Consultancy" 
            is a trademark of Capital Engineering Consultancy Private 
            Limited.
            </p>
            <h4 className="mt-35">4. Limitation of Liability:</h4>
            <p className="sec-text mb-n1">
            Capital Engineering Consultancy shall not be liable for any 
            direct, indirect, incidental, consequential, or punitive 
            damages arising out of your use of our website or services.
            </p>
            <h4 className="mt-35">5. Third-Party Links:</h4>
            <p className="sec-text mb-n1">
            Our website may contain links to third-party websites. 
            Capital Engineering Consultancy, a trading name of Capital 
            Engineering Consultancy Private Limited, is not responsible 
            for the content or practices of any linked websites.
            </p>
            <h4 className="mt-35">6. Modifications to Terms:</h4>
            <p className="sec-text mb-n1">
            Capital Engineering Consultancy reserves the right to modify 
            or update these Terms & Conditions at any time without prior 
            notice. It is your responsibility to review these terms 
            periodically for changes.
            </p>
            <h4 className="mt-35">7. Governing Law:</h4>
            <p className="sec-text mb-n1">
            These Terms & Conditions shall be governed by and construed 
            in accordance with the laws of India. Any disputes arising 
            under these terms shall be subject to the exclusive 
            jurisdiction of the courts in India.
            </p>
            <h4 className="mt-35">8. Contact Information:</h4>
            <p className="sec-text mb-n1">
            If you have any questions or concerns about these Terms & 
            Conditions, please contact us at info@capitalengg.com.
            <br/>
            By using our website, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
