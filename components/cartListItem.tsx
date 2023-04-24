import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite'
import { cartStore } from '../data/stores/cartStore';


export type CartListItemProps = {
    name: string,
    price: number,
    id: number,
    image: string,
}


export const CartListItem = observer((props: CartListItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.horizontalContainer}>
                <Image source={{ uri: props.image, height: 100, width: 100 }}></Image>
                <View style={styles.verticalContainer}>
                    <Text numberOfLines={3} style={styles.header}>{props.name}</Text>
                    <Text style={styles.price}>{props.price} $</Text>
                </View>
            </View>
            <View style={styles.buttonstContainer}>
                <TouchableOpacity style={{ ...styles.button, width: 120 }} onPress={() => { cartStore.deleteProduct(props.id) }}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { cartStore.setQuantity(props.id, cartStore.cart[props.id] + 1) }}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{cartStore.cart[props.id]}</Text>
                <TouchableOpacity style={styles.button} onPress={() => { cartStore.setQuantity(props.id, cartStore.cart[props.id] - 1) }}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 25,
        marginVertical: 10,
    },
    horizontalContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row'
    },
    verticalContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
        flex: 1
    },
    buttonstContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        flex: 1,
        flexDirection: 'row-reverse'
    },
    header: {
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '700',
        flex: 1
    },
    description: {
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500'
    },
    price: {
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: 'grey',
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: 50,
        height: 50,
        margin: 5
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    quantityText: {
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '700',
        width: 50,
        height: 50,
    }
});