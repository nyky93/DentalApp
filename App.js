import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {Group} from './components';

const Container = styled(View)`
  flex: 1;
  margin-top: 30px;
`;

export default function App() {
  return (
    <Container>
      <Group
        title="14 сентября"
        items={[
          {
            time: '15:45',
            diagnosis: 'пульпит',
            user: {
              FullName: 'Эрлан Жуманасыров',
              avatar:
                'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
            },
          },
          {
            time: '11:45',
            diagnosis: 'замена зуба',
            user: {
              FullName: 'Нурсултан Бактыбек уулу',
              avatar:
                'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
            },
          },
        ]}
      />
    </Container>
  );
}
