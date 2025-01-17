import { Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import Navbar from './Login/Navbar';
import RegisterPage from './Login/RegisterPage';
import Notepad from './Notepad/Notepad';

function App() {
	//return <Notepad />;
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</>
	);
}

export default App;
