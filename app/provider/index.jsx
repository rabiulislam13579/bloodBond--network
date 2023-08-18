"use client";
import React from 'react';
import { AuthProvider } from '../authContext/authContext';

const Provider = ({children}) => {
    return (
       <AuthProvider>
        {children}
       </AuthProvider>
    );
};

export default Provider;