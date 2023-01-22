import Button from "../../components/common/Button"
import { Container, FormContainer, FormTitle } from "./styles"

const Login = () => {
    return (
        <Container>

                <FormContainer>
                <FormTitle>Login</FormTitle>
                    <span>Insira seus dados</span>
                    <input label="Email" />
                    <input label="Senha" type='password' />

                    <Button> Entrar </Button>
                </FormContainer>
        </Container>
    )
}

export default Login