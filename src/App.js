import './App.css';
import AddNote from './components/AddNote/AddNote';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="background">
      <div className="app-container">
        <Header />
        <AddNote />
      </div>
    </div>
  );
}

export default App;
