import {Provider} from "react-redux";
import {MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'tailwindcss/tailwind.css';
import './App.css';
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}
