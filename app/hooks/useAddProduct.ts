import { useQuery } from '@tanstack/react-query';
import { LIST_ENDPOINT, requestOptions } from '../constants';
import { ProductItemType } from '../components/ProductItem';

const addProduct = async (item: ProductItemType) => {
    const ADD_ENDPOINT = `${LIST_ENDPOINT}/add`;
    const options = {
        ...requestOptions,
        method: 'POST',
        body: JSON.stringify({
            ...item
        })
    };
    const { id, title, description, price, brand, category, thumbnail } = await fetch(ADD_ENDPOINT, options).then(data => data.json());
    
    return { id, title, description, price, brand, category, thumbnail};
};
const useAddProduct = (item: ProductItemType) => useQuery({ queryKey: ['/products/add', item], queryFn: () => addProduct(item), networkMode: 'always'});

export default useAddProduct;