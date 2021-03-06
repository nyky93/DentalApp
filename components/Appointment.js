import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

import { GrayText } from '../components';

const GroupItem = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  border-bottom-color: #d7dde2;
  border-bottom-width: 1px;
`;

const Avatar = styled(Image)`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const FullName = styled(Text)`
  font-weight: 600;
  font-size: 16px;
`;

const GroupDate = styled(Text)`
  background: ${props => (props.active ? '#2A86FF' : '#e9f5ff')};
  color: ${props => (props.active ? '#fff' : '#4294ff')};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

const Group = ({user, diagnosis, active, time, navigate}) => {
  return (
    <GroupItem onPress={navigate.bind(this, 'Patient')}>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{flex: 1}}>
        <FullName>{user.FullName}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  );
};

Group.defaultProps = {
  groupTitle: 'Untitled',
  items: [],
};

export default Group;
