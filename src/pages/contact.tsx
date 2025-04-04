import { API_URL } from '@/constants/constants';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FormContainer = styled(Container)`
  padding: 2rem 0;
`;

interface FormData {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});
	const [responseMessage, setResponseMessage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			setError('All fields are required');
			return;
		}
		setError(null);
		try {
			const res = await fetch(`${API_URL}/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			const data = await res.json();
			setResponseMessage(data.message);
		} catch (err) {
			setError('Submission failed.');
		}
	};

	return (
		<>
			<Header />
			<FormContainer maxWidth="sm">
				{responseMessage ? (
					<Typography variant="h5">{responseMessage}</Typography>
				) : (
					<Box component="form" onSubmit={handleSubmit} noValidate>
						<Typography variant="h4" gutterBottom>Contact</Typography>
						{error && <Typography color="error">{error}</Typography>}
						<TextField
							label="Name"
							name="name"
							fullWidth
							margin="normal"
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Email"
							name="email"
							type="email"
							fullWidth
							margin="normal"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<TextField
							label="Message"
							name="message"
							fullWidth
							margin="normal"
							multiline
							rows={4}
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
							Submit
						</Button>
					</Box>
				)}
			</FormContainer>
			<Footer />
		</>
	);
}
