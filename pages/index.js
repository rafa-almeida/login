import TemplateDefault from '../src/templates/Default'
import { Root, Imagem, Papers, AvPrincipal, Formulario, } from '../src/style/styles'

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';


export default function Home() {
  return (
    <TemplateDefault>
      <Root>
        <Grid container component="main" >
          
          <CssBaseline />
          <Imagem>
            <Grid item xs={false} sm={4} md={7} > 
              <img src='https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80'/>
            </Grid>
          </Imagem>
          
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Papers>
              <AvPrincipal>
                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
              </AvPrincipal>
              <Typography component="h1" variant="h5">
                Acesse a sua conta
              </Typography>
              <Formulario>
                <form  Validate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      
                    >
                      Entrar
                    </Button>
                  
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Não tem uma conta?
                        Cadastre-se
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        Crie sua conta
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Formulario>
            </Papers>
          </Grid>
      </Grid>
    </Root>
    </TemplateDefault>
  )
}