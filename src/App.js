import Homepage from "./components/Homepage/homepage";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Services from "./components/Services/services";
import Contact from "./components/Contact/contact";
import BasicFooter from "./components/BasicFooter/basicfooter";

function App() {
  const formHandler = () => {
    console.log("done");
  };

  return (
    <div className="App">
      <Homepage />
      <Skills />
      <Services />
      <Projects />
      <Contact onAddMeetup={formHandler} />
      <BasicFooter />
    </div>
  );
}

export default App;
