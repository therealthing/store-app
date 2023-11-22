import * as React from 'react';
import { useContext } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { PageContainer} from '../components/styles';
import { LoginForm } from '../components/LoginForm';
import { AuthContext } from '../../App';

export const LogInScreen: React.FC = function() {
    const { signIn } = useContext(AuthContext);
    return (
    <SafeAreaView>
        <PageContainer>
            <LoginForm onSubmit={signIn} />
        </PageContainer>
    </SafeAreaView>);
};
