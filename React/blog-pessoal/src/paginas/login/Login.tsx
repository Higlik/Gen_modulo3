import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import './Login.css';

function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={12} sm={6}>
                <Box paddingX={6} >
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textosL" >Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin="normal" fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin="normal" type='password' fullWidth />
                        <Box marginRight={2} textAlign="center">
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={2} textAlign="center" >
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant="subtitle1" gutterBottom align="center" className="textosL" >Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} sm={6} className="imagem"  >

            </Grid>

        </Grid>
    )
}

export default Login;