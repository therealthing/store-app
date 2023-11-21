import { useQuery } from '@tanstack/react-query';
import { LIST_ENDPOINT, requestOptions } from './constants';

const fetchProducts = async (page:number) => {
    const limit = 10;
    const skip = page*limit;
    const LIST_ENDPOINT_PAGED = `${LIST_ENDPOINT}?limit=${limit}&skip=${skip}`;
    const { products } = await fetch(LIST_ENDPOINT_PAGED, requestOptions).then(data => data.json());
    return products;
};

const useAllProducts = (page:number) => useQuery({ queryKey: ['/products', page], queryFn: () => fetchProducts(page), networkMode: 'offlineFirst'});

export default useAllProducts;