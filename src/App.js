import './App.css';
import GenInfo from './components/GenInfo'
import Header from './components/Header'
// import Education from './components/Education'
import Education from './components/EducationF';
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Header />
      <GenInfo />
      <Education />
      <WorkExperience />
      <Skills />
    </div>
  );
}
//section to add general information like name, email, phone number
//section to add educationn experience school name, title of study, date of study
//section to add practical experience company name, position title, main tasks of job, date from and until when your worked for company
export default App;
