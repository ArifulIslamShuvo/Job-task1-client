import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import { Route, Routes } from 'react-router';
import CompletedTasks from './components/Home/CompletedTasks';
import ToDo from './components/Home/ToDo';
import Calendar from './components/Home/Calendar';
import EditTask from './components/Home/EditTask';
import TaskRow from './components/Home/TaskRow';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="completed-tasks" element={<CompletedTasks />} />
        <Route path="to-do" element={<ToDo />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="home/:id" element={<EditTask />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
