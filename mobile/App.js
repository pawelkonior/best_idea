import "react-native-gesture-handler";
import {StatusBar} from "expo-status-bar";
import {Provider as PaperProvider} from "react-native-paper";

import {useCallback, useContext, useEffect, useRef, useState} from "react";

import registerNNPushToken from 'native-notify';
import {ProductsProvider} from "./context/useProducts";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import {AuthContext} from "./context/AuthContext";
import * as Keychain from "react-native-keychain";
import Spinner from "./components/Spinner";


export default function App() {
    registerNNPushToken(4904, 'YHvvi2QDQiaM8FACwqGq43');
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const authContext = useContext(AuthContext);
    const [status, setStatus] = useState('loading');

    const loadJWT = useCallback(async () => {
        try {
            const value = await Keychain.getGenericPassword();
            const jwt = JSON.parse(value.password);

            authContext.setAuthState({
                // accessToken: jwt.accessToken || null,
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTAwOTUyLCJpYXQiOjE2Njg5MDg5NTIsImp0aSI6IjJjM2Y2NDE2YzJlZTQ2YTRiNjQ1OTlhODY1YWVkYjgwIiwidXNlcl9pZCI6MX0.1pxGdWVV2B9xlOgY7u4YZbUBjSmucHYJqsKIhhyCp3E',
                refreshToken: jwt.refreshToken || null,
                authenticated: jwt.accessToken !== null,
            });
            setStatus('success');
        } catch (error) {
            setStatus('error');
            console.log(`Keychain Error: ${error.message}`);
            authContext.setAuthState({
                accessToken: null,
                refreshToken: null,
                authenticated: false,
            });
        }
    }, []);

    useEffect(() => {
        loadJWT();
    }, [loadJWT]);

    if (status === 'loading') {
        return <Spinner/>;
    }

    if (authContext?.authState?.authenticated === false) {
        return <Login/>;
    } else {
        return (
            <ProductsProvider>
                <PaperProvider>
                    <StatusBar style="auto"/>
                    <Dashboard/>
                </PaperProvider>
            </ProductsProvider>
        );
    }
};
