import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagPole, props.bigger ? styles.flagPoleBigger : null]} ></View>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} ></View>
            <View style={[styles.topBase, props.bigger ? styles.topBaseBigger : null]} ></View>
            <View style={[styles.bottomBase, props.bigger ? styles.bottomBaseBigger : null]} ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    topBase: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    bottomBase: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagPoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    topBaseBigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    bottomBaseBigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    }
})