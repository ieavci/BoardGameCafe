import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';

export default function CarouselSlide() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 0.7 }}>
            <Carousel
                loop
                width={width}
                height={width / 1.7}
                autoPlay={true}
                data={[
                    {
                        text: "Masa oyunları ile doyasıya eğlencenin tadını çıkart."
                    },
                    {
                        text: "En lezzetli yemekler ve içecekler ile keyifli vakit geçir."
                    },
                    {
                        text: "Favoriler özelliği ile daha iyi kullanıcı deneyimi yakala."
                    },
                ]}
                scrollAnimationDuration={3000}

                renderItem={({ item }) => (
                    <View
                        style={{
                            paddingHorizontal: 6,
                            alignItems: 'center',
                            padding: 5,
                            marginTop:10
                        }}
                    >
                        <Text style={{
                            fontSize: 40,
                            fontFamily: 'sans-serif-light',
                            fontWeight: 'thin',
                            letterSpacing: 1,
                            marginHorizontal: 0,
                        }}>
                            {item.text}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({})