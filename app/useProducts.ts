import { useQuery } from '@tanstack/react-query';
import { LIST_ENDPOINT } from './constants';

const fetchProducts = async () => {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    const { products } = await fetch(LIST_ENDPOINT, options).then(data => data.json());
    return products;
};

const useProducts = () => useQuery({ queryKey: ['products'], queryFn: fetchProducts });

export default useProducts;