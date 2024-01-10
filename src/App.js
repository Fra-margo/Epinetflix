import './App.css';
import { createGlobalStyle } from 'styled-components';
import MyNavbar from './components/MyNavbar';
import MyHome from './components/MyHome';
import MyTvShow from './components/MyTvShow';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #221f1f;
  }

  h2,
  h4,
  footer {
    color: #f5f5f1;
  }

  .icons {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 18px;
    color: #f5f5f1;
  }

  .navbar-nav {
    font-size: 0.9em;
  }

  #kids {
    color: #f5f5f1;
    font-size: 0.8em;
  }

  .footer-icon {
    font-size: 1.3em;
    margin-left: 1%;
    margin-right: 1%;
    color: #838383;
  }

  .footer-links {
    text-align: left;
    font-size: 0.8em;
  }

  .footer-links p {
    margin-top: 3%;
    margin-bottom: 3%;
    color: #838383;
  }

  .footer-links a {
    color: #838383;
  }

  .footer-button {
    color: #838383;
    border-color: #838383;
  }

  .copyright {
    color: #838383;
    font-size: 0.6em;
  }

  .col img {
    transition: transform 0.2s;
  }

  .col img:hover {
    transform: scale(1.1);
  }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MyHome />}/>
        <Route path="/tvshow" element={<MyTvShow />}/>
        <Route path="/movie-details/:movieId" element={<MovieDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
