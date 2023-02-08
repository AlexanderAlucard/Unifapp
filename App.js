import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { Inicio } from './Pages/Inicio';
import { Noticias } from './Pages/Noticias';
import { Mapa } from './Pages/Mapas';


const Menu = createDrawerNavigator()




export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Inicio' component={Inicio} />
        <Menu.Screen name='Mapa' component={Mapa} />
        <Menu.Screen name='Noticias' component={Noticias} />

      </Menu.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
