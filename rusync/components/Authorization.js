import React, { useState, useEffect} from 'react';
import {View, Button, TextInput, StyleSheet, SafeAreaView} from 'react-native';


const Authorization = ({ onSuccess, onUsername }) => {
    const [loginInput, setLogin] = useState('');
    const [passwordInput, setPassword] = useState('');

    const authorization = async () => {
        try {
            fetch('http://192.168.0.117:3000/accounts/login/password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    login: loginInput,
                    password: passwordInput
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Успешный вход!')
                        onUsername(loginInput)
                        onSuccess();
                    }
                    else {
                        alert('Неверный логин и пароль! \nПовторите попытку')
                    }
                })
        } catch (error) {
            alert('Сервер не отвечает, повторите попытку позже!')
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <TextInput style={styles.textInput} onChangeText={setLogin} value={loginInput} placeholder="Логин ..."/>
            <TextInput style={styles.textInput} onChangeText={setPassword} value={passwordInput} placeholder="Пароль ..."/>
            <Button title="Авторизация" color={"blue"} onPress={authorization} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        width: '70%',
    }
})


export default Authorization;
