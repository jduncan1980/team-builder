import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import { initialData } from './blankData';

function App() {
	const [teamMembers, setTeamMembers] = useState([]);
	// const [memberToEdit, setMemberToEdit] = useState({});

	const [open, setOpen] = useState(false);

	const [member, setMember] = useState(initialData);

	function handleEdit(e, mem) {
		handleToggle();
		setMember(mem);
	}

	function handleSubmit(e) {
		e.preventDefault();
		addMember(member);
		setMember(initialData);
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
		return () => {
			setMember(initialData);
		};
	}, [member]);

	useEffect(() => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=42&inc=name,location,email,phone,picture,id'
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
				<Navbar handleToggle={handleToggle} />
			</Grid>

			<Grid item>
				{teamMembers && (
					<TeamList teamMembers={teamMembers} handleEdit={handleEdit} />
				)}
			</Grid>

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
