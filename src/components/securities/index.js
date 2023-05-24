const Security = () => {
  return (
    <div
      className="home-campaign-security js-section overflow-hidden px-3 pb-8 pt-5"
      data-color-mode="dark"
      data-light-theme="light"
      data-dark-theme="dark"
      id="security"
    >
      <div className="container-xl">
        <div className="d-flex js-build-in-trigger" data-build-in-stagger={100}>
          <div className="col-1 d-flex flex-column flex-items-center">
            <div className="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade">
              <svg
                aria-hidden="true"
                height={24}
                viewBox="0 0 24 24"
                version="1.1"
                width={24}
                data-view-component="true"
                className="octicon octicon-lock"
              >
                <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z" />
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
                  "linear-gradient(#abb4ff, #797ef9, var(--color-canvas-default))",
              }}
              data-build-delay={500}
            />
          </div>
          <div className="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
            <h3 className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left">
              Security
            </h3>
            <h2 className="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left">
              <span className="text-accent-primary">
                Embed security into the developer workflow.
              </span>
              With GitHub, developers can secure their code in minutes and
              organizations can automatically comply with regulations.
            </h2>
          </div>
        </div>
        <card-skew
          style={{ overflow: "hidden" }}
          class="overflow-hidden rounded-3 mb-3 mb-md-5 position-relative z-1"
        >
          <div
            className="color-bg-subtle border rounded-3 p-2 p-lg-6 js-build-in-trigger feature-card-mktg z-1 position-relative"
            data-target="card-skew.bounding"
            data-build-in-stagger={200}
          >
            <div className="color-fg-subtle p-4">
              <div className="f5 text-medium">cmake.yml</div>
              <span className="f6">on: push</span>
            </div>
            <div className="position-relative d-flex flex-column flex-md-row gutter-spacious col-lg-10 mx-auto my-lg-6">
              <div className="col-md-6 js-build-in-item build-in-scale-right">
                <div
                  className="p-4 rounded mt-5 box-shadow-mktg-xl mb-6"
                  style={{ background: "rgba(235, 245, 255, 0.2)" }}
                >
                  <ul className="list-style-none mb-n4">
                    <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade">
                      <div className="d-flex flex-items-center">
                        <svg
                          aria-hidden="true"
                          height={24}
                          viewBox="0 0 24 24"
                          version="1.1"
                          width={24}
                          data-view-component="true"
                          className="octicon octicon-check-circle-fill color-fg-success mr-2"
                        >
                          <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                        </svg>
                        <span className="text-medium">Build</span>
                      </div>
                      <span className="f5 color-fg-muted d-none d-sm-block">
                        1m 21s
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="home-campaign-ghas-connect position-relative position-md-absolute z-1 d-flex flex-items-center js-build-in-item build-in-scale-fade">
                <div
                  className="d-inline-block circle p-1 color-bg-emphasis"
                  style={{ boxShadow: "0 0 0 2px #444D56" }}
                />
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: "#D1D5DA",
                  }}
                />
                <div
                  className="d-inline-block circle p-1 color-bg-emphasis"
                  style={{ boxShadow: "0 0 0 2px #444D56" }}
                />
              </div>
              <div className="col-md-6 js-build-in-item build-in-scale-right">
                <div
                  className="pt-2 pb-1 px-4 rounded-top-2 d-inline-block text-medium"
                  style={{ background: "rgba(235, 245, 255, 0.2)" }}
                >
                  Steps
                </div>
                <div
                  className="p-4 rounded-bottom-2 rounded-right-2 box-shadow-mktg-xl mb-6"
                  style={{ background: "rgba(235, 245, 255, 0.2)" }}
                >
                  <ul className="list-style-none mb-n4">
                    <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade">
                      <div className="d-flex flex-items-center">
                        <svg
                          aria-hidden="true"
                          height={24}
                          viewBox="0 0 24 24"
                          version="1.1"
                          width={24}
                          data-view-component="true"
                          className="octicon octicon-check-circle-fill color-fg-success mr-2"
                        >
                          <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                        </svg>
                        <span className="text-medium">Initialize CodeQL</span>
                      </div>
                      <span className="f5 color-fg-muted d-none d-sm-block">
                        1m 42s
                      </span>
                    </li>
                    <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade">
                      <div className="d-flex flex-items-center">
                        <svg
                          aria-hidden="true"
                          height={24}
                          viewBox="0 0 24 24"
                          version="1.1"
                          width={24}
                          data-view-component="true"
                          className="octicon octicon-check-circle-fill color-fg-success mr-2"
                        >
                          <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                        </svg>
                        <span className="text-medium">Autobuild</span>
                      </div>
                      <span className="f5 color-fg-muted d-none d-sm-block">
                        1m 24s
                      </span>
                    </li>
                    <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade">
                      <div className="d-flex flex-items-center">
                        <svg
                          aria-hidden="true"
                          height={24}
                          viewBox="0 0 24 24"
                          version="1.1"
                          width={24}
                          data-view-component="true"
                          className="octicon octicon-check-circle-fill color-fg-success mr-2"
                        >
                          <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z" />
                        </svg>
                        <span className="text-medium">
                          Perform CodeQL Analyses
                        </span>
                      </div>
                      <span className="f5 color-fg-muted d-none d-sm-block">
                        1m 36s
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-target="card-skew.shine"
              className="position-absolute bottom-0 right-0 events-none z-n1"
            />
          </div>
        </card-skew>
        <div
          className="d-flex js-build-in-trigger position-relative"
          data-build-in-stagger={100}
        >
          <img
            alt=""
            aria-hidden="true"
            width={2712}
            height={2712}
            style={{ transform: "translateX(300px) rotateZ(90deg)" }}
            className="position-absolute top-0 right-0 height-auto col-11 events-none"
            loading="lazy"
            decoding="async"
            src="assets/images/bg-stars-1.webp"
          />
          <div className="col-1 d-flex flex-column flex-items-center position-relative">
            <div
              className="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
              style={{
                background:
                  "linear-gradient(var(--color-canvas-default), #797ef9, #797ef9, var(--color-canvas-default))",
              }}
            />
            <img
              alt=""
              aria-hidden="true"
              width={81}
              height={612}
              style={{
                left: "calc(50% - 2px)",
                height: "auto",
                maxWidth: "9vw",
              }}
              className="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade"
              loading="lazy"
              decoding="async"
              src="assets/images/git-branch-security.svg"
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
                    <em>GitHub Advanced Security</em> lets you gain visibility
                    into your security posture, respond to threats proactively,
                    and ship secure applications quickly.
                  </h2>
                  <a
                    className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                    href="/features/security"
                    data-analytics-event='{"category":"Get GitHub Advanced Security","action":"click to Get GitHub Advanced Security","label":"ref_cta:Get GitHub Advanced Security;"}'
                  >
                    Get GitHub Advanced Security{" "}
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
                      className="js-build-in-item build-in-slideX-right box-shadow-card-dark-mktg overflow-hidden rounded-2 position-relative left-6 z-1"
                      style={{ maxWidth: 541, marginTop: "-30%" }}
                    >
                      <img
                        src="assets/images/modules/site/home-campaign/illu-ghas-list.png"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={1084}
                        height={600}
                        className="width-full height-auto d-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 mb-md-12 pb-3 js-build-in-trigger">
              <div className="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-7 build-in-slideX-left">
                <div
                  className="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
                  style={{ top: "-1px" }}
                >
                  <span className="text-gradient-mktg text-semibold">
                    Did you know?
                  </span>
                </div>
                <h3 className="text-accent-primary mb-2 mt-3 h2-mktg text-medium">
                  56 million projects
                </h3>
                <p className="mb-3 f3-mktg text-medium col-6-max">
                  fixed vulnerabilities with GitHub<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative z-1 js-build-in-trigger">
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
                  <em>Secret scanning</em> automatically looks for partner
                  patterns and prevents fraudulent use of accidentally committed
                  secrets.
                </p>
                <div>
                  {" "}
                  <a
                    className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                    href="https://github.com/features/security/code"
                    data-analytics-event='{"category":"Read about secret scanning","action":"click to Read about secret scanning","label":"ref_cta:Read about secret scanning;"}'
                  >
                    Read about secret scanning{" "}
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
                <picture>
                  <source
                    srcSet="assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=1288&format=webpll 1288w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=1030&format=webpll 1030w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=772&format=webpll 772w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=644&format=webpll 644w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=515&format=webpll 515w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=257&format=webpll 257w"
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 644px"
                    type="image/webp"
                  />
                  <source
                    srcSet="assets/images/modules/site/home-campaign/illu-secret-scanning.png 1288w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=644 644w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=515 515w,assets/images/modules/site/home-campaign/illu-secret-scanning.png?width=322 322w"
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 644px"
                    type="image/png"
                  />
                  <img
                    className="width-full d-block height-auto js-build-in-item build-in-scale-fade"
                    width={1288}
                    height={992}
                    loading="lazy"
                    decoding="async"
                    alt=""
                    aria-hidden="true"
                    src="assets/images/modules/site/home-campaign/illu-secret-scanning.png"
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
                    <em>Dependabot</em> makes it easy to find and fix vulnerable
                    dependencies in your supply chain.
                  </p>
                  <div>
                    {" "}
                    <a
                      className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                      href="/features/security/software-supply-chain"
                      data-analytics-event='{"category":"Explore Dependabot","action":"click to Explore Dependabot","label":"ref_cta:Explore Dependabot;"}'
                    >
                      Explore Dependabot{" "}
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
                      srcSet="assets/images/modules/site/home-campaign/illu-dependabot.png?width=1208&format=webpll 1208w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=966&format=webpll 966w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=724&format=webpll 724w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=604&format=webpll 604w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=483&format=webpll 483w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=241&format=webpll 241w"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                      type="image/webp"
                    />
                    <source
                      srcSet="assets/images/modules/site/home-campaign/illu-dependabot.png 1208w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=604 604w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=483 483w,assets/images/modules/site/home-campaign/illu-dependabot.png?width=302 302w"
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
                      src="assets/images/modules/site/home-campaign/illu-dependabot.png"
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
                    <em>Code scanning</em> is GitHub’s static code analysis tool
                    that helps you remediate issues in your code.
                  </p>
                  <div>
                    {" "}
                    <a
                      className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                      href="https://resources.github.com/security/sast/"
                      data-analytics-event='{"category":"Download the latest SAST ebook","action":"click to Download the latest SAST ebook","label":"ref_cta:Download the latest SAST ebook;"}'
                    >
                      Download the latest SAST ebook{" "}
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
                      srcSet="assets/images/modules/site/home-campaign/illu-code-scanning.png?width=1208&format=webpll 1208w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=966&format=webpll 966w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=724&format=webpll 724w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=604&format=webpll 604w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=483&format=webpll 483w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=241&format=webpll 241w"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                      type="image/webp"
                    />
                    <source
                      srcSet="assets/images/modules/site/home-campaign/illu-code-scanning.png 1208w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=604 604w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=483 483w,assets/images/modules/site/home-campaign/illu-code-scanning.png?width=302 302w"
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
                      src="assets/images/modules/site/home-campaign/illu-code-scanning.png"
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
      </div>
    </div>
  );
};

export default Security;
