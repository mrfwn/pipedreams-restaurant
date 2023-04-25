import { BrowserRouter as Router } from 'react-router-dom';
import { WeekdayProvider } from './hooks/AppProvider';
import GlobalStyle from './styles/global';
import { Header  } from './components/Header';
import { Routes } from './routes';

const App = () =>  (
    <Router>
      <WeekdayProvider>
        <Header />
        <Routes />
        <GlobalStyle />
      </WeekdayProvider>
    </Router>
);

export default App;
