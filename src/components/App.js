import './App.css';
import FormInput from './shared/FormInput/FormInput';
import Preloader from './shared/Preloader/Preloader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormInput placeholder="Имя"/>
        <FormInput placeholder="E-mail"/>
        <FormInput placeholder="Пароль" type="password"/>
      </header>
    </div>
  );
}

export default App;
