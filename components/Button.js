import React from 'react'
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = ({ children }) => {
    return (
      <ButtonWrapper>
        <ButtonText>{children}</ButtonText>
      </ButtonWrapper>
    );
}


const ButtonWrapper = styled(TouchableOpacity)`
  background: #2a86ff;
  font-size: 16px;
  font-weight: 600;
  height: 45px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: white;
  font-weight: 400;
  font-size: 16px;
`;

export default Button;