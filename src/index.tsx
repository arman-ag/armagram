import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import { store } from './redux/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
