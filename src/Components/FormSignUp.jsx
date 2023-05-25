import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


function FormSignUp({ handleSubmit }) {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  const [name, setName] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [prom, setProm] = useState(true)
  const [nov, setNov] = useState(false)
  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: 'Deben de ser al menos 3 caracteres '
    },
  })

  function validarNombre(nombre) {
    if(nombre.length >= 3){
      return { name: {error: false , message: ''} }
    }else {
      return { name: {error: true, message: 'Deben de ser al menos 3 caracteres '} }
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({
        name,
        lastName,
        email,
        prom,
        nov
      })
    }}>
        <TextField required id="name" 
        variant='outlined' 
        label="Nombre"
        fullWidth
        margin = 'normal'
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}
        error ={ errors.name.error }
        helperText = {errors.name.error 
                      ? errors.name.message 
                      : ''}
        onBlur={(e) => {
          setErrors(
          validarNombre(e.target.value))
        }}/>
        <TextField required id="lastName" 
        variant='outlined' 
        label="Apellidos"
        fullWidth
        margin = 'normal'
        onChange={(e) => {
          setLastname(e.target.value)
        }}
        value={lastName}/>
        <TextField required id="email" 
        variant='outlined' 
        label="Email"
        fullWidth
        margin = 'normal'
        onChange={ (e) =>{
          setEmail(e.target.value)
        }}
        value={email}/>
        <FormGroup>
        <FormControlLabel 
        control={<Android12Switch  defaultChecked ={prom} onChange={(e) => {
          setProm(e.target.checked)
        }} value={prom}/>} 
        label = 'Promociones' />
        <FormControlLabel control={<Android12Switch defaultChecked ={nov} onChange={(e) => {
          setNov(e.target.checked)
        }} value={nov}  />} label = 'Novedades' />
        </FormGroup>
        
        <Button type='submit' fullWidth variant='contained'>Registrarse</Button>
    </form>
  )
}

export default FormSignUp