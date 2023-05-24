import React, { useRef, useEffect } from "react";
import { CONFIGS } from "../../configs";

const Index = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Fire the callback when at least 50% of the video is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement); // Clean up the observer when component unmounts
    };
  }, []);

  return (
    <>
      <div
        className="position-relative overflow-hidden"
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark"
      >
        <div className="container-xl position-relative z-3">
          <div
            className="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-md-items-center text-center flex-column"
            data-build-in-stagger={100}
            margin="false"
          >
            <div className="col-12 py-3 mb-2">
              <div className="">
                <h2 className="color-fg-default mb-3 h3-mktg col-lg-8 mx-md-auto px-3">
                  The place for anyone from anywhere to&nbsp;build&nbsp;anything
                </h2>
                <p className="mb-3 f3-mktg color-fg-muted px-3 mx-auto col-7-max">
                  Whether you’re scaling your startup or just learning how to
                  code, GitHub is your home. Join the world’s largest developer
                  platform to build the innovations that empower humanity.
                  Let’s&nbsp;build from&nbsp;here.
                </p>
                <div className="d-flex flex-justify-center mt-6">
                  <div className="by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
                    <a
                      className="btn-mktg btn-large-mktg"
                      data-analytics-event='{"category":"Sign up for GitHub","action":"click to Sign up for GitHub","label":"ref_cta:Sign up for GitHub;"}'
                      href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=Home+campaign+footer&ref_page=%2F"
                    >
                      Sign up for GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="octicon arrow-symbol-mktg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        />
                        <path
                          className="octicon-chevrow-stem"
                          stroke="currentColor"
                          d="M1.75 8H11"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                    <a
                      className="btn-mktg btn-large-mktg btn-muted-mktg"
                      data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;"}'
                      href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"
                    >
                      Start a free enterprise trial
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="octicon arrow-symbol-mktg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        />
                        <path
                          className="octicon-chevrow-stem"
                          stroke="currentColor"
                          d="M1.75 8H11"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="video-custom position-relative z-2 user-select-none home-globe-scene js-webgl-globe-data">
          <div className="mx-auto width-full home-globe position-relative height-full js-webgl-globe">
            <div className="mask"></div>
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              controls={false}
              autoplay
              muted
              playsInline
              loop
            >
              <source src={CONFIGS.VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <picture>
          <source
            srcSet="assets/images/modules/site/home-campaign/footer-galaxy.jpg 801w,assets/images/modules/site/home-campaign/footer-galaxy.jpg?width=640 640w,assets/images/modules/site/home-campaign/footer-galaxy.jpg?width=480 480w,assets/images/modules/site/home-campaign/footer-galaxy.jpg?width=400 400w,assets/images/modules/site/home-campaign/footer-galaxy.jpg?width=320 320w,assets/images/modules/site/home-campaign/footer-galaxy.jpg?width=160 160w"
            sizes="100vw"
            type="image/jpeg"
          />
          <img
            className="position-absolute z-1 bottom-0 left-0 width-full height-full object-fit-cover d-block events-none"
            width={801}
            height={807}
            loading="lazy"
            decoding="async"
            alt=""
            aria-hidden="true"
            src="assets/images/modules/site/home-campaign/footer-galaxy.jpg"
          />
        </picture>
        <div className="astrocat col-lg-3 mx-auto d-flex flex-justify-center position-relative z-2">
          <img
            alt="Mona looking at the galaxy"
            width={801}
            height={807}
            className="home-astrocat d-block events-none user-select-none"
            src="assets/images/modules/site/home-campaign/astrocat.png"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
          className="position-absolute width-full z-1"
          style={{ bottom: "-1px" }}
        >
          <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#0D1117" />
        </svg>
      </div>
      <div
        className="container-xl p-responsive"
        data-dark-theme="dark"
        data-color-mode="dark"
      >
        <ul className="list-style-none col-lg-9 color-fg-muted f5 pt-8">
          <li>
            <sup id="footnote-1">1</sup> The Total Economic Impact™ Of GitHub
            Enterprise Cloud and Advanced Security, a commissioned study
            conducted by Forrester Consulting, 2022. Results are for a composite
            organization based on interviewed customers.
          </li>
          <li>
            <sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of
            open source software.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
