import { NavigationContainer } from '@react-navigation/native';  
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app/firebase';
import Login from '../screens/Login';
import Principi from '../screens/Principi';
import Main from './stacks/index'
import Registro from '../screens/Registro';
import Home from '../screens/Home';


const MainNavigator = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('user', user);
                const uid = user.uid;
                setIsLogged(true);
            } else {
                console.log("No user logged");
                setIsLogged(false);
            }
        });
    }, []);

    return (<NavigationContainer>
        {isLogged ?
            <Main/> :
            <Home/>
        }
    </NavigationContainer>)

}

export default MainNavigator;