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
              <h3 className="sec-title">Privacy Policy</h3>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, a trading name of 
              Capital Engineering Consultancy Private Limited, we are 
              committed to protecting your privacy. This Privacy Policy 
              outlines how we collect, use, and safeguard your personal 
              information.
              </p>
            </div>
            <h4>1. Information Collection:</h4>
            <p className="sec-text mb-n1">
            We collect personal information from you when you voluntarily provide it to us, such as when you fill out a contact form or request information about our services. The types of personal information we may collect include your name, email address, phone number, and company name.
            </p>
            <h4 className="mt-35">2. Use of Information:</h4>
            <p className="sec-text mb-n1">
            We use the information we collect from you to respond to your inquiries, provide you with requested services, and communicate with you about our products and services. We may also use your information to improve our website and customize your experience.
            </p>
            <h4 className="mt-35">3. Information Sharing:</h4>
            <p className="sec-text mb-n1">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third parties who assist us in operating our website or conducting our business, as long as they agree to keep your information confidential.
            </p>
            <h4 className="mt-35">4. Data Security:</h4>
            <p className="sec-text mb-n1">
            We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <h4 className="mt-35">5. Cookies:</h4>
            <p className="sec-text mb-n1">
            We use cookies to enhance your browsing experience on our website. You have the option to disable cookies in your browser settings, but please note that some features of our website may not function properly if you do so.
            </p>
            <h4 className="mt-35">6. Third-Party Links:</h4>
            <p className="sec-text mb-n1">
            Our website may contain links to third-party websites. Please be aware that we are not responsible for the privacy practices or content of such websites. We encourage you to read the privacy policies of those websites before providing any personal information.
            </p>
            <h4 className="mt-35">7. Changes to Privacy Policy:</h4>
            <p className="sec-text mb-n1">
            We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page, and your continued use of our website after such changes constitutes your acceptance of the revised Privacy Policy.
            </p>
            <h4 className="mt-35">8. Contact Information:</h4>
            <p className="sec-text mb-n1">
            If you have any questions or concerns about our Privacy Policy, please contact us at info@capitalengg.com.
            <br/>
            By using our website, you consent to the terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
