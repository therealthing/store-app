import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { Cell } from '../screens/ListScreen'; 

type ProductImage = string;

export type ProductItemType = {
    id: number;
    title: string;
    description: string;
    brand?: string;
    category?: string;
    images: ProductImage[];
    onPress: () => void;
};

export const ProductItem = ({
    title,
    description, 
    onPress
}: ProductItemType) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <Cell>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                </Cell>
            </TouchableOpacity>
        )
    } 

