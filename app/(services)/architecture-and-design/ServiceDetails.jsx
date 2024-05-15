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
              <h2 className="sec-title">Architecture & Design</h2>
              <p className="sec-text mt-30">
              Welcome to Capital Engineering Consultancy, where we redefine architecture with purposeful, 
              elegant, and enduring designs that transcend time. As a premier consultancy in India, we have 
              established a legacy of excellence over the past decade, delivering exceptional results across a 
              diverse spectrum of projects – from inception to construction.
              </p>
            </div>
            <h3>Our Commitment:</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, integrity is the cornerstone of our philosophy. 
            This unwavering commitment fuels our drive to consistently surpass client expectations. 
            With a relentless pursuit of innovation, our team merges bold creativity with meticulous 
            precision to craft architectural marvels that inspire awe.
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
            <h3>Crafting Distinctive Environments:</h3>
            <p className="sec-text mt-n1 mb-40">
            For us, architecture is more than just creating buildings; it's about shaping environments 
            that resonate with creativity and functionality. Our designs seamlessly integrate with their 
            surroundings, leaving an indelible mark on the landscape.
            </p>
            <h3>Unparalleled Expertise:</h3>
            <p className="sec-text mt-30">
            Our comprehensive scope of services encompasses every stage of the architectural journey, 
            from conceptualization to project management. With a keen eye for detail and a passion for excellence, we offer:
            </p>
            <ol>
            <li className="sec-text mb-40 mt-30">Conceptual Design Development</li>
            <li className="sec-text mb-40 mt-30">Detail Design Development</li>
            <li className="sec-text mb-40 mt-30">Construction Document Preparation</li>
            <li className="sec-text mb-40 mt-30">As-Built Drawings</li>
            <li className="sec-text mb-40 mt-30">Feasibility Studies</li>
            <li className="sec-text mb-40 mt-30">Bidding and Negotiation</li>
            <li className="sec-text mb-40 mt-30">Construction and Contract Administration</li>
            <li className="sec-text mb-40 mt-30">Architect of Record</li>
            <li className="sec-text mb-40 mt-30">Project Management</li>
           </ol>
            <p className="sec-text mb-40 mt-30">
            Experience the transformative power of architectural excellence with Capital Engineering Consultancy. Contact us today to explore how 
            we can bring your vision to life and leave a legacy that endures for generations to come.
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
