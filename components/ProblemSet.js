import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import tw from 'twrnc';

const ProblemSet = (props) => {
    const User = props.route.params.username;
    const [isLoading, setIsLoading] = useState(true);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        fetchProblems();
    }, []);

    const fetchProblems = async () => {
        try {
            const response = await fetch(
                `https://codeforces.com/api/user.status?handle=${User}&from=1&count=10`
            );
            const data = await response.json();
            // Extract relevant information from the response
            const solvedProblems = data.result.filter(problem => problem.verdict === 'OK');
            setProblems(solvedProblems);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const openProblemSolution = (problem) => {
        // Construct URL for problem and solution
        const problemUrl = `https://codeforces.com/problemset/problem/${problem.problem.contestId}/${problem.problem.index}`;
        const solutionUrl = `https://codeforces.com/contest/${problem.problem.contestId}/submission/${problem.id}`;
        // Open both URLs in the app
        Linking.openURL(problemUrl);
        Linking.openURL(solutionUrl);
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="tomato" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={problems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => openProblemSolution(item)}>
                        <View style={tw`bg-white rounded-lg p-4 mb-4 shadow-md`}>
                            <Text style={tw`text-lg font-semibold mb-2`}>{item.problem.name}</Text>
                            <Text style={tw`text-base text-gray-500`}>{item.author.contestId ? 'Contest' : 'Practice'}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ProblemSet;
