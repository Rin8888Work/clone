const Header = () => {
  return (
    <>
      <div className="position-relative js-header-wrapper ">
        <a
          href="#start-of-content"
          className="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content"
        >
          Skip to content
        </a>
        <span
          data-view-component="true"
          className="progress-pjax-loader Progress position-fixed width-full"
        >
          <span
            style={{ width: "0%" }}
            data-view-component="true"
            className="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"
          />
        </span>
        <header
          className="Header-old header-logged-out js-details-container Details position-relative f4 py-3"
          role="banner"
        >
          <button
            type="button"
            className="Header-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target"
            aria-label="Toggle navigation"
          >
            <span className="d-none">Toggle navigation</span>
          </button>
          <div className="container-xl d-flex flex-column flex-lg-row flex-items-center p-responsive height-full position-relative z-1">
            <div className="d-flex flex-justify-between flex-items-center width-full width-lg-auto">
              <a
                className="mr-lg-3 color-fg-inherit flex-order-2"
                href="/"
                aria-label="Homepage"
                data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark"
              >
                <svg
                  height={32}
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width={32}
                  data-view-component="true"
                  className="octicon octicon-mark-github"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                </svg>
              </a>
              <div className="flex-1">
                <a
                  href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
                  className="d-inline-block d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit"
                  data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="520d87e8f83281e6946b192f0f840552721c7fcba9b9c36d802e898a816314e2"
                >
                  Sign&nbsp;up
                </a>
              </div>
              <div className="flex-1 flex-order-2 text-right">
                <button
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  type="button"
                  data-view-component="true"
                  className="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"
                >
                  {" "}
                  <span className="Button-content">
                    <span className="Button-label">
                      <div className="HeaderMenu-toggle-bar rounded my-1" />
                      <div className="HeaderMenu-toggle-bar rounded my-1" />
                      <div className="HeaderMenu-toggle-bar rounded my-1" />
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="HeaderMenu--logged-out p-responsive height-fit position-lg-relative d-lg-flex flex-column flex-auto pt-7 pb-4 top-0">
              <div className="header-menu-wrapper d-flex flex-column flex-self-end flex-lg-row flex-justify-between flex-auto p-3 p-lg-0 rounded rounded-lg-0 mt-3 mt-lg-0">
                <nav
                  className="mt-0 px-3 px-lg-0 mb-3 mb-lg-0"
                  aria-label="Global"
                >
                  <ul className="d-lg-flex list-style-none">
                    <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                      <button
                        type="button"
                        className="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                        aria-expanded="false"
                      >
                        Product
                        <svg
                          opacity="0.5"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                        >
                          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z" />
                        </svg>
                      </button>
                      <div className="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide">
                        <div className="px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
                          <ul className="list-style-none f5">
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Actions","label":"ref_cta:Actions;"}'
                                href="/features/actions"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-workflow color-fg-subtle mr-3"
                                >
                                  <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Actions
                                  </div>
                                  Automate any workflow
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Packages","label":"ref_cta:Packages;"}'
                                href="/features/packages"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-package color-fg-subtle mr-3"
                                >
                                  <path d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Packages
                                  </div>
                                  Host and manage packages
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Security","label":"ref_cta:Security;"}'
                                href="/features/security"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-shield-check color-fg-subtle mr-3"
                                >
                                  <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z" />
                                  <path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Security
                                  </div>
                                  Find and fix vulnerabilities
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Codespaces","label":"ref_cta:Codespaces;"}'
                                href="/features/codespaces"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-codespaces color-fg-subtle mr-3"
                                >
                                  <path d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z" />
                                  <path d="M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Codespaces
                                  </div>
                                  Instant dev environments
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Copilot","label":"ref_cta:Copilot;"}'
                                href="/features/copilot"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-copilot color-fg-subtle mr-3"
                                >
                                  <path d="M9.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z" />
                                  <path d="M12 2c2.214 0 4.248.657 5.747 1.756.136.099.268.204.397.312.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086l.633 1.478.043.022A4.75 4.75 0 0 1 24 15.222v1.028c0 .529-.309.987-.565 1.293-.28.336-.636.653-.966.918a13.84 13.84 0 0 1-1.299.911l-.024.015-.006.004-.039.025c-.223.135-.45.264-.68.386-.46.245-1.122.571-1.941.895C16.845 21.344 14.561 22 12 22c-2.561 0-4.845-.656-6.479-1.303a19.046 19.046 0 0 1-1.942-.894 14.081 14.081 0 0 1-.535-.3l-.144-.087-.04-.025-.006-.004-.024-.015a13.16 13.16 0 0 1-1.299-.911 6.913 6.913 0 0 1-.967-.918C.31 17.237 0 16.779 0 16.25v-1.028a4.75 4.75 0 0 1 2.626-4.248l.043-.022.633-1.478a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.498 1.132-3.368.397-.406.89-.717 1.474-.952.129-.108.261-.213.397-.312C7.752 2.657 9.786 2 12 2Zm-8 9.654v6.669a17.59 17.59 0 0 0 2.073.98C7.595 19.906 9.686 20.5 12 20.5c2.314 0 4.405-.594 5.927-1.197a17.59 17.59 0 0 0 2.073-.98v-6.669l-.038-.09c-.046.061-.095.12-.145.177-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.544-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.344a4.323 4.323 0 0 1-.355.508C10.704 12.456 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a3.026 3.026 0 0 1-.145-.177Zm6.309-1.092c.445-.547.708-1.334.851-2.301.057-.357.087-.718.09-1.079v-.031c-.001-.762-.166-1.26-.43-1.568l-.008-.01c-.341-.391-1.046-.689-2.533-.529-1.505.163-2.347.537-2.824 1.024-.462.473-.705 1.18-.705 2.32 0 .605.044 1.087.135 1.472.092.384.231.672.423.89.365.413 1.084.75 2.657.75.91 0 1.527-.223 1.964-.564.14-.11.268-.235.38-.374Zm2.504-2.497c.136 1.057.403 1.913.878 2.497.442.545 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.151.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.318-.862-2.824-1.025-1.487-.161-2.192.139-2.533.529-.268.308-.437.808-.438 1.578v.02c.002.299.023.598.063.894Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Copilot
                                  </div>
                                  Write better code with AI
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Code review","label":"ref_cta:Code review;"}'
                                href="/features/code-review"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-code-review color-fg-subtle mr-3"
                                >
                                  <path d="M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z" />
                                  <path d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Code review
                                  </div>
                                  Manage code changes
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Issues","label":"ref_cta:Issues;"}'
                                href="/features/issues"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-issue-opened color-fg-subtle mr-3"
                                >
                                  <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Issues
                                  </div>
                                  Plan and track work
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Discussions","label":"ref_cta:Discussions;"}'
                                href="/features/discussions"
                              >
                                <svg
                                  aria-hidden="true"
                                  height={24}
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                  width={24}
                                  data-view-component="true"
                                  className="octicon octicon-comment-discussion color-fg-subtle mr-3"
                                >
                                  <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" />
                                  <path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z" />
                                </svg>
                                <div>
                                  <div className="color-fg-default h4">
                                    Discussions
                                  </div>
                                  Collaborate outside of code
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="px-lg-4">
                          <span
                            className="d-block h4 color-fg-default my-1"
                            id="product-explore-heading"
                          >
                            Explore
                          </span>
                          <ul
                            className="list-style-none f5"
                            aria-labelledby="product-explore-heading"
                          >
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to All features","label":"ref_cta:All features;"}'
                                href="/features"
                              >
                                All features
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Documentation","label":"ref_cta:Documentation;"}'
                                href="https://docs.github.com"
                              >
                                Documentation
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to GitHub Skills","label":"ref_cta:GitHub Skills;"}'
                                href="https://skills.github.com/"
                              >
                                GitHub Skills
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Blog","label":"ref_cta:Blog;"}'
                                href="https://github.blog"
                              >
                                Blog
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                      <button
                        type="button"
                        className="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                        aria-expanded="false"
                      >
                        Solutions
                        <svg
                          opacity="0.5"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                        >
                          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z" />
                        </svg>
                      </button>
                      <div className="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
                        <div className="border-bottom pb-3 mb-3">
                          <span
                            className="d-block h4 color-fg-default my-1"
                            id="solutions-for-heading"
                          >
                            For
                          </span>
                          <ul
                            className="list-style-none f5"
                            aria-labelledby="solutions-for-heading"
                          >
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Enterprise","label":"ref_cta:Enterprise;"}'
                                href="/enterprise"
                              >
                                Enterprise
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Teams","label":"ref_cta:Teams;"}'
                                href="/team"
                              >
                                Teams
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Startups","label":"ref_cta:Startups;"}'
                                href="/enterprise/startups"
                              >
                                Startups
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Education","label":"ref_cta:Education;"}'
                                href="https://education.github.com"
                              >
                                Education
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="border-bottom pb-3 mb-3">
                          <span
                            className="d-block h4 color-fg-default my-1"
                            id="solutions-by-solution-heading"
                          >
                            By Solution
                          </span>
                          <ul
                            className="list-style-none f5"
                            aria-labelledby="solutions-by-solution-heading"
                          >
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to CI/CD &amp; Automation","label":"ref_cta:CI/CD &amp; Automation;"}'
                                href="/solutions/ci-cd/"
                              >
                                CI/CD &amp; Automation
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to DevOps","label":"ref_cta:DevOps;"}'
                                href="https://resources.github.com/devops/"
                              >
                                DevOps
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to DevSecOps","label":"ref_cta:DevSecOps;"}'
                                href="https://resources.github.com/devops/fundamentals/devsecops/"
                              >
                                DevSecOps
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <span
                            className="d-block h4 color-fg-default my-1"
                            id="solutions-case-studies-heading"
                          >
                            Case Studies
                          </span>
                          <ul
                            className="list-style-none f5"
                            aria-labelledby="solutions-case-studies-heading"
                          >
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Customer Stories","label":"ref_cta:Customer Stories;"}'
                                href="/customer-stories"
                              >
                                Customer Stories
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                target="_blank"
                                data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Resources","label":"ref_cta:Resources;"}'
                                href="https://resources.github.com/"
                              >
                                Resources
                                <svg
                                  aria-hidden="true"
                                  height={16}
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width={16}
                                  data-view-component="true"
                                  className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                                >
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                      <button
                        type="button"
                        className="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                        aria-expanded="false"
                      >
                        Open Source
                        <svg
                          opacity="0.5"
                          aria-hidden="true"
                          height={16}
                          viewBox="0 0 16 16"
                          version="1.1"
                          width={16}
                          data-view-component="true"
                          className="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                        >
                          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z" />
                        </svg>
                      </button>
                      <div className="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
                        <div className="border-bottom pb-3 mb-3">
                          <ul className="list-style-none f5">
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center"
                                data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to GitHub Sponsors","label":"ref_cta:GitHub Sponsors;"}'
                                href="/sponsors"
                              >
                                <div>
                                  <div className="color-fg-default h4">
                                    GitHub Sponsors
                                  </div>
                                  Fund open source developers
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="border-bottom pb-3 mb-3">
                          <ul className="list-style-none f5">
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center"
                                data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to The ReadME Project","label":"ref_cta:The ReadME Project;"}'
                                href="/readme"
                              >
                                <div>
                                  <div className="color-fg-default h4">
                                    The ReadME Project
                                  </div>
                                  GitHub community articles
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <span
                            className="d-block h4 color-fg-default my-1"
                            id="open-source-repositories-heading"
                          >
                            Repositories
                          </span>
                          <ul
                            className="list-style-none f5"
                            aria-labelledby="open-source-repositories-heading"
                          >
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Topics","label":"ref_cta:Topics;"}'
                                href="/topics"
                              >
                                Topics
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Trending","label":"ref_cta:Trending;"}'
                                href="/trending"
                              >
                                Trending
                              </a>
                            </li>
                            <li>
                              <a
                                className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                                data-analytics-event='{"category":"Header dropdown (logged out), Open Source","action":"click to go to Collections","label":"ref_cta:Collections;"}'
                                href="/collections"
                              >
                                Collections
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                      <a
                        className="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"
                        data-analytics-event='{"category":"Header menu top item (logged out)","action":"click to go to Pricing","label":"ref_cta:Pricing;"}'
                        href="/pricing"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="d-lg-flex flex-items-center px-3 px-lg-0 mb-3 mb-lg-0 text-center text-lg-left">
                  <div className="position-relative mr-lg-3 d-lg-inline-block">
                    <a
                      href="/login"
                      className="HeaderMenu-link HeaderMenu-link--sign-in flex-shrink-0 no-underline d-block d-lg-inline-block border border-lg-0 rounded rounded-lg-0 p-2 p-lg-0"
                      data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                      data-hydro-click-hmac="cd4f672ed9a2fa51ea92c28de162e81edb2d11a2aad6884ec89a6d60b21b1cfb"
                      data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"
                    >
                      Sign in
                    </a>
                  </div>
                  <a
                    href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
                    className="HeaderMenu-link HeaderMenu-link--sign-up flex-shrink-0 d-none d-lg-inline-block no-underline border color-border-default rounded px-2 py-1"
                    data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="cd4f672ed9a2fa51ea92c28de162e81edb2d11a2aad6884ec89a6d60b21b1cfb"
                    data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up;ref_loc:header logged out"}'
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div id="start-of-content" className="show-on-focus" />
      <div id="js-flash-container" data-turbo-replace="">
        <template className="js-flash-template" />
      </div>
    </>
  );
};

export default Header;
