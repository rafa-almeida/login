import React, {useState} from 'react';
import {useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import TemplateDefault from '../src/templates/Default'
import { BrowserRouter, } from 'react-router-dom';
import Link from "next/link"
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

export default function Register() {

    const schema = yup.object({
        nome: yup.string().required(),
        email: yup.string().required().email("Email inválido"),
        password: yup.number().required().min(6),
    });

    const { 
        handleSubmit, 
        register, 
    } = useForm({
        resolver: yupResolver(schema)
    });

    const save = (data) => {
        console.log(data)
    };

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
                        <Formulario >
                            <form onSubmit={handleSubmit(save)}  >
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
                                {...register("nome")}
                                
                            />
                            
                            <TextField
                                variant="outlined"
                                margin="normal"
                                
                                fullWidth
                                id="email"
                                label="Digite um e-mail válido"
                                name="email"
                                autoFocus
                                autoComplete="email" 
                                {...register("email")}
                                                                
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                
                                fullWidth
                                name="password"
                                label="Digite a sua Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register("password")}
                                
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                
                                fullWidth
                                name="password"
                                label="Digite a sua Senha Novamente"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register("password")}
                            />
                                <span> A senha deve possuir no mínimo 6 caracteres, e possuir somente números</span>

                            
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
                                <Link href="#" variant="body2">
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