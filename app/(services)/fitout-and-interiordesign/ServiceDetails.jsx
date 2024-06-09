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
                src="/services/interior.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Fit Out & Interior Design</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, our Interior Design Team comprises a talented 
              ensemble of professionals dedicated to delivering exceptional design solutions for 
              a diverse array of residential, commercial, and hospitality projects. With a 
              remarkable track record of 1361 permits, our team is driven to craft visually 
              striking designs that seamlessly blend functionality, comfort, and customization 
              to meet the individual needs of each client.
              </p>
              <p className="sec-text mt-30">
              We firmly believe that outstanding design transcends mere aesthetics; 
              it encompasses functionality and sustainability. Leveraging cutting-edge 
              technology and staying abreast of the latest design trends, our team creates 
              spaces that are not only aesthetically pleasing but also practical, efficient, 
              and environmentally conscious. We prioritize the use of premium materials and
              finishes to enhance both the visual appeal and longevity of the space.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/services/interior1.jpg)",
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
            <h4>Our Scope of Work for Fit Out and Interior Design Includes:</h4>
           <ol>
            <li className="sec-text mb-12 mt-12">Concept Design – Mood board creation and concept sketches.</li>
            <li className="sec-text mb-12 mt-12">Detail Design – Preparation of detailed drawings and 3D views.</li>
            <li className="sec-text mb-12 mt-12">Material and Finish Review – Evaluation of samples, submittals, and shop drawings.</li>
            <li className="sec-text mb-12 mt-12">Value Engineering.</li>
            <li className="sec-text mb-12 mt-12">MEP Services.</li>
            <li className="sec-text mb-12 mt-12">Tender Document Preparation.</li>
            <li className="sec-text mb-12 mt-12">Construction Stage – Supervision and preparation of Snag List.</li>
           </ol>
            <p className="sec-text mb-40 mt-30">
            Recognizing that every project is unique, our team adopts a collaborative approach, closely engaging with clients to 
            grasp their specific needs and preferences. We offer end-to-end solutions tailored to meet the demands of each project.
            </p>
            <p className="sec-text mb-30 ">
            Our unwavering commitment to excellence is underscored by our ability to secure approvals from 
            authorities and provide competent supervision, ensuring the successful realization of our clients' visions.
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
