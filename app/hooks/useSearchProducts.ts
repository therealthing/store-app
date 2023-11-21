import { useQuery } from '@tanstack/react-query';
import { LIST_ENDPOINT, requestOptions } from '../constants';

const fetchMatchingProducts = async (keyword:string) => {
    const limit = 10;
    const LIST_ENDPOINT_SEARCH = `${LIST_ENDPOINT}/search?q=${keyword}&limit=${limit}`;
    const { products } = await fetch(LIST_ENDPOINT_SEARCH, requestOptions).then(data => data.json());
    return products;
};

const useSearchProducts = (keyword:string) => useQuery({ queryKey: ['/products', keyword], queryFn: () => fetchMatchingProducts(keyword), networkMode: 'offlineFirst'});

export default useSearchProducts;