import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Ensure you have these dependencies installed

export default function Fantasy(props) {
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
                <Text style={styles.title}>นิยายแฟนตาซี</Text>
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
                                            <Ionicons name="heart-outline" size={15} color="red" />
                                            <Text style={styles.iconText}>20M.</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.iconWrapper}>
                                            <MaterialCommunityIcons name="eye-outline" size={15} color="black" />
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




// import React, { useEffect, useState } from 'react';
// import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

// export default function BoyLove(props) {
//     const tours = [
//         { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
//         { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
//         { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
//         { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
//         { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
//     ];

//     const [onlineTours, setOnlineTours] = useState([]);

//     const loadOnlineTours = async () => {
//         try {
//             let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
//             let data = await text.json();
//             console.log("Load Data : ", data);
//             //SET STATE
//             setOnlineTours(data);
//         } catch (error) {
//             console.log("ERROR : ", error);
//         }
//     }

//     useEffect(() => {
//         loadOnlineTours();
//     }, []);

//     return (
//         <View style={props.style}>
//             <View style={styles.container}>
//                 <Text style={styles.title}>นิยายรัก</Text>
//                 {/* <Text style={styles.subtitle}>Let find out what most interesting things</Text> */}
//                 <FlatList
//                     horizontal={true}
//                     data={onlineTours}
//                     renderItem={({ item, index }) => {
//                         console.log(item, index, item.uri);
//                         return (
//                             <View style={styles.itemContainer}>
//                                 <Image style={styles.image} source={{ uri: item.uri }} />
//                                 <View style={styles.textContainer}>
//                                     <Text style={styles.text}>{item.title}</Text>
//                                 </View>
//                             </View>
//                         );
//                     }}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 30,
//         marginLeft : 20,
//         marginRight : 20
//     },
//     title: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         fontFamily :''
//     },
//     subtitle: {
//         color: 'grey',
//     },
//     itemContainer: {
//             marginRight: 10,
//     },
//     image: {
//         width: 200,
//         height: 150,
//         borderRadius: 10,
//     },
//     textContainer: {
//         marginTop: -30,
//         height: 30,
//         width: 200,
//         paddingHorizontal: 10,
//         backgroundColor: 'black',
//         opacity: 10,
//         borderBottomLeftRadius: 10,
//         borderBottomRightRadius: 10,

//     },
//     text: {
//         fontSize: 20,
//         color: 'white',
//     },
// });



