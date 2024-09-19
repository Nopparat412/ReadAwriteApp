import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Ensure you have these dependencies installed

export default function ComeBack(props) {
    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];

    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);

    return (
        <View style={props.style}>
            <View style={styles.container}>
                <Text style={styles.title}>นิยายรัก</Text>
                <FlatList
                    data={onlineTours}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <Image style={styles.image} source={{ uri: item.uri }} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>{item.title}</Text>
                                    <View style={styles.iconContainer}>
                                       <Text>ตอนล่าสุดที่อ่าน</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                    numColumns={2} // Arrange items in 2 columns
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: '',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        marginRight: 10,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    iconText: {
        marginLeft: 5,
        fontSize: 14,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});
