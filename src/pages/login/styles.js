import styled from "styled-components";

const Container = styled.div`
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`

const FormContainer = styled.div`
height: 500px;
background-color: white;
width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;



`

const  FormTitle = styled.h1`
font-size: 32px;
margin-bottom: 16px;

`

export {
    Container,
    FormContainer,
    FormTitle
}