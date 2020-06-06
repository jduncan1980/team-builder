import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';

const Container = styled.div`
	width: 50%;
	background-color: gray;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

const TeamList = ({ teamMembers }) => {
	return (
		<Container>
			{teamMembers.map((member) => {
				return (
					<TeamMemberCard
						name={member.name}
						email={member.email}
						role={member.role}
						key={uuidv1()}
					/>
				);
			})}
		</Container>
	);
};

export default TeamList;
