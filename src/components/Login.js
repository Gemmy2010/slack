import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300" />
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login

const LoginContainer = styled.div``;

const LoginInnerContainer = styled.div`
> img {
    object-fit:contain;
    height:100px;
    margin-bottom:40px;
}



`;
