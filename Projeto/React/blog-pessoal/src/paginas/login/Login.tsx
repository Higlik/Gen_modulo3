import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import './Login.css';

function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{fontWeight: 'bold'}} >Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin="normal" fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin="normal" type='password'fullWidth />
                        <Box>
                            <Link to= '/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginTop={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
                <Grid xs={6} style={{
                    backgroundImage: `url(https://www.google.com/search?q=dark+souls+i&sxsrf=AOaemvKzFG55AI0LPQCVzshpzczzZ2ZrLQ:1642553512314&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiqwvrUzLz1AhVZrJUCHakkBxUQ_AUoAnoECAEQBA&biw=1920&bih=969&dpr=1#imgrc=krU_boq_oWmHDM&imgdii=omoi0OkKDkVm9M)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh' , backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;