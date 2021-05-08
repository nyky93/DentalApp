import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

const GroupDate = styled(Text)`
  background: #e9f5ff;
  border-radius: 18px;
  font-weight: 600;
  color: #4294ff;
`;

const GrayText = styled(Text)`
  font-size: 16px;
  color: #8b979f;
`;

const FullName = styled(Text)`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled(Image)`
   border-radius: 50px;
   width: 40px;
   height: 40px;
   margin-right 15px;
`;

const GroupItem = styled(View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
`;

const GroupTitle = styled(Text)`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Group = styled(View)`
  padding: 0 20px;
`;

const Container = styled(View)`
   flex: 1; 
   margin-top 50px;
`;

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle> 11 сентября </GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri:
                'https://sun1-23.userapi.com/s/v1/if1/owIVNm4atfdgJzhzrAoucj-x4S0HcWr7FKI7nIZAtNHz3Y2_NSwyxlaZWCpFGY2T7zSZrE-m.jpg?size=100x0&quality=96&crop=821,0,866,866&ava=1',
            }}
          />
          <View>
            <FullName>Борис Николай</FullName>
            <GrayText>пульпит, удаление зуба</GrayText>
          </View>
          <GroupDate> 12:30 </GroupDate>
        </GroupItem>
      </Group>
    </Container>
  );
}
