import React from 'react';
import { Navigate } from 'react-router-dom';
import { DefaultLayout } from '../../layout/DefaultLayout';

// Assuming isauth function checks the authentication state
const isauth = () => true; // For demonstration, it always returns true

export const PrivateRoute = ({ children, ...rest }) => {
  const authed = isauth(); // This will always be true

  return authed ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <Navigate to="/" replace />
  );
};
