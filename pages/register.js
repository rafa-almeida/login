import React from 'react';
import TemplateDefault from '../src/templates/Default'
import { Link } from 'react-router-dom';
import { Root, Imagem, Papers, AvPrincipal, Formulario, Font } from '../src/style/styles'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography'

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
                        <Font>
                            <Typography component="h1" variant="h5">
                                Crie a sua conta
                            </Typography>
                        </Font>
                        <Formulario>
                            <form  Validate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="nome"
                                label="Nome Completo"
                                name="nome"
                                autoComplete="nome"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Digite seu E-mail"
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
                                label="Digite a sua Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Digite a sua Senha Novamente"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                                <span> A senha deve possuir 6 caracteres, conter números e uma letra maiúscula</span>

                            
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                
                                >
                                Cadastrar
                                </Button>
                            
                            <Grid container>
                                <Grid item xs>
                                <Link to="#" variant="body2">
                                    Acesse nossa política de privacidade
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
};