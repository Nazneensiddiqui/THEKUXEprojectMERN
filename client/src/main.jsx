import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './redux/Store.jsx';
import { Provider } from 'react-redux';
import LoginContext from './redux/loginContext.jsx';
createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
    <LoginContext>
    <App />  
    </LoginContext>
    </Provider>
)
