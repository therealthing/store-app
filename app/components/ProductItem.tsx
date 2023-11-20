import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


export type ProductItemType = {
    id: number;
    title: string;
    description: string;
};

export const ProductItem = ({
    id,
    title,
    description}: ProductItemType) => {
        return (
            <>
            <Text>{title}</Text>
            <Text>{description}</Text>
            </>
        )
    } 
