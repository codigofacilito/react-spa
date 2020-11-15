import React from 'react';
import styled from 'styled-components';

export let Fieldset = styled.fieldset`
  border:0;
  max-width:${({theme}) => theme.dims.widths.forms };
  display:block;
  margin-left:auto;
  margin-right:auto;
  text-align:left;
  margin-top:${({ theme }) => theme.dims.margin.intersection };
  padding:0;
  & label{
    opacity: 0.56;
  }
`;

let Input = styled.input`
  padding: ${({ theme }) => theme.dims.padding.largePadding};
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.dims.margin.small};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
  background-color: ${({ theme }) => theme.colors.gray};
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.silver };

  
`;

let AppInput = (props) => {
  return(
    <Fieldset>
      <label htmlFor="">{props.label}</label>
      <Input ref={props.register} {...props}></Input>
    </Fieldset>
  )
}

export default AppInput;