import './App.css';
import ReportsContainer from './components/Report/ReportsContainer';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
      <h1> Ежедневные отчеты </h1>
      </header>
      <main className="main">
        <div className="left-block"> <ReportsContainer /></div>
        <div className="center-block"> Центральная часть</div>
      </main>
    </div>

  );
}

export default App;
