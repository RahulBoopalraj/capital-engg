"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];
  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src="/services/environmentalsolutions.jpg"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Environmental Solutions</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we pride ourselves on being a leading provider of environmental, health, 
              and safety advisory and consulting services in the Middle East & Asia Pacific.  With a professional approach and a 
              commitment to excellence, we cater to clients in both the public and private sectors, 
              offering a comprehensive suite of services that address environmental challenges and promote sustainability.
              </p>
              <p className="sec-text mt-30">
              Our multidisciplinary team brings together extensive international experience and local knowledge, providing a unique blend of regulatory expertise and high-quality service. 
              As an EAD registered Class ‘A’ Environmental consultant in Abu Dhabi, we are dedicated to delivering exceptional results to our clients.
              </p>
            </div>
            <h4>Our Services Include:</h4>
            <ol>
            <li className="sec-text mb-12 mt-12">Environmental and Social Impact Assessments</li>
            <li className="sec-text mb-12 mt-12">Environmental Management Plans</li>
            <li className="sec-text mb-12 mt-12">Environmental Monitoring of Works</li>
            <li className="sec-text mb-12 mt-12">Environmental Audits</li>
            <li className="sec-text mb-12 mt-12">Waste Management Consultancy</li>
            <li className="sec-text mb-12 mt-12">Training and Environmental Education</li>
            <li className="sec-text mb-12 mt-12">Risk and Hazard Assessments</li>
            <li className="sec-text mb-12 mt-12">Environmental Due Diligence Consultancy</li>
           </ol>
           <p className="sec-text mb-40 mt-30">
            At Capital Engineering Consultancy, we are committed to delivering innovative 
            and sustainable solutions that meet the needs of our clients while promoting 
            environmental sustainability. With our expertise, experience, and dedication 
            to quality, we are your trusted partner for all environmental, health, and safety 
            advisory and consulting needs.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/services/envsolution1.jpg)",
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
           
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Custom Solution
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-6.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      In-time Result
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
