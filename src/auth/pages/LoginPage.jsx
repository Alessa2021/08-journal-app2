//prioridad 0 react
import { useMemo } from 'react'

// prioridad 1 redux
import { useDispatch, useSelector } from 'react-redux'

//prioridad 2 react router dom
import { Link as RouterLink } from 'react-router-dom'

//prioridad 3 mui material
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

//prioridad 4 mi codigo personalizado
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'




export const LoginPage = () => {

  const { status } = useSelector( state => state.auth ) 

  const dispatch = useDispatch()

  const { email, password, onInputChange} = useForm({
    email: 'alejandra@google.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [ status ]) 

  const onSubmit = (event) => {
    event.preventDefault()
    console.log({email, password})
    dispatch( checkingAuthentication())
    //checkingAuthentication viene de los thunks
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch( startGoogleSignIn())
    //startGoogleSignIn viene de los thunks
  }

  return (

    <AuthLayout title="Login" >
      <form onSubmit={ onSubmit }>
          <Grid container >
            <Grid item xs={ 12 } sx={{ mt:2}} >
                <TextField 
                  label="correo" 
                  type="email" 
                  placeholder="correo@google.com" 
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                />

            <Grid item  xs={ 12 } sx={{ mt:2}} >
                <TextField 
                  label="contraseña" 
                  type="password" 
                  placeholder="Contraseña" 
                  fullWidth
                  name='password'
                  value={ password }
                  onChange={ onInputChange }
                />    
            </Grid>



            <Grid container spacing={ 2 } sx={{ mb: 2, mt:1}} >

              <Grid item xs={12} sm={6}  >
                <Button 
                  disabled={ isAuthenticating } 
                  type='submit' 
                  variant='contained' 
                  fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}  >
                <Button 
                  disabled={ isAuthenticating } 
                  variant='contained' 
                  fullWidth
                  onClick={ onGoogleSignIn }
                  >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={ RouterLink } color='inherit' to="/auth/register">Crear una cuenta</Link>
            

          </Grid> 

          </Grid>
        </form>

    </AuthLayout>
    
        

      
  )
}
