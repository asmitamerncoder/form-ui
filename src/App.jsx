import React , { useState } from 'react'
import './App.css'
import {Avatar, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Clear } from '@mui/icons-material';


function App() {

  const initialFormData = {
    name: '',
    email: '',
    password: '',
    contactNumber: '',
    gender: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); 
    setFormData(initialFormData)   
  };

  return (
    <>
      <div className='main-container'>
      <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
      <legend>
        <div className='sign-up-icon-wrapper'>
        <Avatar src="/broken-image.jpg" />
        <Typography variant="inherit" sx={
          {fontSize:'18px',
          fontWeight:'bold',
          textTransform:'uppercase',          
        }
        }>Sign Up</Typography>
        </div>
      </legend>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className='custom-Textfield'
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className='custom-Textfield'
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className='custom-Textfield'
      />
      <TextField
        name="contactNumber"
        label="Contact Number"
        variant="outlined"
        type="tel"
        value={formData.contactNumber}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className='custom-Textfield'
      />
      <FormControl variant="outlined" fullWidth margin="normal" className='custom-Textfield'>
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          label="Gender"
          value={formData.gender}
          onChange={handleChange}
          className='custom-Textfield'
          
        >
          <MenuItem value="male" >Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" className='submit-btn'>
        Submit
      </Button>
      </form>
      </div>
      </div>
    </>
  )
}

export default App
