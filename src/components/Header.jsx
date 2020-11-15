import React from 'react';
import styled from 'styled-components';
import { Title } from '../theme';

let Header = (props) => {
  return(
    <header className={props.className}>
      <img src="/logo.svg" height="45"></img>
      <Title>TicTak</Title>
    </header>
  )
}

export default styled(Header)`
  text-align:center;
  padding:1em 0;
  img{
    vertical-align: middle;
  }
`;