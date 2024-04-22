import React from "react";

import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ChevronRight, ClipboardList, CreditCard, Info, LogOut, MapPin, MapPinned, Pencil, Settings, Sparkles, Star } from "lucide-react-native";
import { Button, Card, Text } from "react-native-paper";


export default function Index({ navigation }): React.JSX.Element {

    const editProfile = () => {
        navigation.navigate("profile")
    }

    const bookings = () => {
        navigation.navigate("bookings")
    }

    const membership = () => {
        navigation.navigate("membership")
    }

    const payments = () => {
        navigation.navigate("payments");
    }

    const settings = () => {
        navigation.navigate("settings");
    }

    const addresses = () => {
        navigation.navigate("addresses");
    }
    const aboutUs = () => {
        navigation.navigate("about");
    }
    const ratings = () => {
        navigation.navigate("ratings")
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profileWrapper}>
                    <View>
                        <Text variant="titleLarge">Shubham Negi</Text>
                        <Text variant="titleSmall">+91-8800833028</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={editProfile}>
                            <Pencil color={'#000'} size={16} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={bookings} style={styles.btnGroup}>
                        <View style={{ flexDirection: 'row' }}>
                            <ClipboardList color={'#000'} size={16} />
                            <Text style={styles.btnText}>My Bookings</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={membership} style={styles.btnGroup}>
                        <View style={{ flexDirection: 'row' }}>
                            <Sparkles color={'#000'} size={16} />
                            <Text style={styles.btnText}>Membership</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={payments} style={styles.btnGroup}>
                        <View style={{ flexDirection: 'row' }}>
                            <CreditCard color={'#000'} size={16} />
                            <Text style={styles.btnText}>Payments</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={settings} style={styles.btnGroup}>
                        <View style={{ flexDirection: 'row' }}>
                            <Settings color={'#000'} size={16} />
                            <Text style={styles.btnText}>Settings</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addresses} style={styles.btnGroup}>
                        <View style={{ flexDirection: 'row' }}>
                            <MapPin color={'#000'} size={16} />
                            <Text style={styles.btnText}>Addresses</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={aboutUs} style={styles.btnGroup}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Info color={'#000'} size={16} />
                            <Text style={styles.btnText}>About us</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ratings} style={{ ...styles.btnGroup, ...styles.marginButton }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Star color={'#000'} size={16} />
                            <Text style={styles.btnText}>My Ratings</Text>
                        </View>
                        <ChevronRight color={'#000'} size={16} />
                    </TouchableOpacity>
                </View>
                <Card style={styles.referalContainer}>
                    <Card.Content>
                        <Text variant="titleLarge">Refer & earn $100</Text>
                        <Text variant="bodyLarge">Typography component showing styles complied with passed variant prop and supported by the type system.</Text>
                    </Card.Content>
                </Card>
                <View style={styles.bottomWrapper}>
                    <Button style={styles.customBtn} mode="contained" onPress={() => console.log('Pressed')}>
                        Logout &nbsp; <LogOut color={'#fff'} size={16} />
                    </Button>
                    <Text>Version 0.1</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f7',
        padding: 8
    },
    profileWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 8,
        padding: 16,
        borderRadius: 4
    },
    wrapper: {
        flex: 9,
        margin: 8,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    referalContainer: {
        margin: 8,
        marginTop: 32,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    btnGroup: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginStart: 16,
        marginEnd: 16,
    },
    btnText: {
        color: '#000',
        fontSize: 16,
    },
    marginButton: {
        marginBottom: 32
    },
    bottomWrapper: {
        margin: 8,
        padding: 16,
        marginTop: 32,
        marginBottom: 32,
        // backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center'
    },
    customBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
        width: '100%'
    }
});
