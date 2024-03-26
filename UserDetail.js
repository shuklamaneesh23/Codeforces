import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import tw from 'twrnc';





export default function UserDetail( { user } ) {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`justify-center items-center`}>
        <View style={tw`w-full flex-1`}>
          <Image source={require('./assets/logo.png')} style={tw`w-full h-40`} resizeMode="contain" />
        </View>

        <View style={tw`gap-6 flex flex-col`}>
          <View style={tw``}>
            <Text style={tw`text-4xl font-semibold`}>SHUKLAMANEESH24</Text>
            <Text style={tw`text-xl font-thin`}>Newbie</Text>
          </View>
          <View style={tw`flex items-center`}>
            <View style={tw`w-24 h-24 rounded-full overflow-hidden border-2 border-primary border-opacity-100`}>
              <Image
                source={{ uri: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' }}
                style={tw`w-full h-full`}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={tw`flex flex-row justify-around`}>
            <View style={tw`flex flex-col gap-6`}>
              <Text style={tw`font-semibold text-xl`}>Rating: </Text>
              <Text style={tw`font-semibold text-xl`}>Max Rating:</Text>
              <Text style={tw`font-semibold text-xl`}>Rank:</Text>
              <Text style={tw`font-semibold text-xl`}>Max Rank: </Text>
              <Text style={tw`font-semibold text-xl`}>Date of birth:</Text>
            </View>
            <View style={tw`flex flex-col gap-6`}>
              <Text style={tw`text-xl`}>Full Name</Text>
              <Text style={tw`text-xl`}>Location</Text>
              <Text style={tw`text-xl`}>Email</Text>
              <Text style={tw`text-xl`}>Nationality</Text>
              <Text style={tw`text-xl`}>Date of birth</Text>
            </View>

          </View>
          <View style={tw`flex items-center mt-12`}>
            <TouchableOpacity style={tw`bg-blue-500 rounded-md p-2`} onPress={() => { }}>
              <Text style={tw`text-white font-bold`}>Get Contest Deatsils</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
