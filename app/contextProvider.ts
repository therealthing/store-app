import React from 'react';

interface UserProfile {
    firstName?: string;
    lastName?: string;
    email?: string;
    token?: string;

}
export const UserContext = React.createContext<UserProfile>({});