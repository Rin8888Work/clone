import MainLayout from "./layouts/Main";
import Introduce from "./components/introduce";
import Collaboration from "./components/collaborations";
import Security from "./components/securities";
import Build from "./components/build";

function App() {
  return (
    <MainLayout>
      <Introduce />
      <Collaboration />
      <Security />
      <Build />
    </MainLayout>
  );
}

export default App;
