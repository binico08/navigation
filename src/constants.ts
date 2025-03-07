import { useState } from 'react';

// Define your constants and hooks here
export const useConstants = () => {
  return {
    apiUrl: 'https://api.shop-and-go.com', // Updated API URL
    appName: 'Shop and Go', // Updated application name
    version: '1.0.0',
  };
};

export const useTheme = () => {
  return {
    // Define your theme properties here
    inputBorderColor: '#ccc',
    textColor: '#000',
    lightTextColor: '#999',
    googleColor: '#DB4437',
    facebookColor: '#4267B2',
    highlightTextColor: '#fff',
    labelBgColor: '#f0f0f0',
  };
};

export const useLanguage = () => {
  return {
    labelLogin: 'Login',
    labelUser: 'Username',
    labelPass: 'Password',
    userPlaceholder: 'Enter your username',
    passPlaceholder: 'Enter your password',
    labelForget: 'Forgot Password?',
    labelSubmit: 'Submit',
    labelChoice: 'Or login with',
  };
};
