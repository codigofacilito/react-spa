import React from 'react';
import { ClearButton, SvgButton } from '../theme';

let ShareButton = ({ video }) => {
  
  return (
    <ClearButton>
      <SvgButton src="/share.svg" ></SvgButton>
    </ClearButton>
  )
}

export default ShareButton;