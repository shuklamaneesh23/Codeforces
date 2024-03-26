import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';


export const UserDetails = (props) => {
    const Username = props.route.params.username;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {   
        axios.get(`https://codeforces.com/api/user.info?handles=${Username}`)
        .then((response) => {
            setUser(response.data.result[0]);
            
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);  

    if (loading) {
        return (
            <View style={tw`flex-1 justify-center items-center`}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!user) {
        return (
            <SafeAreaView style={tw`flex-1 bg-white`}>
                <ScrollView contentContainerStyle={tw`justify-center items-center`}>
                    <View style={tw`flex-1 justify-center items-center`}>
                        <Text style={tw`text-2xl text-red-700 mt-40`}>OOPS!No such user Exists!</Text>
                    </View>
                </ScrollView>
                <StatusBar style="auto" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <ScrollView contentContainerStyle={tw`justify-center items-center`}>
                <View style={tw`w-full flex-1`}>
                    <Image source={require('../assets/logo.png')} style={tw`w-full h-40`} resizeMode="contain" />
                </View>
                <View style={tw`gap-6 flex flex-col`}>
                    <View style={tw``}>
                        <Text style={tw`text-4xl font-semibold`}>{user.handle}</Text>
                        <Text style={tw`text-xl font-thin`}>{user.rank}</Text>
                    </View>
                    <View style={tw`flex items-center`}>
                        <View style={tw`w-24 h-24 rounded-full overflow-hidden border-2 border-opacity-100`}>
                            <Image
                                source={{ uri: user.avatar }}
                                style={tw`w-full h-full`}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={tw`flex flex-row justify-around`}>
                        <View style={tw`flex flex-col gap-6`}>
                            <Text style={tw`font-semibold text-xl`}>Rating: </Text>
                            <Text style={tw`font-semibold text-xl`}>Max Rating:</Text>
                            <Text style={tw`font-semibold text-xl`}>Contribution:</Text>
                            <Text style={tw`font-semibold text-xl`}>Friend of: </Text>
                            <Text style={tw`font-semibold text-xl`}>Last Online:</Text>
                            <Text style={tw`font-semibold text-xl`}>Registered:</Text>
                        </View>
                        <View style={tw`flex flex-col gap-6`}>
                            <Text style={tw`text-xl`}>{user.rating}</Text>
                            <Text style={tw`text-xl`}>{user.maxRating}</Text>
                            <Text style={tw`text-xl`}>{user.contribution}</Text>
                            <Text style={tw`text-xl`}>{user.friendOfCount}</Text>
                            <Text style={tw`text-xl flex-wrap`} > {new Date(user.lastOnlineTimeSeconds * 1000).toString().split(' ').slice(0, 4).join(' ')}</Text>
                            <Text style={tw`text-xl flex-wrap`} > {new Date(user.registrationTimeSeconds * 1000).toString().split(' ').slice(0, 4).join(' ')}</Text>
                        </View>
                    </View>
                    <View style={tw`flex items-center mt-12`}>
                        <TouchableOpacity style={tw`bg-blue-500 rounded-md p-2 mb-10`} onPress={() => props.navigation.navigate('ProblemSet',{username: user.handle})}>
                            <Text style={tw`text-white font-bold`}>See ProblemSet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
