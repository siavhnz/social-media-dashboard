import { createContext, useEffect, useState } from "react";


export const AppContext = createContext({
    theme: {
        light: true
    },
    toggleTheme: () => { }
})

const AppContextProvider = ({ children }) => {

    const [state, setState] = useState({
        theme: { light: true }
    });

    useEffect(() => {
        if (state.theme.light) {
            document.body.dataset["theme"] = "theme-light";
        } else {
            document.body.dataset["theme"] = "theme-dark";
        }
    }, [state.theme.light])

    const toggleTheme = () => {
        setState(prevState => {
            return {
                theme: { light: !prevState.theme.light }
            }
        })
    }

    const value = {
        theme: state.theme,
        toggleTheme
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;


