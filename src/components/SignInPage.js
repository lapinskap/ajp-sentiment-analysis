import React from 'react';
import styled from 'styled-components';
import { FormGroup, Label, Input, Button, Wrapper } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default class SignInPage extends React.Component {
render() {
    return (
        <Wrapper>
         <View>
            <Header>
             <Logo src="" />
             <AppName>AJP Sentiment Analysis</AppName>
            </Header>
            <Title>Sign in to your account</Title>
            <FormGroup>
                <Label for="email">Email address:</Label>
                <Input type="email" name="email" id="email" placeholder=""/>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input 
                type="password"
                name="password"
                id="password"
                placeholder=""
                />
            </FormGroup>
            <FormGroup className="custom-control custom-checkbox">
                <Input type="checkbox" className="custom-control-input" id="xyz"/>
                <Label className="custom-control-panel" for="xyz">
                I agree to the Terms of Service and Privacy Policy
                </Label>
            </FormGroup>
            <Bottom>
                <Button color="primary">Sign in</Button>
                <TextLink href="#">Forgot password?</TextLink>
                <TextLink href="#">Sign up</TextLink>
            </Bottom>
        </View>   
        </Wrapper>
    );
}
};

const Wrapper = styled.div`
display: flex;
justify-content: center;
user-select: none;
`;

const View = styled.div`
width: 40rem;
`;

