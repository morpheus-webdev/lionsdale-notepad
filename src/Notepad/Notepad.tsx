import {
	Button,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
	defaultNote,
	INote,
	SmileyIntType,
	TextColorType,
	TextSizeType,
} from '../utils';
import Note from './Note';

const Notepad = () => {
	const [notes, setNotes] = useState<Array<INote>>([]);
	const [newNote, setNewNote] = useState<INote>(defaultNote);
	useEffect(() => {
		console.log(newNote);
	}, [newNote]);
	return (
		<>
			<h1>Notepad</h1>
			<TextField
				label='New task'
				onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
			/>
			<Select
				label='Color'
				value={newNote.color}
				onChange={(e) =>
					setNewNote({ ...newNote, color: e.target.value as TextColorType })
				}>
				<MenuItem value={'red'}>Red</MenuItem>
				<MenuItem value={'Chartreuse'}>Chartreuse</MenuItem>
				<MenuItem value={'Coral'}>Coral</MenuItem>
			</Select>
			<Select
				label='Size'
				value={newNote.size}
				onChange={(e) =>
					setNewNote({ ...newNote, size: e.target.value as TextSizeType })
				}>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={1.5}>1.5</MenuItem>
				<MenuItem value={2}>2</MenuItem>
			</Select>
			<Select
				label='Smiley'
				value={newNote.smiley}
				onChange={(e) =>
					setNewNote({ ...newNote, smiley: e.target.value as SmileyIntType })
				}>
				<MenuItem value={-1}>none</MenuItem>
				<MenuItem value={128512}>{String.fromCodePoint(128512)}</MenuItem>
				<MenuItem value={128513}>{String.fromCodePoint(128513)}</MenuItem>
				<MenuItem value={128514}>{String.fromCodePoint(128514)}</MenuItem>
			</Select>
			<Button variant='outlined' onClick={() => setNotes([...notes, newNote])}>
				Add
			</Button>
			<h1>Number of notes: {notes.length}</h1>
			{notes.map((note, index) => {
				return <Note key={index} noteObj={note} />;
			})}
		</>
	);
};

export default Notepad;
