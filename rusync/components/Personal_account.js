import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from "@react-navigation/native";


const Personal_account = () => {
    const [activeTab, setActiveTab] = useState('lenta');
    const route = useRoute();
    const {user} = route.params

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.bannerContainer}>
                <Image source={{ uri: `http://192.168.0.117:3000/assets/user_banner/user_${user.id}_banner.jpeg`}} style={{height: '100%', width: '100%', resizeMode: 'cover'}}></Image>
            </View>
            <View style={styles.profile_image_container}>
                <Image source={{ uri: `http://192.168.0.117:3000/assets/user_avatar/user_${user.id}_avatar.jpeg`}} style={styles.imageAvatar}></Image>
            </View>
            <Text style={styles.textNickname}> {user.username} </Text>
            <View style={styles.quoteContainer}>
                <Text style={styles.textQuote}> {user.quote} </Text>
            </View>
            <View style={styles.l_f_follow}>
                <TouchableOpacity style={[
                    styles.buttomTab,
                    activeTab === 'lenta' && styles.activeTab]}
                                  onPress={() => setActiveTab('lenta')}>
                    <Text style={styles.textTab}>Лента</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    styles.buttomTab,
                    activeTab === 'followers' && styles.activeTab]}
                                  onPress={() => setActiveTab('followers')}>
                    <Text style={styles.textTab}>Подписчики</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    styles.buttomTab,
                    activeTab === 'following' && styles.activeTab]}
                                  onPress={() => setActiveTab('following')}>
                    <Text style={styles.textTab}>Подписки</Text>
                </TouchableOpacity>
            </View>
            {activeTab === 'lenta' && (
                <View>
                    <Text style={styles.textInfoContainer}>Лента</Text>
                </View>
            )}
            {activeTab === 'followers' && (
                <View>
                    <Text style={styles.textInfoContainer}>Подписчики</Text>
                </View>
            )}
            {activeTab === 'following' && (
                <View>
                    <Text style={styles.textInfoContainer}>Подписки</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    bannerContainer: {
        height: 170,
        width: '100%',
        marginBottom: -45,
    },
    profile_image_container: {
        height: 120,
        width: 120,
        borderWidth: 7,
        borderColor: 'white',
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    quoteContainer: {
        minHeight: 35,
        maxHeight: 85,
        width: '95%',
        marginBottom: 25,
    },
    textNickname: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    textQuote: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    l_f_follow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    buttomTab: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: 'blue',
    },
    textTab: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    textInfoContainer: {
        fontSize: 16,
        color: '#000000',
        marginTop: 5,
    },
    imageAvatar: {
        height: '100%',
        width: '100%',
        resizeMode: "cover",
    },
})

export default Personal_account;
