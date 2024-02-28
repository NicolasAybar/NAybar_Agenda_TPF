import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import { Titulo } from './componentes/Titulo/titulo.jsx';
//import { SearchComponent } from './componentes/searchComponents/searchComponents.jsx';
import Menu from '../src/componentes/Menu/Menu.jsx';
//import {Home} from '../src/componentes/Home/Home.jsx';
//import {Footer} from '../src/componentes/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Menu/>
  </React.StrictMode>,
)
