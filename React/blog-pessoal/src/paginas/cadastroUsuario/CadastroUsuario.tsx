import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import './CadastroUsuario.css'

function CadastroUsuario() {
    return(
        <Grid container direction="row" justifyContent="center" alignItems="center"  > 
            <Grid item xs={6} className="imagem2"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10} className="imagem3"> 
                    <form > 
                        <Typography variant="h2" gutterBottom color="textSecondary" component="h2" align="center" className="textosC" >Cadastrar</Typography>
                        <TextField id='nome' label='nome' variant='filled' name='nome' margin="normal" fullWidth  />
                        <TextField id='usuário' label='usuário' variant='filled' name='usuário' margin="normal" fullWidth />
                        <TextField id='senha' label='senha' variant='filled' name='senha' margin="normal" type='password' fullWidth /> 
                        <TextField id='confirmarSenha' label='confirmar senha' variant='filled' name='confirmarSenha' margin="normal" type='password' fullWidth />                       
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                            </Button>
                        </Box>
                     </form>
                </Box>


            </Grid>
            

        </Grid>
    );
}

export default CadastroUsuario;