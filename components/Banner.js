import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default function Banner() {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);

    const images = [
        require('../assets/home/banner_img (2).jpg'),
        require('../assets/home/banner_img (3).jpg'),
        require('../assets/home/banner_img (4).jpg'),
        require('../assets/home/banner_img (5).jpg'),
        require('../assets/home/banner_img (7).jpg'),
        require('../assets/home/banner_img (8).jpg'),
        require('../assets/home/banner_img (9).jpg'),
        require('../assets/home/banner_img (10).jpg'),
        require('../assets/home/banner_img (11).jpg'),
        require('../assets/home/banner_img (12).jpg'),
        require('../assets/home/banner_img (13).jpg'),
        require('../assets/home/banner_img (14).jpg'),
        require('../assets/home/banner_img (15).jpg')
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({
                    x: ((scrollX._value + width) % (width * images.length)),
                    animated: true,
                });
            }
        }, 4000); // เลื่อนทุกๆ4วิไปเลยสิวะ!!

        return () => clearInterval(interval);
    }, [scrollX, images.length]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.slider}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        style={styles.image}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100, // ระยะห่างจากขอบบนจอ
      },
      slider: {
        width: 'auto', //   ความกว้างสไลด์
        height: 300,   // ความสู๊งงงง
      },
      image: {
        width: width -20,  // ใช้ความกว้างของหน้าจอเพื่อให้ภาพเต็มหน้าจอ
        height: 300,   // ความสูงของแต่ละภาพเท่ากับแบนเนอร์
        resizeMode: 'cover', // ครอบภาพให้อยู่ในขอบเขตและเต็มจอ
        borderRadius: 10, // ปรับให้ขอบมน
    marginHorizontal: 10, // ระยะห่างจากขอบซ้ายและขวา
    },
});

