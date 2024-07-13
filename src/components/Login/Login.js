import { Button, Container, Stack, TextField } from "@mui/material";
import { useReducer, useState } from "react";


const usernameReducer = (state, action) => {
    if (action.type === 'USERNAME_INPUT_CHANGE') { /// action.type: nop them tien
        return {
            value: action.payload, /// action.payload: nop them bao nhieu tien vd $10
            isValid: action.payload.trim() !== 0
        };
    }
    if (action.type === 'USERNAME_INPUT_BLUR') {
        return {
            value: state.value, /// lay lai trang thai (gia tri) cu
            isValid: state.value.trim() !== 0
        };
    }
}

export default function Login(props) {
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameState, usernameDispatcher] = useReducer(usernameReducer, {value: '', isValid: null});

    // const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    const validateUsername = () => {
        /// if username.trim() !== '' then true
        /// else (if) username.trim() === '' then false
        // setIsValidUsername(username.trim() !== ''); 
        usernameDispatcher({type: 'USERNAME_INPUT_BLUR'});
    }

    const validatePassword = () => {
        setIsValidPassword(password.trim() !== ''); 
    }

    // useEffect(() => {
    //     setFormIsValid(username.trim() !== '' && password.trim() !== '');
    // }, [password, username]);

    const usernameChange = (event) => {
        // setUsername(event.target.value);
        usernameDispatcher({type: 'USERNAME_INPUT_CHANGE', payload: event.target.value});
        setFormIsValid(event.target.value.trim() !== '' && password.trim() !== '');
    }
    const passwordChange = (event) => {
        setPassword(event.target.value);
        setFormIsValid(event.target.value.trim() !== '' && usernameState.isValid);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onLoginHandler(usernameState.value, password);

        // setUsername('');
        // setIsValidUsername(true);
        setPassword('');
        setIsValidPassword(true);
        setFormIsValid(false);
    }

    return (
        <Container sx={{width: '50%'}}>
            <form onSubmit={submitHandler}>
                <Stack spacing={2} pt={5}>
                    <TextField 
                        id="form-username"
                        error={usernameState.isValid === false}
                        helperText= {usernameState.isValid === false ? "Incorrect entry." : ""}
                        label="Username" 
                        variant="outlined"
                        value={usernameState.value}
                        onBlur={validateUsername}
                        onChange={usernameChange}
                    />
                    <TextField 
                        id="form-pass"
                        type="password"
                        error={!isValidPassword}
                        helperText= {!isValidPassword ? "Incorrect entry." : ""}
                        label="Password" 
                        variant="outlined"
                        value={password}
                        onBlur={validatePassword}
                        onChange={passwordChange}
                    />
                </Stack>
                <Button 
                    variant="contained" 
                    type="submit"
                    color="primary"
                    disabled={!formIsValid}
                >
                    Login
                </Button>
            </form>
        </Container>
    );


}