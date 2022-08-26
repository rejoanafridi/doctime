import React, { createContext, useEffect, useState } from "react";
import useFirebase from "../../hooks/firebase";
// import useFirebase from '../../hooks/firebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
	const allContext = useFirebase();

	return (
		<AuthContext.Provider value={allContext}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
