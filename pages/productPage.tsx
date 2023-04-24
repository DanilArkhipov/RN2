import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite'
import { productStore } from '../data/stores/productStore';
import { Product } from '../components/product';



export const ProductPage = observer(() => {
    const navigation = useNavigation();
    const route = useRoute();
    useLayoutEffect(() => {
        const parentNavigator = navigation.getParent()
        parentNavigator.setOptions({
            title: productStore.getById(route.params['id']).title,
        })

    }, [navigation])

    return (
        <View>
            <Product {...productStore.getById(route.params['id'])}></Product>
        </View>
    );
})