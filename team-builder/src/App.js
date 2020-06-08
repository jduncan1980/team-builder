import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';

function App() {
	const [teamMembers, setTeamMembers] = useState([]);
	const [memberToEdit, setMemberToEdit] = useState({});

	const [open, setOpen] = useState(false);

	const [member, setMember] = useState({
		name: { first: '', last: '' },
		email: '',
		location: { city: '', state: '', country: '' },
		phone: '',
		picture: {
			medium:
				'http://www.sprlaw.net/wp-content/uploads/2017/05/blank_headshot.jpg',
		},
	});

	function handleSubmit(event) {
		event.preventDefault();
		addMember(member);
		setMember({
			name: { first: '', last: '' },
			email: '',
			location: { city: '', state: '', country: '' },
			phone: '',
			picture: {
				medium:
					'http://www.sprlaw.net/wp-content/uploads/2017/05/blank_headshot.jpg',
			},
		});
		handleToggle();
	}

	function handleChanges(e) {
		e.preventDefault();
		const [section, key] = e.target.name.split('.');

		if (key) {
			setMember({
				...member,
				[section]: {
					...member[section],
					[key]: e.target.value,
				},
			});
		} else {
			setMember({
				...member,
				[section]: e.target.value,
			});
		}
	}

	function handleToggle() {
		setOpen(!open);
	}
	useEffect(() => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=42&inc=name,location,email,phone,picture'
			)
			.then((res) => {
				setTeamMembers(res.data.results);
			});
	}, []);

	function addMember(newMember) {
		setTeamMembers([...teamMembers, newMember]);
	}
	console.log(teamMembers);
	return (
		<Grid container fluid='true' direction='column' alignItems='center'>
			<Grid item>
				{/* <Form addMember={addMember} /> */}
				<Navbar handleToggle={handleToggle} />
			</Grid>

			<Grid item>{teamMembers && <TeamList teamMembers={teamMembers} />}</Grid>
			<Grid item>
				{' '}
				<Form
					open={open}
					handleToggle={handleToggle}
					handleChanges={handleChanges}
					handleSubmit={handleSubmit}
					member={member}
				/>
			</Grid>
		</Grid>
	);
}

export default App;
