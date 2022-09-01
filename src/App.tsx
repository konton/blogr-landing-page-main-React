import './components/App.css';
import Header from './components/Header';
import Content from './components/Content/Content';
import Information from './components/Content/Information';
       
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Information></Information>
    </div>
  );
}

export default App;
