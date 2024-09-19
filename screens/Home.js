import React from "react";
import { ScrollView, View } from "react-native";
import Banner from "../components/Banner";
import BoyLove from "../components/BoyLove";
import Fantasy from "../components/Fantasy";
import ComBlack from "../components/ComeBack";
import ComeBlack from "../components/ComeBack";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Banner />
                <ComeBlack/>
                <BoyLove/>
                <Fantasy/>
            </View>
        </ScrollView>

    );
}