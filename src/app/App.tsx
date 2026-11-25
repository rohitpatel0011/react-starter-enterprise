import '../App.css';
import { AuthPage } from '../features/auth';

function App() {
  return (
    <>
      <div className="app">
        <div className="headingDiv">
          <h1>React Starter – Enterprise Ready</h1>
          <h3>A scalable, open-source React boilerplate for real-world apps</h3>
        </div>
        <div className="buttonDiv">
          <button id="ghBtn">
            <a href="https://github.com/rohitpatel0011/react-starter-enterprise">
              GitHub
            </a>
          </button>
          <button id="docBtn">
            <a href="">Documentation</a>
          </button>
        </div>
        <div className="authDiv">
          <AuthPage />
        </div>
      </div>
    </>
  );
}

export default App;
