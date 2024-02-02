import React, { useState, useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Dimensions, Image, Text, ScrollView} from 'react-native';

type rusync = {
    aid: number;
    game_name: string;
    price: string;
    game: string;
    games: string;
    minPrice: string;
}

const Width = Dimensions.get('window').width
const Height = Dimensions.get('window').height

const MainMenu = () => {
    const [games, setGames] = useState<rusync[]>([]);

    useEffect(() => {
        try {
            fetch('http://192.168.0.117:3000/games')
                .then(response => response.json())
                .then(data => {
                    setGames(data.games)
                })
                .catch(error => console.error(error));
        } catch (error) {

        }

    }, [])

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView>
                <View style={styles.mainContainer}>
                    {games.map((game, index) => (
                        <View key={index} style={styles.gameContainer}>
                            <View style={styles.gameImageContainer}>
                                <Image source={{ uri: `http://192.168.0.117:3000/assets/posters/${game.aid}.jpeg`}} style={styles.gameImage}/>
                            </View>
                            <View style={styles.gameTextContainer}>
                                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.gameNameText}>{game.game_name}</Text>
                                <View style={styles.label}></View>
                                <Text style={styles.gameNameText}>от {game.minPrice} ₽</Text>
                            </View>

                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

// @ts-ignore
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gameContainer: {
        height: 310,
        width: 180,
        backgroundColor: '#ebebeb',
        borderRadius: 7,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
    },
    gameImageContainer: {
        height: '75%',
        width: '100%',
    },
    gameTextContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 10,
    },
    gameImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },
    gameNameText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,

    },
    label: {
        borderBottomWidth: 1,
        borderColor: 'blue',
    }
})

export default MainMenu;
