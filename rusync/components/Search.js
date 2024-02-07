import React, {useState} from 'react';
import {View, Button, SafeAreaView, StyleSheet, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';


const Search = ({navigation}) => {
    const [follower, setFollower] = useState([]);
    const [search, setSearch] = useState('');

    const searchFriends = async () => {
        const response = await fetch('http://192.168.0.117:3000/search', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ username: search, followers: search, following: search})
        })
        const data = await response.json();
        setFollower(data);
    }

    return (
        <SafeAreaView>
            <TextInput placeholder="Укажите никнейм"
            value={search}
            onChangeText={setSearch}/>
            <Button title="Поиск" onPress={searchFriends} />
            <ScrollView>
                {follower.map((item) => (
                    <TouchableOpacity key={item.username}
                    onPress={() => navigation.navigate('Personal_account', {username: item.username})}>
                    <Text>{item.username}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search;
