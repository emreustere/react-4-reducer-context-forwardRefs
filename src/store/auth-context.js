import React, { useState } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export function AuthContextProvider(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function logoutHandler() {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	}

	function loginHandler() {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
