import React, { useState } from 'react';
import './App.css';
import data from './data';
import Form from './components/Form';
import TeamList from './components/TeamList';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
`;

function App() {
	const [teamMembers, setTeamMembers] = useState(data);

	function addMember(newMember) {
		setTeamMembers([...teamMembers, newMember]);
	}

	return (
		<Container className='App'>
			<Form addMember={addMember} />
			<TeamList teamMembers={teamMembers} />
		</Container>
	);
}

export default App;
