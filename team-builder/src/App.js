import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { Grid } from '@material-ui/core';

function App() {
	const [teamMembers, setTeamMembers] = useState([]);

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
				<Form addMember={addMember} />
			</Grid>

			<Grid item>{teamMembers && <TeamList teamMembers={teamMembers} />}</Grid>
		</Grid>
	);
}

export default App;
