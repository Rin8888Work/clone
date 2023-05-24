import { CONFIGS } from "../../configs";

const Collaboration = () => {
  return (
    <div
      className="home-campaign-collaboration js-section overflow-hidden px-3 pb-8 pt-5"
      data-color-mode="dark"
      data-light-theme="light"
      data-dark-theme="dark"
      id="collaboration"
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
                className="octicon octicon-code-of-conduct"
              >
                <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z" />
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
                  "linear-gradient(#ffd6cc, #ec6547, #ec6547, var(--color-canvas-default))",
              }}
              data-build-delay={500}
            />
          </div>
          <div className="col-11 col-lg-9 ml-2 ml-md-0 mb-6 mb-md-10">
            <h3 className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left">
              Collaboration
            </h3>
            <h2 className="h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left">
              <span className="text-accent-primary">
                Supercharge collaboration.
              </span>
              We provide unlimited repositories, best-in-class version control,
              and the world’s most powerful open source community—so your team
              can work more efficiently together.
            </h2>
          </div>
        </div>
        <picture>
          <source
            srcSet="assets/images/modules/site/issues/illo/issues-plan.png?width=2500&format=webpll 2500w,assets/images/modules/site/issues/illo/issues-plan.png?width=2000&format=webpll 2000w,assets/images/modules/site/issues/illo/issues-plan.png?width=1500&format=webpll 1500w,assets/images/modules/site/issues/illo/issues-plan.png?width=1250&format=webpll 1250w,assets/images/modules/site/issues/illo/issues-plan.png?width=1000&format=webpll 1000w,assets/images/modules/site/issues/illo/issues-plan.png?width=500&format=webpll 500w"
            sizes="(max-width: 1200px) 90vw, 1250px"
            type="image/webp"
          />
          <source
            srcSet="assets/images/modules/site/issues/illo/issues-plan.png 2500w,assets/images/modules/site/issues/illo/issues-plan.png?width=1250 1250w,assets/images/modules/site/issues/illo/issues-plan.png?width=1000 1000w,assets/images/modules/site/issues/illo/issues-plan.png?width=625 625w"
            sizes="(max-width: 1200px) 90vw, 1250px"
            type="image/png"
          />
          <img
            className="width-full height-auto d-block rounded-3 border box-shadow-card-dark-mktg"
            width={2500}
            height={1500}
            loading="lazy"
            decoding="async"
            alt="Illustration of project table view with cards grouped by 'Feature planning' phase."
            src="assets/images/modules/site/issues/illo/issues-plan.png"
          />
        </picture>
        <div className="d-flex position-relative">
          <img
            alt=""
            aria-hidden="true"
            width={2712}
            height={2712}
            style={{ transform: "translateX(300px) rotateZ(180deg)" }}
            className="position-absolute top-0 right-0 height-auto col-11 events-none"
            loading="lazy"
            decoding="async"
            src="assets/images/bg-stars-1.webp"
          />
          <div className="col-1 d-flex flex-column flex-items-center position-relative js-build-in-trigger">
            <div
              className="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
              style={{
                transitionDuration: "1100ms",
                background:
                  "linear-gradient(var(--color-canvas-default), #ea6045, #ea6045, var(--color-canvas-default))",
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
              src="assets/images/git-branch-collaboration.svg"
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
                    <em>GitHub Issues and GitHub Projects</em> supply flexible
                    project management tools that adapt to your team alongside
                    your code.
                  </h2>
                  <a
                    className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                    href="/features/issues"
                    data-analytics-event='{"category":"Explore GitHub Issues","action":"click to Explore GitHub Issues","label":"ref_cta:Explore GitHub Issues;"}'
                  >
                    Explore GitHub Issues{" "}
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
                      className="js-build-in-item build-in-slideY box-shadow-active-border-inverse-mktg overflow-hidden rounded-2 position-relative left-4 z-1"
                      style={{ maxWidth: 595, marginTop: "-30%" }}
                    >
                      <img
                        src="assets/images/modules/site/home-campaign/illu-projects.png"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={1190}
                        height={1004}
                        className="width-full height-auto d-block"
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
                  80% reduction
                </h3>
                <p className="mb-3 f3-mktg text-medium col-6-max">
                  in onboarding time with GitHub<sup>1</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gutter js-build-in-trigger ">
          <div className="position-relative z-1 col-md-6 d-flex">
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
                    <em>GitHub Discussions</em> create space to ask questions
                    and have open-ended conversations.
                  </p>
                  <div>
                    {" "}
                    <a
                      className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                      href="/features/discussions"
                      data-analytics-event='{"category":"Enable GitHub Discussions","action":"click to Enable GitHub Discussions","label":"ref_cta:Enable GitHub Discussions;"}'
                    >
                      Enable GitHub Discussions{" "}
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
                      srcSet="assets/images/modules/site/home-campaign/illu-discussions.png?width=1208&format=webpll 1208w,assets/images/modules/site/home-campaign/illu-discussions.png?width=966&format=webpll 966w,assets/images/modules/site/home-campaign/illu-discussions.png?width=724&format=webpll 724w,assets/images/modules/site/home-campaign/illu-discussions.png?width=604&format=webpll 604w,assets/images/modules/site/home-campaign/illu-discussions.png?width=483&format=webpll 483w,assets/images/modules/site/home-campaign/illu-discussions.png?width=241&format=webpll 241w"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                      type="image/webp"
                    />
                    <source
                      srcSet="assets/images/modules/site/home-campaign/illu-discussions.png 1208w,assets/images/modules/site/home-campaign/illu-discussions.png?width=604 604w,assets/images/modules/site/home-campaign/illu-discussions.png?width=483 483w,assets/images/modules/site/home-campaign/illu-discussions.png?width=302 302w"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                      type="image/png"
                    />
                    <img
                      className="width-full d-block height-auto js-build-in-item build-in-scale-up"
                      width={1208}
                      height={764}
                      loading="lazy"
                      decoding="async"
                      alt=""
                      aria-hidden="true"
                      src="assets/images/modules/site/home-campaign/illu-discussions.png"
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
                    <em>Pull requests</em> allow real-time communication and
                    collaboration about code changes.
                  </p>
                  <div>
                    {" "}
                    <a
                      className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                      href="/features/code-review"
                      data-analytics-event='{"category":"Check out pull requests","action":"click to Check out pull requests","label":"ref_cta:Check out pull requests;"}'
                    >
                      Check out pull requests{" "}
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
                      srcSet="assets/images/modules/site/home-campaign/illu-pull-requests.png?width=1208&format=webpll 1208w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=966&format=webpll 966w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=724&format=webpll 724w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=604&format=webpll 604w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=483&format=webpll 483w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=241&format=webpll 241w"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                      type="image/webp"
                    />
                    <source
                      srcSet="assets/images/modules/site/home-campaign/illu-pull-requests.png 1208w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=604 604w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=483 483w,assets/images/modules/site/home-campaign/illu-pull-requests.png?width=302 302w"
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
                      type="image/png"
                    />
                    <img
                      className="width-full d-block height-auto js-build-in-item build-in-scale-up"
                      width={1208}
                      height={764}
                      loading="lazy"
                      decoding="async"
                      alt=""
                      aria-hidden="true"
                      src="assets/images/modules/site/home-campaign/illu-pull-requests.png"
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
                <em>GitHub Sponsors</em> lets you support your favorite open
                source maintainers and projects.
              </p>
              <div>
                {" "}
                <a
                  className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
                  href="/sponsors"
                  data-analytics-event='{"category":"Invest with GitHub Sponsors","action":"click to Invest with GitHub Sponsors","label":"ref_cta:Invest with GitHub Sponsors;"}'
                >
                  Invest with GitHub Sponsors{" "}
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
                    srcSet={`${CONFIGS.IMG_GITHUB_SPONSOR} 1238w,${CONFIGS.IMG_GITHUB_SPONSOR} 990w,${CONFIGS.IMG_GITHUB_SPONSOR} 742w,${CONFIGS.IMG_GITHUB_SPONSOR} 619w,${CONFIGS.IMG_GITHUB_SPONSOR} 495w,${CONFIGS.IMG_GITHUB_SPONSOR} 247w`}
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
                    src={CONFIGS.IMG_GITHUB_SPONSOR}
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
        <div className="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
          <div
            className="home-campaign-git-line mt-n3 mt-md-n4 mb-n8 rounded js-build-in-item build-in-scale-top"
            style={{
              height: 160,
              background:
                "linear-gradient(var(--color-canvas-default), #797ef9, #abb4ff)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
