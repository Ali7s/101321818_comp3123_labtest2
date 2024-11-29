import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import WeatherCard from './components/WeatherCard'; 

const App = () => {
    const [city, setCity] = useState('Toronto');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=828b67db012d876ffde5af22a3bed57b`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeather();
    }, [city]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather App</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                onChangeText={(text) => setCity(text)}
            />
            {weatherData && <WeatherCard data={weatherData} />}  {/* Use WeatherCard here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
    input: { 
        borderColor: '#ccc', 
        borderWidth: 1, 
        padding: 10, 
        marginTop: 20, 
        borderRadius: 4 
    },
});

export default App;
