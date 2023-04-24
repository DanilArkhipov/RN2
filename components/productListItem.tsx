import { StyleSheet, Text, View, Image } from 'react-native';


export type ProductListItemProps = {
    name: string,
    price: number,
    id: number,
    category: string,
    image: string,
}


export const ProductListItem = (props: ProductListItemProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: props.image, height: 100, width: 100 }}></Image>
            </View>
            <View style={styles.verticalContainer}>
                <Text numberOfLines={2} style={styles.header}>{props.name}</Text>
                <Text style={styles.description}>{props.category}</Text>
                <Text style={styles.price}>{props.price} $</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 25,
        marginVertical: 10,
    },
    verticalContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
        flex: 1
    },
    header: {
        textAlignVertical: 'center',
        fontSize: 24,
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
        fontSize: 14,
        fontWeight: '500',
        color: 'grey'
    }
});