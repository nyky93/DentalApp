import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import {GrayText, Button} from '../components';


const PatientScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: () => <HeaderTitle>Карта пациента</HeaderTitle>,
  });
  return (
    <Container>
      <PatientFullname>Марина Алмазова</PatientFullname>
      <GrayText>+7 (914) 222-33-22 </GrayText>
      <PatientButtons>
        <FormulaButtonView>
            <Button>Формула зубов</Button>
        </FormulaButtonView>
        <PhoneButtonView>
            <Button>R</Button>
        </PhoneButtonView>
      </PatientButtons>
    </Container>
  );
};

export default PatientScreen;

const FormulaButtonView = styled(View)`
  flex: 1;
`;

const PhoneButtonView = styled(View)`
  margin-left: 10px;
  width: 45px;
`;


const PatientButtons = styled(View)`
 flex:1;
 flex-direction: row;
 margin-top: 20px;
`;

const HeaderTitle = styled(Text)`
  color: #2a86ff;
  font-size: 18px;
  font-weight: 700;
`;

const PatientFullname = styled(Text)`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;

const Container = styled(View)`
   padding: 25px;
`;

