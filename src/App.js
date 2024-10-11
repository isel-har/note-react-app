import	{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 	NotesListPage from './pages/NotesListPage';
import	Header from './components/Header';
import	NotePage from './pages/NotePage';
import	NoPage from './pages/NoPage';
import	'./App.css';


function App() {
  return (
    <Router>
    	<div className="note-container">
    		<Header />
			<Routes>
				<Route path="/" exact element={<NotesListPage />} />
				<Route path="/note/:id" element={<NotePage />} />
				<Route path="/new" element={<NotePage />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
      	</div>
    </Router>
  );
}

export default App;
