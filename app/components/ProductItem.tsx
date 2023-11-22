import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { default as Image} from 'react-native-fast-image';


type ProductImage = string;

export type ProductItemType = {
    id: number;
    title: string;
    description: string;
    brand?: string;
    thumbnail?: string;
    category?: string;
    price: string;
    images?: ProductImage[];
    viewMode: 'list' | 'single',
    onPress?: () => void;
};

export const ProductItemWrapper = ({onPress, children}: {onPress?: () => void, children: JSX.Element }) => 
    typeof onPress === 'function' ? (
        <TouchableOpacity onPress={onPress}>
            {children}
        </TouchableOpacity>) : <>{children}</>;

export const ProductItemInner = ({
    title,
    description, 
    category,
    thumbnail,
    brand,
    images,
    viewMode = 'list',
    price
}: ProductItemType) => (
    <ItemContainer>
        <ProductTitleContainer>
            <ProductTitle>{title} {brand} <ProductPrice>{price}$</ProductPrice></ProductTitle>
        </ProductTitleContainer>
        {viewMode === 'list' ? <ProductImage>
            <Image source={{uri: thumbnail, cache: Image.cacheControl.immutable}} resizeMode={Image.resizeMode.contain} style={{width: 80, height: 80}}/>
        </ProductImage> : images?.map(el => <Image source={{uri: el, cache: Image.cacheControl.immutable}} resizeMode={Image.resizeMode.contain} key={el} style={{width: 140, height: 140}} />)}
        {viewMode === 'single' ? <ProductExtraDetails><Text>Category: {category}</Text><Text>Brand: {brand}</Text></ProductExtraDetails>: null }
        <ProductDescription>
            <Text>{description}</Text>
        </ProductDescription>
        
    </ItemContainer>
);

export const ProductItem = (props: ProductItemType) => 
(<ProductItemWrapper onPress={props.onPress}>
    <ProductItemInner {...props}/>
</ProductItemWrapper>);

export const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  margin-bottom: 10px;
`;

export const ProductTitleContainer = styled.View`
    flex: 1 0 100%;
    padding: 0px 0 10px 0;
`;

export const ProductTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const ProductImage = styled.View`
    flex: 1 0 100px;
    padding-left: 10px;
    align-self: flex-end;
    
`;

export const ProductDescription = styled.View`
    flex: 3 0 70%;
`;

export const ProductExtraDetails = styled.View`
    flex: 3 0 70%;
`;



export const ProductPrice = styled.Text`
font-size: 14px;
font-weight: 500;
color: #0a0a0a;
`