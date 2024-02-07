import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import MainMenu from './components/MainMenu.js'
import Authorization from './components/Authorization';
import About from './components/About'
import Settings from './components/Settings'
import Personal_account from './components/Personal_account'
import Games from './components/Games'
import Search from './components/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

type userType = {
    username: string;
};

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
    const [user, setUser] = useState<userType | null >(null)

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
            {authorizationStatus ? (<Drawer.Screen name={user!.username} component={Personal_account}
                initialParams={{user: user}}/>)
                : (<Drawer.Screen name="Вход">
                    {() => <Authorization onSuccess={() => setAuthorization(true)}
                                          onUser={(user: userType) => setUser(user)} />}
                </Drawer.Screen>)}
            <Drawer.Screen name="Главное" component={Root}></Drawer.Screen>
            {/*<Drawer.Screen name="Поиск пользователя" component={Search}></Drawer.Screen>*/}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}


export default App;
