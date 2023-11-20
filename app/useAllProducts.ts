import { useQuery } from '@tanstack/react-query';
import { LIST_ENDPOINT, requestOptions } from './constants';

const fetchProducts = async () => {
    const { products } = await fetch(LIST_ENDPOINT, requestOptions).then(data => data.json());
    return products;
};

const useAllProducts = () => useQuery({ queryKey: ['products'], queryFn: fetchProducts, networkMode: 'offlineFirst'});

export default useAllProducts;