import React from 'react';
import styled from 'styled-components';
import { CenteredContainer, SmallContainer as SmallContainerTemplate, Title } from '../theme';

let SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

let Header = styled.header`
  text-align: center;
  margin-bottom: ${({theme}) => theme.dims.margin.normal };
`;



let UserFormLayout = (props) => {
  return(
    <CenteredContainer>
      <SmallContainer>
        <Header>
          <img src="/logo.svg" alt="Logo de la aplicación" height="120"/>
          <div>
            <Title>TicTak</Title>
          </div>          
        </Header>
        {props.children}
      </SmallContainer>
    </CenteredContainer>
  )
}

export default UserFormLayout;