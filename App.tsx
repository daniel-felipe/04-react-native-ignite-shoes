import { useEffect } from 'react';

import { StatusBar } from 'react-native';
import { CartContextProvider } from './src/contexts/CartContext';
import { NotificationClickEvent, OneSignal } from 'react-native-onesignal';
import { NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';

OneSignal.initialize('d9dfba7d-7895-4742-a591-771f08391666');
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate();

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result;

      switch (actionId) {
        case '1':
          console.log('Ver todos');
          break;
        case '2':
          console.log('Ver pedido');
          break;
        default:
          console.log('Nenhum botão de ação selecionado');
      }
    };

    OneSignal.Notifications.addEventListener('click', handleNotificationClick);

    return () =>
      OneSignal.Notifications.removeEventListener(
        'click',
        handleNotificationClick
      );
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
