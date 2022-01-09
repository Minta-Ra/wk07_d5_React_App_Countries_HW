import './App.css';
import CountryContainer from './containers/CountryContainer';

function App() {

  const links = [
    {name: "All Countries", url: "https://restcountries.com/v3.1/all"}
  ];

  return (
    <CountryContainer links={links}/>
  );
};

export default App;
