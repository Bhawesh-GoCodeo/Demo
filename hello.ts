import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

// Define the type for form data
interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  
  // State to store form submission status
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handler for form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Perform any additional actions such as sending data to an API
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" textAlign="center" mb={2}>
        User Information Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        type="email"
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>

      {submitted && (
        <Typography variant="body1" color="green" mt={2}>
          Form submitted! Name: {formData.name}, Email: {formData.email}
        </Typography>
      )}
    </Box>
  );
};

export default UserForm;
