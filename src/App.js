import "./style/app.css";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <WorkExperience />
      <EducationalExperience />
    </div>
  );
}

export default App;
