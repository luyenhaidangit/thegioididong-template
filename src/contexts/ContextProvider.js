import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    questionTypes: [],
    toast: {
        message: null,
        show: false,
    },
    setCurrentUser: () => { },
    setUserToken: () => { },
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(localStorage.getItem('token') || '');
    const [questionTypes] = useState(['text', "select", "radio", "checkbox", "textarea"])
    const [toast, setToast] = useState({ message: '', show: false })

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
        }
        _setUserToken(token);
    }

    const showToast = (message) => {
        setToast({ message, show: true })
        setTimeout(() => {
            setToast({ message: '', show: false })
        }, 5000)
    }

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                questionTypes,
                toast,
                showToast
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);