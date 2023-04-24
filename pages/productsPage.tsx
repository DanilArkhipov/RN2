import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { ProductListItem } from '../components/productListItem';
import { productStore } from '../data/stores/productStore';
import { observer } from 'mobx-react-lite'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CircularProgress, {
    CircularProgressWithChild,
} from 'react-native-circular-progress-indicator';

export const ProductsPage = observer(() => {
    const navigation = useNavigation();
    return (
        productStore.isLoadng ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress value={100} duration={2000} progressValueColor={'grey'}></CircularProgress>
        </View> :
            <View>
                <FlatList
                    data={productStore.getProducts()}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => { navigation.navigate('Product', { id: item.id }) }}>
                            <ProductListItem name={item.title} price={item.price} id={item.id} category={item.category} image={item.image}></ProductListItem>
                        </TouchableOpacity>}
                />
            </View>
    );
})