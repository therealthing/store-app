import { useQuery } from '@tanstack/react-query';
import { LIST_ENDPOINT, requestOptions } from './constants';
import type { ProductItemType } from './components/ProductItem';

const fetchProduct = async (product: number) => {
   
    const { brand, category, description, images, id }: ProductItemType = await fetch(`${LIST_ENDPOINT}/${product}`, requestOptions).then(data => data.json());
    return { brand, category, description, images, id};
};

const useProduct = (productId: number) => 
    useQuery({ queryKey: ['products', productId], queryFn: () => fetchProduct(productId) });

export default useProduct;