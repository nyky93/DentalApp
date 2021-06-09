import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const PatientScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: () => <HeaderTitle>Карта пациента</HeaderTitle>,
  });
  return (
    <View>
      <Text>Patient screen</Text>
      <Text>Patient screen</Text>
      <Text>Patient screen</Text>
    </View>
  );
};

export default PatientScreen;

const HeaderTitle = styled(Text)`
  color: #2a86ff;
  font-size: 18px;
  font-weight: 700;
`;
