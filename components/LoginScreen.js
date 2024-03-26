import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = (props) => {

    const navigation = useNavigation();

    const navigateToUserDetails = () => {
        const userData = { username };
        navigation.navigate('Home', { screen: 'UserDetails', params: userData });
    }

    const [username, setUsername] = useState('');
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Username:</Text>
                    <Text style={styles.required}>required</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Codeforces username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
            </View>
            <TouchableOpacity style={styles.button}
                onPress={navigateToUserDetails}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#374151',
    },
    inputContainer: {
        marginBottom: 20,
        width: '80%',
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#374151',
    },
    required: {
        fontSize: 14,
        color: '#EF4444',
    },
    input: {
        borderWidth: 1,
        borderColor: '#6B7280',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        backgroundColor: '#3B82F6',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    link: {
        color: '#3B82F6',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Login;
