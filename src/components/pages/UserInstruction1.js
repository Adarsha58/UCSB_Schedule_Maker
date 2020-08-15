import React, {Component} from "react";
import { Container, Typography } from "@material-ui/core";
import {withStyles} from "@material-ui/styles";

const classes = (theme) => ({
    instructionContainer: {
        width: "100%",
        height: "100%",
        
    },
    caligraphy: {
        margin: "0 auto"
    }
})

class UserInstruction1 extends Component{
    render(){
        return(
            <Container maxWidth={false} className={classes.instructionContainer}>
                <Typography variant="h2" className={classes.caligraphy}>
                    LETS GET <br/> STARTED!
                </Typography>
            </Container>
        )
    }
}

export default withStyles(classes)(UserInstruction1);