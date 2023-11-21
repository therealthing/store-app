import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import useAuthentication from '../hooks/useAuthentication';


const AccountScreen: React.FC = function() {
  const { data, isError, error, isLoading } = useAuthentication('kminchelle','0lelplR');

    return (
      <SafeAreaView>
        <Text>Welcome {data?.firstName} {data?.lastName}</Text>
      </SafeAreaView>
    )
};

export default AccountScreen;