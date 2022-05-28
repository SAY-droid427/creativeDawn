import './App.css';
import Header from './components/Header';

const App = () =>{
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>    
  )
}

export default App;
