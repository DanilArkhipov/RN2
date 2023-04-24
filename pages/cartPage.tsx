import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { CartListItem } from '../components/cartListItem';
import { cartStore } from '../data/stores/cartStore';
import { productStore } from '../data/stores/productStore';
import { observer } from 'mobx-react-lite'

export const CartPage = observer(() => {
    return (
        <View>
            <FlatList
                extraData={cartStore.cart}
                data={productStore.getProducts().filter(product => cartStore.checkProductInCart(product.id))}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) =>
                    <CartListItem id={item.id} name={item.title} price={item.price} image={item.image}></CartListItem>}
                ListFooterComponent={
                    productStore.getProducts().filter(product => cartStore.checkProductInCart(product.id)).length > 0 ? <View style={styles.container}>
                        <Text style={styles.header}>Total:</Text>
                        <Text style={styles.defaultText}>{productStore.getProducts().filter(product => cartStore.checkProductInCart(product.id)).reduce((sum, current) => sum + current.price * cartStore.cart[current.id], 0)} $</Text>
                    </View> : <View></View>
                }
            />

        </View>
    );
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 25,
        marginVertical: 10,
        flexDirection: 'row'
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5
    },
    defaultText: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        color: 'grey'
    }
});