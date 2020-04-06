import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#F09819", "#FF512F"],
    title: "날씨가 좋다",
    subtitle: "손에 손잡고 산책이나 갑시다",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#544a7d", "#ffd452"],
    title: "우루릉 쾅쾅",
    subtitle: "천둥번개가 모두 모두 숨어라",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#00416A", "#E4E5E6"],
    title: "이슬비가 내려와~",
    subtitle: "마냥 걷다가 걷다 보면 바라던 니가 내려와",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#16222A", "#3A6073"],
    title: "something in the rain",
    subtitle: "알고 보니 nothing",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2BC0E4", "#EAECC6"],
    title: "하얀 눈이 내려와",
    subtitle: "내 맘을 아프게해 나를 슬프게 해",
  },
  Atmosphere: {
    iconName: "weather-sunset-up",
    gradient: ["#FF5F6D", "#FFC371"],
    title: "일출이다",
    subtitle: "일출 보러 동해러 출발합시다",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "날씨라 흐립니다 곧 비가 올 전망입니다",
    subtitle: "맞은 적이 없구나",
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#ADA996", "#EAEAEA"],
    title: "안개조심",
    subtitle: "교통사고 조심합시다",
  },
  Mist: {
    iconName: "weather-windy-variant",
    gradient: ["#B2FEFA", "#0ED2F7"],
    title: "안개조심2",
    subtitle: "안개가 아니라 안경을 닦아보세요",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#BA8B02", "#181818"],
    title: "중국발 미세먼지가 한국을 덮치다",
    subtitle:
      "미세먼지는 발암물질을 포함하고 있으니 미세먼지 차단 마스크를 꼭 착용합시다",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={86}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: "flex-start",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
