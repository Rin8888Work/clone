const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="footer pt-6 position-relative"
      data-color-mode="dark"
      data-dark-theme="dark"
    >
      <div className="container-xl p-responsive">
        <div className="d-flex flex-wrap py-5 mb-5">
          <div className="col-12 col-lg-4 mb-5">
            <a
              href="/"
              data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
              className="color-fg-default d-inline-block"
              aria-label="Go to GitHub homepage"
            >
              <svg
                height={30}
                aria-hidden="true"
                viewBox="0 0 45 16"
                version="1.1"
                width={84}
                data-view-component="true"
                className="octicon octicon-logo-github footer-logo-mktg width-auto d-block"
              >
                <path d="M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z" />
              </svg>
            </a>
            <div>
              <h2 className="h5 mt-4" id="subscribe-to-newsletter">
                Subscribe to our newsletter
              </h2>
              <p className="f5 color-fg-muted mb-3">
                Get product updates, company news, and more.
              </p>
              <a
                className="btn-mktg mb-4 btn-muted-mktg"
                data-analytics-event='{"category":"Subscribe","action":"click to Subscribe","label":"ref_cta:Subscribe;"}'
                href="https://resources.github.com/newsletter/"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4">
            <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
              Product
            </h2>
            <ul className="list-style-none color-fg-muted f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to features","label":"text:features"}'
                  href="/features"
                >
                  Features
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
                  href="/security"
                >
                  Security
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to team","label":"text:team"}'
                  href="/team"
                >
                  Team
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to enterprise","label":"text:enterprise"}'
                  href="/enterprise"
                >
                  Enterprise
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to customer stories","label":"text:customer stories"}'
                  href="/customer-stories?type=enterprise"
                >
                  Customer stories
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to the readme project","label":"text:the readme project"}'
                  href="/readme"
                >
                  The ReadME Project
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to pricing","label":"text:pricing"}'
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to resources","label":"text:resources"}'
                  href="https://resources.github.com"
                >
                  Resources
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to roadmap","label":"text:roadmap"}'
                  href="https://github.com/github/roadmap"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
            <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
              Platform
            </h2>
            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
                  href="https://docs.github.com"
                >
                  Developer API
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to partner","label":"text:partner"}'
                  href="https://partner.github.com"
                >
                  Partners
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to electron","label":"text:electron"}'
                  href="https://www.electronjs.org"
                >
                  Electron
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to desktop","label":"text:desktop"}'
                  href="https://desktop.github.com/"
                >
                  GitHub Desktop
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
            <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
              Support
            </h2>
            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to help","label":"text:Docs"}'
                  href="https://docs.github.com"
                >
                  Docs
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to community","label":"text:community"}'
                  href="https://github.community"
                >
                  Community Forum
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to professional services","label":"text:professional services"}'
                  href="https://services.github.com/"
                >
                  Professional Services
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to premium support","label":"text:premium support"}'
                  href="/premium-support"
                >
                  Premium Support
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to skills","label":"text:skills"}'
                  href="https://skills.github.com/"
                >
                  Skills
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
                  href="https://www.githubstatus.com/"
                >
                  Status
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to contact","label":"text:contact"}'
                  href="https://support.github.com?tags=dotcom-footer"
                >
                  Contact GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
            <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
              Company
            </h2>
            <ul className="list-style-none f5">
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to about","label":"text:about"}'
                  href="https://github.com/about"
                >
                  About
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
                  href="https://github.blog"
                >
                  Blog
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to careers","label":"text:careers"}'
                  href="/about/careers"
                >
                  Careers
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to press","label":"text:press"}'
                  href="/about/press"
                >
                  Press
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to diversity","label":"text:Inclusion"}'
                  href="/about/diversity"
                >
                  Inclusion
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to social impact","label":"text:social impact"}'
                  href="https://socialimpact.github.com/"
                >
                  Social Impact
                </a>
              </li>
              <li className="lh-condensed mb-3">
                <a
                  className="Link--secondary"
                  data-analytics-event='{"category":"Footer","action":"go to shop","label":"text:shop"}'
                  href="https://shop.github.com"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="color-bg-subtle">
        <div className="container-xl p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
          <ul className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
            <li className="mr-3">
              <a
                href="https://twitter.com/github"
                data-analytics-event='{"category":"Footer","action":"go to Twitter","label":"text:twitter"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/twitter.svg"
                  height={18}
                  width={22}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitter icon"
                />
                <span className="sr-only">GitHub on Twitter</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.facebook.com/GitHub"
                data-analytics-event='{"category":"Footer","action":"go to Facebook","label":"text:facebook"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/facebook.svg"
                  width={18}
                  height={18}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Facebook icon"
                />
                <span className="sr-only">GitHub on Facebook</span>
              </a>
            </li>
            <li className="mr-3 flex-self-start">
              <a
                href="https://www.linkedin.com/company/github"
                data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:linkedin"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/linkedin.svg"
                  width={19}
                  height={18}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Linkedin icon"
                />
                <span className="sr-only">GitHub on LinkedIn</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.youtube.com/github"
                data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:youtube"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/youtube.svg"
                  width={23}
                  height={16}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="YouTube icon"
                />
                <span className="sr-only">GitHub on YouTube</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.twitch.tv/github"
                data-analytics-event='{"category":"Footer","action":"go to Twitch","label":"text:twitch"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/twitch.svg"
                  width={18}
                  height={18}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="Twitch icon"
                />
                <span className="sr-only">GitHub on Twitch</span>
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://www.tiktok.com/@github"
                data-analytics-event='{"category":"Footer","action":"go to tiktok","label":"text:tiktok"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/tiktok.svg"
                  width={18}
                  height={18}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="TikTok icon"
                />
                <span className="sr-only">GitHub on TikTok</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/github"
                data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:github"}'
                className="color-fg-subtle"
              >
                <img
                  src="assets/images/github-mark.svg"
                  width={20}
                  height={20}
                  className="d-block"
                  loading="lazy"
                  decoding="async"
                  alt="GitHub mark"
                />
                <span className="sr-only">GitHub’s organization on GitHub</span>
              </a>
            </li>
          </ul>
          <ul className="list-style-none d-flex flex-wrap color-fg-muted">
            <li className="mr-3">© 2023 GitHub, Inc.</li>
            <li className="mr-3">
              <a
                href="https://docs.github.com/site-policy/github-terms/github-terms-of-service"
                data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
                className="Link--secondary"
              >
                Terms
              </a>
            </li>
            <li className="mr-3">
              <a
                href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
                data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
                className="Link--secondary"
              >
                Privacy
              </a>
              (
              <a
                href="https://github.com/github/site-policy/pull/582"
                className="Link--secondary"
              >
                Updated 08/2022
              </a>
              )
            </li>
            <li className="mr-3">
              <a
                className="Link--secondary"
                data-analytics-event='{"category":"Footer","action":"go to sitemap","label":"text:sitemap"}'
                href="/sitemap"
              >
                Sitemap
              </a>
            </li>
            <li>
              <a
                className="Link--secondary"
                data-analytics-event='{"category":"Footer","action":"go to Git Guides","label":"text:What is Git?"}'
                href="/git-guides"
              >
                What is Git?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
