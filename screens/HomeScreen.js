import React, {useEffect, useState} from 'react';
import {View, SectionList, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import {Appointment, SectionTitle} from '../components';

const DATA = [
  {
    title: '14 сентября',
    data: [
      {
        time: '15:45',
        diagnosis: 'пульпит',
        active: true,
        user: {
          FullName: 'Владимир Высоцкий',
          avatar:
            'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
        },
      },
      {
        time: '16:45',
        diagnosis: 'замена зуба',
        user: {
          FullName: 'Майк Корж',
          avatar:
            'https://sun1-84.userapi.com/s/v1/ig2/dvaGrml7dEqbPjmYQt1NahI2Qr9sm0uzg2CaPrGO3alOcMXPrcOh895E3gVB-4whF8eddVKCTS5bMxumYMb8n2Ox.jpg?size=100x0&quality=96&crop=1,186,1618,1618&ava=1',
        },
      },
      {
        time: '15:45',
        diagnosis: 'пульпит',
        active: true,
        user: {
          FullName: 'Владимир Высоцкий',
          avatar:
            'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
        },
      },
      {
        time: '16:45',
        diagnosis: 'замена зуба',
        user: {
          FullName: 'Майк Корж',
          avatar:
            'https://sun1-84.userapi.com/s/v1/ig2/dvaGrml7dEqbPjmYQt1NahI2Qr9sm0uzg2CaPrGO3alOcMXPrcOh895E3gVB-4whF8eddVKCTS5bMxumYMb8n2Ox.jpg?size=100x0&quality=96&crop=1,186,1618,1618&ava=1',
        },
      },
    ],
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '15:45',
        diagnosis: 'пульпит',
        active: true,
        user: {
          FullName: 'Владимир Высоцкий',
          avatar:
            'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
        },
      },
      {
        time: '16:45',
        diagnosis: 'замена зуба',
        user: {
          FullName: 'Майк Корж',
          avatar:
            'https://sun1-84.userapi.com/s/v1/ig2/dvaGrml7dEqbPjmYQt1NahI2Qr9sm0uzg2CaPrGO3alOcMXPrcOh895E3gVB-4whF8eddVKCTS5bMxumYMb8n2Ox.jpg?size=100x0&quality=96&crop=1,186,1618,1618&ava=1',
        },
      },
      {
        time: '15:45',
        diagnosis: 'пульпит',
        active: true,
        user: {
          FullName: 'Владимир Высоцкий',
          avatar:
            'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
        },
      },
      {
        time: '16:45',
        diagnosis: 'замена зуба',
        user: {
          FullName: 'Майк Корж',
          avatar:
            'https://sun1-84.userapi.com/s/v1/ig2/dvaGrml7dEqbPjmYQt1NahI2Qr9sm0uzg2CaPrGO3alOcMXPrcOh895E3gVB-4whF8eddVKCTS5bMxumYMb8n2Ox.jpg?size=100x0&quality=96&crop=1,186,1618,1618&ava=1',
        },
      },
      {
        time: '15:45',
        diagnosis: 'пульпит',
        active: true,
        user: {
          FullName: 'Владимир Высоцкий',
          avatar:
            'https://sun1-28.userapi.com/s/v1/if1/o8zmmT3CxmJtbXzQ7uzGbtfN8dfoIWPWdcqJWBIwRzJJi4WRJzj75o43y2KE2XWSDKHj3Kk9.jpg?size=100x0&quality=96&crop=0,0,622,622&ava=1',
        },
      },
      {
        time: '16:45',
        diagnosis: 'замена зуба',
        user: {
          FullName: 'Майк Корж',
          avatar:
            'https://sun1-84.userapi.com/s/v1/ig2/dvaGrml7dEqbPjmYQt1NahI2Qr9sm0uzg2CaPrGO3alOcMXPrcOh895E3gVB-4whF8eddVKCTS5bMxumYMb8n2Ox.jpg?size=100x0&quality=96&crop=1,186,1618,1618&ava=1',
        },
      },
    ],
  },
];

const HomeScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: () => <HeaderTitle>Пациенты</HeaderTitle>,
    headerRight: () => (
      <MenuButton >
        <Icon name="menu-outline" size={30} />
      </MenuButton>
    ),
  });
  return (
    <Container>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <Appointment navigate={navigation.navigate} {...item} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Icon name="add" size={39} color="white" />
      </PlusButton>
    </Container>
  );
};

export default HomeScreen;

const HeaderTitle = styled(Text)`
  color: #2a86ff;
  font-size: 18px;
  font-weight: 700;
`;

const MenuButton = styled(TouchableOpacity)`
  margin-right: 10px;
`;

const PlusButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5;
  elevation: 4;
`;

const Container = styled(View)`
  flex: 1;
  padding: 0 20px;
`;
