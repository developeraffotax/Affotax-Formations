'use client'
import { NextAppProvider } from '@toolpad/core/nextjs';
import LinearProgress from '@mui/material/LinearProgress';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Suspense, useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';

import ApartmentIcon from '@mui/icons-material/Apartment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { UserContext } from '../layout';
 
 
 
 
 



const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  { 
    segment: 'client/dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'client/companies',
    title: 'My Companies',
    icon: <ApartmentIcon />,
    pattern: 'client/companies{/:orderId}*',

  },


 




  {
    segment: 'client/orders',
    title: 'Order History',
    icon: <ShoppingCartIcon />,
    

  },

  {
    segment: 'client/user-details',
    title: 'Personal Details',
    icon: <AccountBoxIcon />,
    

  },
];



const BRANDING = {
  title: 'Affotax Formations Client Portal',
};


//theme here in this
export default function Layout({ children }) {



  const user =  useContext(UserContext);
  
    console.log(user)

    
  return (
    
      <Suspense fallback={<LinearProgress />}>
        <NextAppProvider navigation={NAVIGATION} branding={BRANDING}   >
          {children}
        </NextAppProvider>
      </Suspense>
   
  );
}