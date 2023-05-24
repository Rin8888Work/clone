import { CONFIGS } from "../../configs";

const Introduce = () => {
  return (
    <div
      className="overflow-hidden"
      data-color-mode="dark"
      data-light-theme="light"
      data-dark-theme="dark"
    >
      <div className="container-xl position-relative">
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/png"
            srcSet="assets/images/stars.png 1x, assets/images/stars.png 2x"
          />
          <source
            media="(min-width: 1280px)"
            type="image/png"
            srcSet="assets/images/stars.png 1x, assets/images/stars.png 2x"
          />
          <img
            alt=""
            aria-hidden="true"
            width={4377}
            className="position-absolute events-none"
            style={{
              right: "-300px",
              maxWidth: "calc(20vw + 1670px)",
              top: "0",
            }}
            src="assets/images/stars.png"
          />
        </picture>
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/png"
            srcSet="assets/images/earth.png 1x, assets/images/earth.png 2x"
          />
          <source
            media="(min-width: 1280px)"
            type="image/png"
            srcSet="assets/images/earth.png 1x, assets/images/earth.png 2x"
          />
          <img
            alt=""
            aria-hidden="true"
            width={4377}
            className="position-absolute events-none"
            style={{
              right: "40px",
              maxWidth: "calc(5vw + 1670px)",
              top: "-30px",
            }}
            src="assets/images/earth.png"
          />
        </picture>
      </div>
      <div className="px-3 home-campaign-hero">
        <div
          className="position-relative pt-3 pt-md-8 pt-lg-12 container-xl js-build-in-trigger"
          data-hpc=""
        >
          {/* <img
            src="assets/images/hero-drone.webp"
            alt=""
            className="home-drone position-absolute top-12 right-0 events-none col-3 height-auto js-build-in-item"
            width={500}
            height={326}
          /> */}
          <div className="d-flex">
            <div className="col-1 d-flex flex-column events-none position-relative">
              <img
                alt=""
                aria-hidden="true"
                className="home-campaign-lines-hero position-relative"
                width={437}
                height={637}
                src="assets/images/lines-hero.svg"
              />
              <div className="mx-auto my-3 home-campaign-glowing-icon">
                <div className="position-relative d-inline-block z-1">
                  <svg
                    aria-hidden="true"
                    height={24}
                    viewBox="0 0 24 24"
                    version="1.1"
                    width={24}
                    data-view-component="true"
                    className="octicon octicon-code"
                  >
                    <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z" />
                  </svg>
                  <span
                    className="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                    style={{
                      backgroundColor: "var(--mktg-accent-primary)",
                      filter: "blur(17px)",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
                }}
                className="home-campaign-git-line height-full rounded mx-auto"
              />
            </div>
            <div className="col-11 text-left pt-12 mt-12 pl-2 pl-sm-0">
              <div className="position-relative top-md-8 z-1">
                <a
                  className="eyebrow-banner d-inline-block no-underline color-fg-on-emphasis f5-mktg mb-4 border position-relative z-1 arrow-target-mktg text-left"
                  data-analytics-event='{"category":"Eyebrow Banner","action":"click","label":"ref_cta:Introducing GitHub Copilot X;ref_loc:hero;"}'
                  href="/features/preview/copilot-x"
                >
                  <div className="d-flex flex-items-center">
                    <picture>
                      <source
                        srcSet="assets/images/eyebrow-banner-icon-copilot-x.svg 44w,assets/images/eyebrow-banner-icon-copilot-x.svg 35w,assets/images/eyebrow-banner-icon-copilot-x.svg?width=26 26w,assets/images/eyebrow-banner-icon-copilot-x.svg 22w,assets/images/eyebrow-banner-icon-copilot-x.svg 17w,assets/images/eyebrow-banner-icon-copilot-x.svg 8w"
                        sizes="44px"
                        type="image/svg"
                      />
                      <img
                        className="eyebrow-banner-icon d-block width-auto flex-grow-0 flex-shrink-0 mr-3"
                        width={44}
                        height={44}
                        loading="lazy"
                        decoding="async"
                        alt=""
                        aria-hidden="true"
                        src="assets/images/eyebrow-banner-icon-copilot-x.svg"
                      />
                    </picture>
                    <div className="pr-3 mr-md-1 pl-md-1">
                      <div className="text-semibold lh-condensed">
                        Introducing GitHub Copilot X
                      </div>
                      <div
                        className="color-fg-subtle lh-condensed"
                        data-test-selector="subtitle"
                      >
                        Your AI pair programmer is leveling up
                      </div>
                    </div>
                    <div className="ml-auto">
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
                    </div>
                  </div>
                </a>
              </div>
              <h1 className="h0-mktg mt-sm-6 mt-md-11 mt-lg-9 mb-2 mb-sm-4 position-relative z-2">
                Let’s build from&nbsp;here
              </h1>
              <p className="f1-mktg col-11 col-lg-10 text-normal color-fg-muted mr-lg-n4 mb-3 mb-md-4 mb-md-7 position-relative z-1">
                Harnessed for productivity. Designed for collaboration.
                Celebrated for built-in security. Welcome to the platform
                developers&nbsp;love.
              </p>
              <div className="d-flex flex-column flex-md-row">
                {/* '"` */}
                {/* </textarea></xmp> */}
                <form
                  data-turbo="false"
                  className="mx-0 col-12 col-md-5 js-signup-form position-relative z-2"
                  autoComplete="off"
                  action="/signup"
                  acceptCharset="UTF-8"
                  method="get"
                >
                  {" "}
                  <div className="d-flex flex-column flex-md-row flex-items-center">
                    <dl className="col-12 my-0 mb-3 mb-md-0 flex-auto">
                      <dt>
                        <label htmlFor="user_email" className="sr-only">
                          Email address
                        </label>
                      </dt>
                      <dd>
                        <input
                          data-color-mode="light"
                          data-light-theme="light"
                          data-dark-theme="dark"
                          className="form-control f4-mktg width-full rounded-md-right-0"
                          style={{ height: "3rem" }}
                          placeholder="Email address"
                          type="email"
                          name="user_email"
                          id="user_email"
                          autoComplete="off"
                          spellCheck="false"
                        />
                      </dd>
                    </dl>
                    <input
                      type="hidden"
                      name="source"
                      defaultValue="form-home-signup"
                    />
                    <button
                      className="btn-mktg width-full width-md-auto mb-3 mb-md-0 rounded-md-left-0 home-campaign-signup-button btn-signup-mktg"
                      data-analytics-event='{"category":"Home campaign","action":"click to Sign up for GitHub","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:hero"}'
                      type="submit"
                    >
                      Sign up for GitHub
                    </button>
                  </div>
                </form>
                <div className="border-top border-md-left mx-md-3 mb-3 mb-md-0" />
                <a
                  className="btn-mktg home-campaign-enterprise btn-muted-mktg"
                  data-analytics-event='{"category":"Start a free enterprise trial","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;"}'
                  href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F"
                  data-test-selector="start-trial-button"
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
              <div className="my-10 my-md-12 build-in-animate col-12">
                <p className="d-block color-fg-subtle f4-mktg">
                  Trusted by the world’s leading&nbsp;organizations&nbsp;↘︎
                </p>
                <div className="d-flex flex-wrap flex-justify-around flex-md-justify-between flex-items-center col-12 col-lg-11">
                  <img
                    src="assets/images/stripe.svg"
                    alt="Stripe logo"
                    height={44}
                    className="my-3"
                  />
                  <img
                    src="assets/images/pinterest.svg"
                    alt="Pinterest logo"
                    height={44}
                    className="my-3"
                  />
                  <div className="col-12 d-sm-none" />
                  <img
                    src="assets/images/kpmg.svg"
                    alt="KPMG logo"
                    height={44}
                    className="my-3"
                  />
                  <div className="col-12 d-none d-sm-block d-md-none" />
                  <img
                    src="assets/images/mercedes.svg"
                    alt="Mercedes-Benz logo"
                    height={44}
                    className="my-3"
                  />
                  <div className="col-12 d-sm-none" />
                  <img
                    src="assets/images/pg.svg"
                    alt="P&G logo"
                    height={32}
                    className="my-3"
                  />
                  <img
                    src="assets/images/telus.svg"
                    alt="Telus logo"
                    height={32}
                    className="my-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute">
        <div className="sub-nav-mktg js-toggler-container z-4 js-sticky js-position-sticky top-0 width-full init-hidden scrollnav">
          <div className="sub-nav-mktg-wrapper d-flex flex-items-center py-3 p-responsive container-xl">
            <button
              type="button"
              className="btn-octicon sub-nav-mktg-toggle d-lg-none p-1 flex-order-1 float-right js-toggler-target mr-n1"
              aria-label="Toggle page navigation"
            >
              <svg
                aria-hidden="true"
                height={24}
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                data-view-component="true"
                className="octicon octicon-chevron-down on-hidden"
              >
                <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z" />
              </svg>
              <svg
                aria-hidden="true"
                height={24}
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                data-view-component="true"
                className="octicon octicon-x on-visible"
              >
                <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </button>
            <div className="sub-nav-mktg-links flex-auto f4-mktg d-flex flex-column flex-lg-row gap-4">
              <a
                className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item js-smoothscroll-anchor"
                data-analytics-event='{"category":"Homepage","action":"click item to scroll to Productivity","label":"ref_cta:Productivity;"}'
                href="#productivity"
              >
                Productivity
              </a>
              <a
                className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item js-smoothscroll-anchor"
                data-analytics-event='{"category":"Homepage","action":"click item to scroll to Collaboration","label":"ref_cta:Collaboration;"}'
                href="#collaboration"
              >
                Collaboration
              </a>
              <a
                className="sub-nav-mktg-link Link--primary no-underline py-1 py-lg-2 js-scrollnav-item js-smoothscroll-anchor"
                data-analytics-event='{"category":"Homepage","action":"click item to scroll to Security","label":"ref_cta:Security;"}'
                href="#security"
              >
                Security
              </a>
            </div>
            <div className="sub-nav-mktg-ctas ml-lg-3">
              <a
                className="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block btn-muted-mktg"
                data-analytics-event='{"category":"Homepage","action":"click to Start a free enterprise trial","label":"ref_cta:Start a free enterprise trial;ref_loc:Homepage;"}'
                href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=homepage+sticky+nav&ref_page=%2F"
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
              <a
                className="btn-mktg ml-lg-2 mt-2 mt-lg-0 d-block d-lg-inline-block"
                data-analytics-event='{"category":"Homepage","action":"click to Sign up for GitHub","label":"ref_cta:Sign up for GitHub;ref_loc:Homepage;"}'
                href="/join?ref_cta=Sign+up+for+GitHub&ref_loc=homepage+sticky+nav&ref_page=%2F&source=homepage-sticky-nav"
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
            </div>
          </div>
        </div>
      </div>
      <div
        className="home-campaign-productivity js-section overflow-hidden px-3 pb-8 pt-5"
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark"
        id="productivity"
      >
        <div className="container-xl">
          <div
            className="d-flex js-build-in-trigger"
            data-build-in-stagger={100}
          >
            <div className="col-1 d-flex flex-column flex-items-center">
              <div className="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade">
                <svg
                  aria-hidden="true"
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  width={24}
                  data-view-component="true"
                  className="octicon octicon-briefcase"
                >
                  <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z" />
                </svg>
                <span
                  className="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow z-n1"
                  style={{
                    backgroundColor: "var(--mktg-accent-primary)",
                    filter: "blur(18px)",
                  }}
                />
              </div>
              <div
                className="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
                style={{
                  background:
                    "linear-gradient(#56d364, #2ea043, var(--color-canvas-default))",
                }}
                data-build-delay={500}
              />
            </div>
            <div className="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
              <h2 className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left">
                Productivity
              </h2>
              <h3 className="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left">
                <span className="text-accent-primary">
                  Accelerate high-quality software development.
                </span>
                Our AI-powered platform drives innovation with tools that boost
                developer velocity.
              </h3>
            </div>
          </div>
          <div className="rounded-3 border box-shadow-active-border-inverse-mktg color-bg-subtle overflow-hidden position-relative">
            <div className="d-flex flex-items-center flex-justify-between border-bottom p-3">
              <div className="d-none d-md-block">
                <svg
                  aria-hidden="true"
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  width={24}
                  data-view-component="true"
                  className="octicon octicon-chevron-left color-fg-muted"
                >
                  <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z" />
                </svg>
                <svg
                  aria-hidden="true"
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  width={24}
                  data-view-component="true"
                  className="octicon octicon-chevron-right color-fg-muted"
                >
                  <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
                </svg>
              </div>
              <div className="d-flex flex-items-center flex-justify-between border px-2 py-1 rounded color-bg-default width-full width-md-auto">
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                  className="octicon octicon-lock color-fg-subtle"
                >
                  <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z" />
                </svg>
                <div className="px-2 px-md-8 text-truncate">
                  mona-github-github-g59jpq2w5w7.github.dev
                </div>
                <svg
                  aria-hidden="true"
                  height={16}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={16}
                  data-view-component="true"
                  className="octicon octicon-sync color-fg-subtle"
                >
                  <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z" />
                </svg>
              </div>
              <div className="d-none d-md-block">
                <svg
                  aria-hidden="true"
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  width={24}
                  data-view-component="true"
                  className="octicon octicon-plus color-fg-muted"
                >
                  <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z" />
                </svg>
              </div>
            </div>
            <div className="d-flex flex-items-stretch">
              <div className="d-none d-lg-block p-4 border-right">
                <svg
                  aria-hidden="true"
                  height={24}
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={24}
                  data-view-component="true"
                  className="octicon octicon-three-bars color-fg-muted"
                >
                  <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                </svg>
              </div>
              <div className="col-md-6 min-width-0">
                <div className="border-bottom">
                  <ul className="list-style-none d-flex px-3 pt-3">
                    <li className="px-3 py-2 color-bg-default rounded-top-2">
                      index.html
                    </li>
                    <li className="px-3 py-2 color-fg-muted">script.js</li>
                    <li className="px-3 py-2 color-fg-muted">package.json</li>
                  </ul>
                  <div className="color-bg-default p-4 f4 text-mono">
                    <div className="d-flex ">
                      <div
                        className="color-fg-subtle text-right user-select-none"
                        style={{}}
                      >
                        <div className="pr-2">1</div>
                        <div className="pr-2">2</div>
                        <div className="pr-2">3</div>
                        <div className="pr-2">4</div>
                        <div className="pr-2">5</div>
                        <div className="pr-2">6</div>
                        <div className="pr-2">7</div>
                        <div className="pr-2">8</div>
                        <div className="pr-2">9</div>
                        <div className="pr-2">10</div>
                        <div className="pr-2">11</div>
                        <div className="pr-2">12</div>
                      </div>
                      <div className="flex-1 overflow-x-auto" tabIndex={0}>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            &lt;<span className="pl-ent">div</span>{" "}
                            <span className="pl-e">class</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              position-absolute width-full color-bg-default
                              <span className="pl-pds">"</span>
                            </span>{" "}
                            <span className="pl-e">style</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              <span className="pl-s1">
                                <span className="pl-c1">
                                  <span className="pl-c1">bottom</span>
                                </span>
                                :{" "}
                                <span className="pl-c1">
                                  -4<span className="pl-k">rem</span>
                                </span>
                                ;
                              </span>
                              <span className="pl-pds">"</span>
                            </span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"  "}&lt;
                            <span className="pl-ent">div</span>{" "}
                            <span className="pl-e">class</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              container-xl p-responsive
                              <span className="pl-pds">"</span>
                            </span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"    "}&lt;
                            <span className="pl-ent">div</span>{" "}
                            <span className="pl-e">class</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>d-flex
                              flex-justify-center flex-lg-justify-end
                              color-bg-default
                              <span className="pl-pds">"</span>
                            </span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"      "}&lt;
                            <span className="pl-ent">div</span>{" "}
                            <span className="pl-e">class</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>col-8 col-sm-7
                              col-md-6 col-lg-5 position-relative z-2
                              right-lg-n12 events-none
                              <span className="pl-pds">"</span>
                            </span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"        "}&lt;
                            <span className="pl-ent">picture</span>&gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"          "}&lt;
                            <span className="pl-ent">source</span>{" "}
                            <span className="pl-e">srcset</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              astro-mona.webp
                              <span className="pl-pds">"</span>
                            </span>{" "}
                            <span className="pl-e">type</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              image/webp
                              <span className="pl-pds">"</span>
                            </span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"          "}&lt;
                            <span className="pl-ent">img</span>{" "}
                            <span className="pl-e">src</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              astro-mona.svg
                              <span className="pl-pds">"</span>
                            </span>{" "}
                            <span className="pl-e">width</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>960
                              <span className="pl-pds">"</span>
                            </span>{" "}
                            <span className="pl-e">height</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>967
                              <span className="pl-pds">"</span>
                            </span>{" "}
                            <span className="pl-e">class</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>
                              home-astro-mona width-full position-absolute
                              bottom-0 height-auto
                              <span className="pl-pds">"</span>
                            </span>{" "}
                            <span className="pl-e">alt</span>=
                            <span className="pl-s">
                              <span className="pl-pds">"</span>Mona looking at
                              GitHub activity across the globe
                              <span className="pl-pds">"</span>
                            </span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"        "}&lt;/
                            <span className="pl-ent">picture</span>&gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"      "}&lt;/
                            <span className="pl-ent">div</span>&gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"    "}&lt;/
                            <span className="pl-ent">div</span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            {"  "}&lt;/
                            <span className="pl-ent">div</span>
                            &gt;
                          </span>
                        </pre>
                        <pre className="f4">
                          <span className="code-editor-line-mktg d-inline-block js-type-letters">
                            &lt;/<span className="pl-ent">div</span>&gt;
                          </span>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <ul className="list-style-none d-flex mb-3">
                    <li className="pr-3">Terminal</li>
                    <li className="pr-3 color-fg-muted">Output</li>
                    <li className="pr-3 color-fg-muted">Problems</li>
                    <li className="pr-3 color-fg-muted">Debug Console</li>
                  </ul>
                  <div
                    className="overflow-hidden f5 text-mono color-fg-muted js-type-in-trigger"
                    data-type-row-delay={50}
                  >
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:36</span>]
                      <span>Starting</span>'
                      <span className="color-fg-accent">
                        watch-extension:vscode-api-tests
                      </span>
                      ' ...
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:36</span>]
                      <span>Finished</span>'
                      <span className="color-fg-accent">
                        clean-extension:typescript-language-features
                      </span>
                      ' after
                      <span className="color-fg-done">248 ms</span>
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:36</span>]
                      <span>Starting</span>'
                      <span className="color-fg-accent">
                        watch-extension:typescript-language-features
                      </span>
                      ' ...
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:36</span>]
                      <span>Finished</span>'
                      <span className="color-fg-accent">
                        clean-extension:php-language-features
                      </span>
                      ' after
                      <span className="color-fg-done">384 ms</span>
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:36</span>]
                      <span>Starting</span>'
                      <span className="color-fg-accent">
                        watch-extension:php-language-features
                      </span>
                      ' ...
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:40</span>]
                      <span>Finished</span>'
                      <span className="color-fg-accent">
                        clean-extension:html-language-features-server
                      </span>
                      ' after
                      <span className="color-fg-done">4.66 s</span>
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:40</span>]
                      <span>Starting</span>'
                      <span className="color-fg-accent">
                        watch-extension:html-language-features-server
                      </span>
                      ' ...
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:43</span>]
                      <span>Finished</span>'
                      <span className="color-fg-accent">clean-client</span>'
                      after
                      <span className="color-fg-done">7.33 s</span>
                    </div>
                    <div className="no-wrap js-type-row">
                      [<span className="color-fg-subtle">09:43:43</span>]
                      <span>Starting</span>'
                      <span className="color-fg-accent">watch-client</span>' ...
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-md-block border-left">
                <div className="d-flex flex-items-center flex-justify-between px-3 pt-3 pb-2">
                  <div>
                    <svg
                      aria-hidden="true"
                      height={16}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      data-view-component="true"
                      className="octicon octicon-three-bars"
                    >
                      <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      aria-hidden="true"
                      height={24}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={24}
                      data-view-component="true"
                      className="octicon octicon-mark-github"
                    >
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      aria-hidden="true"
                      height={16}
                      viewBox="0 0 16 16"
                      version="1.1"
                      width={16}
                      data-view-component="true"
                      className="octicon octicon-bell"
                    >
                      <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z" />
                    </svg>
                  </div>
                </div>
                <div
                  className="height-full d-flex flex-items-center flex-justify-between px-6 js-build-in-trigger"
                  style={{ background: "#040D21" }}
                >
                  <picture>
                    <source
                      srcSet="assets/images/globe.jpg 1238w,assets/images/globe.jpg 990w,assets/images/globe.jpg 742w,assets/images/globe.jpg 619w,assets/images/globe.jpg 495w,assets/images/globe.jpg 247w"
                      sizes="(max-width: 600px) 90vw, 595px"
                      type="image/jpeg"
                    />
                    <img
                      className="width-full height-auto d-block js-build-in-item build-in-scale-up"
                      width={1238}
                      height={1404}
                      loading="lazy"
                      decoding="async"
                      alt="Planet earth with visualization of GitHub activity crossing the globe"
                      src="assets/images/globe.jpg"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex js-build-in-trigger position-relative"
            data-build-in-stagger={100}
          >
            <img
              alt=""
              aria-hidden="true"
              width={2712}
              height={2712}
              className="position-absolute top-0 right-0 height-auto col-11 events-none"
              loading="lazy"
              decoding="async"
              src="assets/images/bg-stars-1.webp"
            />
            <div className="col-1 d-flex flex-column flex-items-center position-relative">
              <div
                className="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
                style={{
                  transitionDuration: "900ms",
                  background:
                    "linear-gradient(var(--color-canvas-default), #2ea043, #2ea043, var(--color-canvas-default))",
                }}
              />
              <img
                alt=""
                aria-hidden="true"
                width={81}
                height={485}
                style={{
                  left: "calc(50% - 2px)",
                  height: "auto",
                  maxWidth: "9vw",
                }}
                className="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
                loading="lazy"
                decoding="async"
                src="assets/images/git-branch-productivity.svg"
              />
            </div>
            <div className="col-11 ml-2 ml-md-6">
              <div
                className="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7"
                data-build-in-stagger={100}
              >
                <div className="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right">
                  <div className="pr-md-4">
                    <h2 className="color-fg-default mb-3 f2-mktg color-fg-muted">
                      <em>GitHub Codespaces</em> offers a complete dev
                      environment in seconds, so you can code, build, test, and
                      open pull requests from any repo anywhere.
                    </h2>
                    <a
                      className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                      href="/features/codespaces"
                      data-analytics-event='{"category":"Check out GitHub Codespaces","action":"click to Check out GitHub Codespaces","label":"ref_cta:Check out GitHub Codespaces;"}'
                    >
                      Check out GitHub Codespaces{" "}
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
                <div className="col-12 py-3 col-md-6 col-lg-6">
                  <div className="position-relative">
                    <div className="d-flex flex-column position-relative">
                      <div
                        className="js-build-in-item build-in-slideX-left box-shadow-card-dark-mktg overflow-hidden rounded-2 position-relative z-2 flex-self-end"
                        style={{
                          maxWidth: 300,
                          marginTop: "-30%",
                          marginRight: "10%",
                        }}
                      >
                        <img
                          src="assets/images/modules/site/codespaces/illo-context-menu.png"
                          alt=""
                          width={600}
                          height={524}
                          loading="lazy"
                          decoding="async"
                          className="width-full d-block height-auto"
                        />
                        <img
                          src="assets/images/modules/site/codespaces/illo-cursor.png"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="position-absolute js-build-in-item build-in-slideX-left height-auto"
                          width={60}
                          height={96}
                          style={{
                            right: "20%",
                            bottom: "23%",
                            width: 30,
                          }}
                        />
                      </div>
                      <div
                        className="js-build-in-item build-in-slideX-right box-shadow-card-dark-mktg overflow-hidden rounded-2 position-relative z-1 d-none d-sm-block"
                        style={{ maxWidth: 373, marginTop: "-20%" }}
                      >
                        <img
                          src="assets/images/modules/site/codespaces/illo-ports.png"
                          loading="lazy"
                          width={746}
                          height={368}
                          alt=""
                          decoding="async"
                          className="width-full d-block height-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 mb-md-12 pb-3 js-build-in-trigger">
                <div className="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-left">
                  <div
                    className="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                    style={{ top: "-1px" }}
                  >
                    <span className="text-gradient-mktg text-semibold">
                      Did you know?
                    </span>
                  </div>
                  <h3 className="text-accent-primary mb-2 mt-3 h2-mktg text-medium">
                    22% increase
                  </h3>
                  <p className="mb-3 f3-mktg text-medium col-6-max">
                    in developer productivity
                    <br />
                    after three years with GitHub<sup>1</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative z-1">
            <card-skew
              style={{ overflow: "hidden" }}
              class="overflow-hidden rounded-3 mb-3 mb-md-5"
            >
              <div
                className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
                data-target="card-skew.bounding"
              >
                <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                  <p className="f2-mktg text-medium color-fg-muted mb-4">
                    <em>GitHub Copilot</em> is your AI pair programmer that
                    empowers you to complete tasks 55% faster by turning natural
                    language prompts into coding suggestions.
                  </p>
                  <div>
                    {" "}
                    <a
                      className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                      href="/features/copilot"
                      data-analytics-event='{"category":"Meet GitHub Copilot","action":"click to Meet GitHub Copilot","label":"ref_cta:Meet GitHub Copilot;"}'
                    >
                      Meet GitHub Copilot{" "}
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
                <div className="overflow-hidden col-md-6 rounded-right-3">
                  <div
                    className="height-full d-flex flex-items-center flex-justify-between px-6 js-build-in-trigger"
                    style={{ background: "#040D21" }}
                  >
                    <picture>
                      <source
                        srcSet={`${CONFIGS.IMG_GITHUB_COPILOT} 1238w,${CONFIGS.IMG_GITHUB_COPILOT} 990w,${CONFIGS.IMG_GITHUB_COPILOT} 742w,${CONFIGS.IMG_GITHUB_COPILOT} 619w,${CONFIGS.IMG_GITHUB_COPILOT} 495w,${CONFIGS.IMG_GITHUB_COPILOT} 247w`}
                        sizes="(max-width: 600px) 90vw, 595px"
                        type="image/jpeg"
                      />
                      <img
                        className="width-full height-auto d-block js-build-in-item build-in-scale-up"
                        width={1238}
                        height={1404}
                        loading="lazy"
                        decoding="async"
                        alt="Planet earth with visualization of GitHub activity crossing the globe"
                        src={CONFIGS.IMG_GITHUB_COPILOT}
                      />
                    </picture>
                  </div>
                </div>
                <div
                  data-target="card-skew.shine"
                  className="position-absolute bottom-0 right-0 events-none z-n1"
                />
              </div>
            </card-skew>
          </div>
          <div className="d-flex flex-column flex-md-row gutter js-build-in-trigger ">
            <div className="col-md-6 d-flex">
              <card-skew
                style={{ overflow: "hidden" }}
                class="overflow-hidden rounded-3 mb-3 mb-md-5"
              >
                <div
                  className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                  data-target="card-skew.bounding"
                >
                  <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                    <p className="f2-mktg text-medium color-fg-muted mb-4">
                      <em>GitHub Actions</em> automates your build, test, and
                      deployment workflow with simple and secure CI/CD.
                    </p>
                    <div>
                      {" "}
                      <a
                        className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                        href="/features/actions"
                        data-analytics-event='{"category":"Discover GitHub Actions","action":"click to Discover GitHub Actions","label":"ref_cta:Discover GitHub Actions;"}'
                      >
                        Discover GitHub Actions{" "}
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
                  <div className="overflow-hidden rounded-bottom-3">
                    <picture>
                      <source
                        srcSet="assets/images/modules/site/home-campaign/illu-actions.png?width=1209&format=webpll 1209w,assets/images/modules/site/home-campaign/illu-actions.png?width=967&format=webpll 967w,assets/images/modules/site/home-campaign/illu-actions.png?width=725&format=webpll 725w,assets/images/modules/site/home-campaign/illu-actions.png?width=604&format=webpll 604w,assets/images/modules/site/home-campaign/illu-actions.png?width=483&format=webpll 483w,assets/images/modules/site/home-campaign/illu-actions.png?width=241&format=webpll 241w"
                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                        type="image/webp"
                      />
                      <source
                        srcSet="assets/images/modules/site/home-campaign/illu-actions.png 1209w,assets/images/modules/site/home-campaign/illu-actions.png?width=604 604w,assets/images/modules/site/home-campaign/illu-actions.png?width=483 483w,assets/images/modules/site/home-campaign/illu-actions.png?width=302 302w"
                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                        type="image/png"
                      />
                      <img
                        className="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                        width={1209}
                        height={890}
                        loading="lazy"
                        decoding="async"
                        alt=""
                        aria-hidden="true"
                        src="assets/images/modules/site/home-campaign/illu-actions.png"
                      />
                    </picture>
                  </div>
                  <div
                    data-target="card-skew.shine"
                    className="position-absolute bottom-0 right-0 events-none z-n1"
                  />
                </div>
              </card-skew>
            </div>
            <div className="col-md-6 d-flex">
              <card-skew
                style={{ overflow: "hidden" }}
                class="overflow-hidden rounded-3 mb-3 mb-md-5"
              >
                <div
                  className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
                  data-target="card-skew.bounding"
                >
                  <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                    <p className="f2-mktg text-medium color-fg-muted mb-4">
                      <em>GitHub Mobile</em> fits your projects in your pocket,
                      so you never miss a beat while on the go.
                    </p>
                    <div>
                      {" "}
                      <a
                        className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                        href="/mobile"
                        data-analytics-event='{"category":"Get GitHub Mobile","action":"click to Get GitHub Mobile","label":"ref_cta:Get GitHub Mobile;"}'
                      >
                        Get GitHub Mobile{" "}
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
                  <div className="overflow-hidden rounded-bottom-3">
                    <picture>
                      <source
                        srcSet="assets/images/modules/site/home-campaign/illu-mobile.png?width=1208&format=webpll 1208w,assets/images/modules/site/home-campaign/illu-mobile.png?width=966&format=webpll 966w,assets/images/modules/site/home-campaign/illu-mobile.png?width=724&format=webpll 724w,assets/images/modules/site/home-campaign/illu-mobile.png?width=604&format=webpll 604w,assets/images/modules/site/home-campaign/illu-mobile.png?width=483&format=webpll 483w,assets/images/modules/site/home-campaign/illu-mobile.png?width=241&format=webpll 241w"
                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                        type="image/webp"
                      />
                      <source
                        srcSet="assets/images/modules/site/home-campaign/illu-mobile.png 1208w,assets/images/modules/site/home-campaign/illu-mobile.png?width=604 604w,assets/images/modules/site/home-campaign/illu-mobile.png?width=483 483w,assets/images/modules/site/home-campaign/illu-mobile.png?width=302 302w"
                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                        type="image/png"
                      />
                      <img
                        className="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                        width={1208}
                        height={764}
                        loading="lazy"
                        decoding="async"
                        alt=""
                        aria-hidden="true"
                        src="assets/images/modules/site/home-campaign/illu-mobile.png"
                      />
                    </picture>
                  </div>
                  <div
                    data-target="card-skew.shine"
                    className="position-absolute bottom-0 right-0 events-none z-n1"
                  />
                </div>
              </card-skew>
            </div>
          </div>
          <div className="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
            <div
              className="home-campaign-git-line mt-n3 mt-md-n4 mb-n8 rounded js-build-in-item build-in-scale-top"
              style={{
                height: 160,
                background:
                  "linear-gradient(var(--color-canvas-default), #ea6045, #ffa28b)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
