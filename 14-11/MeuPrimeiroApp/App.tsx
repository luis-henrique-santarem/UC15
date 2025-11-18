import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { configureHandler } from "./notifications/configureHandler";

configureHandler();

export default function App() {
 return <HomeScreen />
}