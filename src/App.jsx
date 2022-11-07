import './App.css';

import Main from './components/Main/Main';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="app">
      <Main>
        <Landing />
      </Main>
    </div>
  );
}

export default App;
