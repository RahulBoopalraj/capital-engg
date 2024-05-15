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
                src="/assets/img/service/service-details1-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Landscaping</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we recognize the transformative power of well-designed and 
              sustainable landscapes in enhancing the overall appeal of any project. Our dedicated team of landscape 
              architects combines expertise with a commitment to crafting thoughtful and eco-conscious landscape designs 
              that seamlessly integrate hardscape and softscape elements.
              </p>
            </div>
            <h4>Our Approach:</h4>
            <p className="sec-text mb-35">
            We believe in creating landscapes that not only captivate the eye but also promote environmental sustainability. 
            Our designs prioritize green spaces that reduce carbon footprint and enrich the quality of life for communities.
            Working closely with our clients, we ensure that each design reflects their vision, while also considering the
            local environment and cultural context.
            </p>
            <h4>Comprehensive Services:</h4>
            <p className="sec-text mb-n1">
            From initial site planning to detailed design, irrigation engineering, and implementation of landscaping and 
            gardening works, our services cover every aspect of landscape design. We provide thorough drawing submittals 
            and precise plant specifications, ensuring that each element of the design contributes to the overall aesthetic 
            and functionality of the space.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/normal/video_2-2.png)",
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
            <h4>Innovation and Quality:</h4>
            <p className="sec-text mt-30 mb-40" >
            Employing the latest design tools and techniques, we strive to deliver innovative
             and functional landscapes that enhance the overall project experience. Our meticulous attention 
             to detail and commitment to quality guarantee landscapes that exceed expectations and stand 
             the test of time.
            </p>
            <h4>Our Services in Landscape Design Include:</h4>
            <ol>
            <li className="sec-text mb-40 mt-30">Site Planning</li>
            <li className="sec-text mb-40 mt-30">Design</li>
            <li className="sec-text mb-40 mt-30">Irrigation Engineering</li>
            <li className="sec-text mb-40 mt-30">Landscape & Gardening Works</li>
            <li className="sec-text mb-40 mt-30">Drawing Submittals</li>
            <li className="sec-text mb-40 mt-30">Plant Specifications</li>
           </ol>
            <p className="sec-text mb-40 mt-30">
            At Capital Engineering Consultancy, we are dedicated to delivering high-quality 
            landscape design services that not only enhance the beauty of projects but also contribute to the well-being of communities and the environment.
            </p>
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
