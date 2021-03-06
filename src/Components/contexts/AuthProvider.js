import React, { createContext } from 'react';
import useFirebase from '../../hooks/firebase';
// import useFirebase from '../../hooks/firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;