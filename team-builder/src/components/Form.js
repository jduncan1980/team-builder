import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input``
const Button = styled.button``
const Label = styled.label``

const Form = ({ addMember }) => {
	const [member, setMember] = useState({ name: '', email: '', role: '' });

	function handleSubmit(event) {
		event.preventDefault();
		addMember(member);
		setMember({ name: '', email: '', role: '' });
	}

	function handleChanges(event) {
		setMember({ ...member, [event.target.name]: event.target.value });
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor='name'>Name</label>
			<input
				type='text'
				placeholder='name'
				id='name'
				name='name'
				value={member.name}
				onChange={handleChanges}
			/>
			<label htmlFor='email'>Email</label>
			<input
				type='email'
				placeholder='email'
				id='email'
				name='email'
				value={member.email}
				onChange={handleChanges}
			/>
			<label htmlFor='role'>Role</label>
			<input
				type='text'
				placeholder='role'
				id='role'
				name='role'
				value={member.role}
				onChange={handleChanges}
			/>
			<button type='submit'>Submit</button>
		</StyledForm>
	);
};

export default Form;
