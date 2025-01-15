import { ChangeEventHandler, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import { Button, TextField } from '@mui/material';

function App() {
	const [notes, setNotes] = useState<Array<string>>([]);
	const [newNote, setNewNote] = useState<string>('');
	useEffect(() => {
		console.log('useEffect called');
		console.log(newNote);
	}, []);
	return (
		<>
			<div>
				<h1>Notepad</h1>
				<TextField
					label='New task'
					onChange={(e) => setNewNote(e.target.value)}
				/>
				<Button
					variant='outlined'
					onClick={() => setNotes([...notes, newNote])}>
					Add
				</Button>
				<p>Number of notes: {notes.length}</p>
				{notes.map((note, index) => {
					return (
						<p key={index}>
							{index + 1}. {note}
						</p>
					);
				})}
			</div>
		</>
	);
}

export default App;
