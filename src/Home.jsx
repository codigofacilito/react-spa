import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

let linkStyle = css`
  font-size:0.8em;
`;

//Tagged templates
let Example = styled.div`
  height: 200px;
  transition: all 0.2s;
  padding:50px;
  background-color: ${ ({theme})=> theme.colors.dark };

  & a{
    color:purple;
  }

  & > div{

  }

  &.important{
    background-color: yellow;
  }
`;

let Button = styled.button`
  border:solid 1px red;
  background-color: transparent;
  outline: 0;
  font-size:1em;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
  border-radius:2px;
  ${linkStyle}
`;

let PrimaryButton = styled(Button)`
  background-color:red;
  border:0;
  ${linkStyle}
`;

let AppLink = styled(Link)`
  text-decoration:underline;
  font-weight:bold;
  text-transform: uppercase;
`;

let AppInput = styled.input.attrs((props)=>{
  return {
    type: props.type ? props.type : "text"
  }
})`
  border:solid 1px red;
  .important &{
    background-color: pink;
  }
`;


let HomePage = (props) => {
  return(
    <Example >
      <PrimaryButton>Enviar</PrimaryButton>
      <Button>Cancelar</Button>
      <AppInput />
    </Example>
  )
}

export default HomePage;