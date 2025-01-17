import { useEffect, useState } from 'react';
import { defaultUser, IUser } from '../utils';
import { Button, Checkbox, TextField } from '@mui/material';

const RegisterPage = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [newUser, setNewUser] = useState<IUser>(defaultUser);
	useEffect(() => {
		console.log(users);
	}, [users]);
	return (
		<div>
			<h1>Register</h1>
			<TextField
				label={'Name'}
				value={newUser.name}
				onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
			/>
			<TextField
				label={'Age'}
				type='number'
				value={newUser.age}
				onChange={(e) =>
					setNewUser({ ...newUser, age: parseInt(e.target.value) })
				}
			/>
			<TextField
				label={'Email'}
				value={newUser.email}
				onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
			/>
			<Checkbox
				onChange={() => setNewUser({ ...newUser, isAdmin: !newUser.isAdmin })}
			/>

			<Button variant='outlined' onClick={() => setUsers([...users, newUser])}>
				new user
			</Button>
		</div>
	);
};

export default RegisterPage;
