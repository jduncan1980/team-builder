import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import { initialData } from './blankData';

function App() {
	// All users to be rendered as cards
	const [teamMembers, setTeamMembers] = useState([]);

	// member being edited
	const [memberToEdit, setMemberToEdit] = useState({});

	//State to control Form Drawer
	const [open, setOpen] = useState(false);

	// Form opened by add new button or edit button
	const [isEditing, setIsEditing] = useState(false);

	//Member being added
	const [member, setMember] = useState(initialData);

	// Handles User Editing
	function handleEdit(mem) {
		setIsEditing(true);
		handleToggle();
		setMemberToEdit(mem);
		console.log(mem);
	}

	//side effect for editing
	useEffect(() => {
		return () => {
			setMember(initialData);
			setIsEditing(false);
			console.log(memberToEdit);
		};
	}, [memberToEdit]);

	// Handles form submission
	function handleSubmit(e) {
		e.preventDefault();
		addMember(member);
		setMember(initialData);
		handleToggle();
	}

	function handleChanges(e) {
		e.preventDefault();
		const [section, key] = e.target.name.split('.');

		// If property is nested, do...
		if (key) {
			setMember({
				...member,
				[section]: {
					...member[section],
					[key]: e.target.value,
				},
			});
			// If property not nested, do...
		} else {
			setMember({
				...member,
				[section]: e.target.value,
			});
		}
	}

	//Handles Form Drawer open/close
	function handleToggle() {
		setOpen(!open);
	}

	// Get data from Random User Generator API
	useEffect(() => {
		axios
			.get(
				'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=42&inc=name,location,email,phone,picture,id'
			)
			.then((res) => {
				setTeamMembers(res.data.results);
			});
	}, []);

	//Add a new Employee Card
	function addMember(newMember) {
		setTeamMembers([...teamMembers, newMember]);
	}

	// console.log(teamMembers);

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
				<Form
					open={open}
					handleToggle={handleToggle}
					handleChanges={handleChanges}
					handleSubmit={handleSubmit}
					member={member}
					memberToEdit={memberToEdit}
					isEditing={isEditing}
				/>
			</Grid>
		</Grid>
	);
}

export default App;
