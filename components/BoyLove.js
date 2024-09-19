import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Ensure you have these dependencies installed

export default function BoyLove(props) {
    const tours = [
        { "id" : "1" , "title" : "Z" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/1.jpg?token=GHSAT0AAAAAACXVVP46GDXL52QNZACQQSB6ZXLW2EQ"},
        { "id" : "2" , "title" : "A" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/2.jpg?token=GHSAT0AAAAAACXVVP46YWIIWGPSKL5CVCPEZXLW2PA"},
        { "id" : "3" , "title" : "B" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/3.jpg?token=GHSAT0AAAAAACXVVP47F5ZECWDLNSPAV34YZXLW2ZQ"},
        { "id" : "4" , "title" : "C" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/4.jpg?token=GHSAT0AAAAAACXVVP46EWA3MWQL7YODX6GUZXLW3DA"},
        { "id" : "5" , "title" : "D" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/5.jpg?token=GHSAT0AAAAAACXVVP46C53DIPKARBUAC7DYZXLW3JQ"},
        { "id" : "6" , "title" : "E" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/6.jpg?token=GHSAT0AAAAAACXVVP475BVHPVEN76B4YWVUZXLW3YQ"},
        { "id" : "7" , "title" : "F" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/7.jpg?token=GHSAT0AAAAAACXVVP47BMT4M7H75H4EI2SKZXLW33A"},
        { "id" : "8" , "title" : "G" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/8.jpg?token=GHSAT0AAAAAACXVVP477HLDRDVKK7M2FIQWZXLW34A"},
        { "id" : "9" , "title" : "H" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/9.jpg?token=GHSAT0AAAAAACXVVP46CZ7ERVEJP6F6XA2QZXLW36A"},
        { "id" : "10" , "title" : "I" , "uri": "https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/assets/BoyLove/10.jpg?token=GHSAT0AAAAAACXVVP47B3PHWCJGHAPADBQMZXLW4AA"}
    ];

    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/Nopparat412/Image/refs/heads/main/test.json?token=GHSAT0AAAAAACXVVP46I7OXGRUSTG3FI4MYZXLW6CQ');
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
                    horizontal={true}
                    data={onlineTours}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <Image style={styles.image} source={{ uri: item.uri }} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>{item.title}</Text>
                                    <View style={styles.iconContainer}>
                                        <TouchableOpacity style={styles.iconWrapper}>
                                            <Ionicons name="heart-outline" size={20} color="red" />
                                            <Text style={styles.iconText}>20M.</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconWrapper}>
                                            <MaterialCommunityIcons name="eye-outline" size={20} color="black" />
                                            <Text style={styles.iconText}>1M.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
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
        fontFamily: ''
    },
    itemContainer: {
        marginRight: 10,
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconText: {
        marginLeft: 5,
        fontSize: 14,
    },
});