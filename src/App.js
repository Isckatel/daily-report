import './App.css';
import CurrReportContainer from './components/CurrReport/CurrReportContainer';
import ReportsContainer from './components/Reports/ReportsContainer';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
      <h1> Ежедневные отчеты </h1>
      </header>
      <main className="main">
        <div className="left-block"> <ReportsContainer /></div>
        <div className="center-block"> <CurrReportContainer/></div>
      </main>
    </div>

  );
}

export default App;
