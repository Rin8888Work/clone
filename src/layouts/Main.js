import Footer from "./Footer";
import Header from "./Header";

const Main = ({ children }) => {
  return (
    <div
      data-turbo-body=""
      className="logged-out env-production page-responsive header-overlay home-campaign"
      style={{ wordWrap: "break-word" }}
    >
      <div
        data-turbo-body=""
        className="logged-out env-production page-responsive header-overlay home-campaign"
        style={{ wordWrap: "break-word" }}
      >
        <Header />
        <div
          className="application-main "
          data-commit-hovercards-enabled=""
          data-discussion-hovercards-enabled=""
          data-issue-and-pr-hovercards-enabled=""
        >
          <main className="font-mktg">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
