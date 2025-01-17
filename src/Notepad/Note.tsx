import { INote } from '../utils';

const Note = (props: { noteObj: INote }) => {
	const note = props.noteObj;
	console.log(note);
	return (
		<div
			style={{
				color: note.color,
				fontSize: note.size.toString() + 'rem',
			}}>
			{note.text}
			{note.smiley === -1 ? '' : String.fromCodePoint(note.smiley)}
		</div>
	);
};

export default Note;
