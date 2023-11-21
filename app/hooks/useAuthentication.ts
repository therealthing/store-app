import { useQuery } from '@tanstack/react-query';
import { AUTH_ENDPOINT, requestOptions } from '../constants';

const authenticateUser = async (user:string, pass:string) => {
    const authOptions = {
        ...requestOptions,
        method: 'POST',
        body: JSON.stringify({
            username: user,
            password: pass,
            expiresInMins: 60
        })
    };
    const { username, email, firstName, lastName, gender, token } = await fetch(AUTH_ENDPOINT, authOptions).then(data => data.json());
    return {username, email, firstName, lastName, gender, token};
};
const useAuthentication = (user: string,pass: string) => useQuery({ queryKey: ['/auth/login', user, pass], queryFn: () => authenticateUser(user,pass), networkMode: 'always'});

export default useAuthentication;