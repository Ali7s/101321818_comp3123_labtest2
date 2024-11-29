import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherCard = ({ data }) => {
    const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);

    return (
        <View style={styles.card}>
            <Text style={styles.city}>{data.name}, {data.sys.country}</Text> 
            <Image
                style={styles.icon}
                source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
            />
            <Text style={styles.description}>{data.weather[0].description}</Text> 
            <Text>Temp: {kelvinToCelsius(data.main.temp)} °C</Text>
            <Text>Feels Like: {kelvinToCelsius(data.main.feels_like)} °C</Text>
            <Text>Humidity: {data.main.humidity}%</Text>
            <Text>Wind Speed: {data.wind.speed} m/s</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4, // For Android shadow
    },
    city: { fontSize: 20, fontWeight: 'bold' },
    icon: { width: 100, height: 100 },
    description: { textTransform: 'capitalize', marginVertical: 10 },
});

export default WeatherCard;


