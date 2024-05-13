import React from 'react';

import {
   createBrowserRouter,
   RouterProvider,
} from 'react-router-dom';

import { HomePage } from '../../pages/home';
import { RecoveryAccountPage } from '../../pages/recovery-account';
import { SignInPage } from '../../pages/sign-in';
import { SignUpPage } from '../../pages/sign-up';

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: '/recovery-account',
      element: <RecoveryAccountPage />
   },
   {
      path: '/sign-in',
      element: <SignInPage />
   },
   {
      path: '/sign-up',
      element: <SignUpPage />
   }
]);

const Router: React.FC = () => {
   return (
      <React.Fragment>
         <RouterProvider router={router} />
      </React.Fragment>
   );
};

export { Router };