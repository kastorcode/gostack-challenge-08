import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
  	<Provider store={store}>
	    <Router history={history}>
	      <GlobalStyle/>
	      <ToastContainer autoClose={4000} />
	      <Header/>
		  <div className='container'>
	      	<Routes/>
	      	<Footer/>
		  </div>
	    </Router>
	  </Provider>
  );
}