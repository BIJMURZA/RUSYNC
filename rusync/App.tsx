import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainMenu from './components/MainMenu'
import Authorization from './components/Authorization';
import About from './components/About'
import Settings from './components/Settings'
import User from './components/User'


const Drawer = createDrawerNavigator();

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
            <Drawer.Screen name="Главное" component={MainMenu}></Drawer.Screen>
            {/*<Drawer.Screen name="Об RUSYNC" component={About}></Drawer.Screen>*/}
            <Drawer.Screen name="Настройки" component={Settings}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
