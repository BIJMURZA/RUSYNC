import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import MainMenu from './components/MainMenu.js'
import Authorization from './components/Authorization';
import About from './components/About'
import Settings from './components/Settings'
import User from './components/User'
import Games from './components/Games'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
    return (
        <Stack.Navigator initialRouteName="StackGames">
            <Stack.Screen name="Main"
                          component={MainMenu}
                          options={{ headerShown: false }}
            />
            <Stack.Screen name="Games"
                          component={Games}
                          options={{headerShown: true}}
            />
        </Stack.Navigator>
    );
}

const App = () => {
    const [authorizationStatus, setAuthorization] = useState<boolean | null>(null)
    const [username, setUsername] = useState('');

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
            {authorizationStatus ? (<Drawer.Screen name={username} component={User} />)
                : (<Drawer.Screen name="Вход">
                    {() => <Authorization onSuccess={() => setAuthorization(true)}
                                          onUsername={(login: string) => setUsername(login)} />}
                </Drawer.Screen>)}
            <Drawer.Screen name="Главное" component={Root}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}


export default App;
