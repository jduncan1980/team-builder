import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	border: 1px solid grey;
	background-color: white;
	display: flex;
	flex-direction: column;
	width: 45%;
	padding: 1rem;
	margin: 0.5rem;
`;

const CardHeading = styled.h3`
	font-family: inherit;
	font-size: 1.75rem;
`;

const CardDetail = styled.span`
	margin-bottom: 0.5rem;
	font-size: 1.25rem;
`;

const TeamMemberCard = ({ name, email, role }) => {
	return (
		<Card>
			<CardHeading>{name}</CardHeading>
			<CardDetail>{email}</CardDetail>
			<CardDetail>{role}</CardDetail>
		</Card>
	);
};

export default TeamMemberCard;
