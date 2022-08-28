import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TrackProvider } from './context/TrackContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
    <Provider store={store}>
      <AuthProvider>
        <TrackProvider>
          <Router>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </Router>
        </TrackProvider>
      </AuthProvider>
    </Provider>
    </>
);

