import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProductModel } from '../data/models/productModel';
import { cartStore } from '../data/stores/cartStore';
import { observer } from 'mobx-react-lite'

const addButtonClicked = (productId: number) => {
    if (!cartStore.checkProductInCart(productId)) {
        cartStore.addProduct(productId);
    }
}


export const Product = observer((props: ProductModel) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: props.image, height: 200, width: 200 }}></Image>
            <Text style={styles.header}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.category}>{props.price} $</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => addButtonClicked(props.id)}>
                    <Text>{cartStore.checkProductInCart(props.id) ? 'Already in cart' : 'Add to cart'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 10,
    },
    header: {
        textAlignVertical: 'center',
        fontSize: 24,
        fontWeight: '700',
        padding: 5
    },
    description: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '500',
        padding: 10
    },
    category: {
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 10,
        color: 'grey',
        alignSelf: 'flex-start'
    },
    buttonContainer: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
    }
});