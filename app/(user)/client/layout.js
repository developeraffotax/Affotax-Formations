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
import PaymentIcon from '@mui/icons-material/Payment';
 
 
 
 
 
 
 
 
 



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
    pattern: 'client/companies{/:slug}*',

  },
  


 




  {
    segment: 'client/orders',
    title: 'Order History',
    icon: <ShoppingCartIcon />,
    pattern: 'client/orders{/:slug}*',
    

  },

  {
    segment: 'client/payment-methods',
    title: 'Payment Methods',
    icon: <PaymentIcon />,
     
    

  },



  {
    segment: 'client/user-details',
    title: 'Personal Details',
    icon: <AccountBoxIcon />,
    

  },
];



const BRANDING = {
  title: ' Client Portal',
  // logo: <img src="https://mui.com/static/logo.png" alt=" logo" />,

};


//theme here in this
export default function Layout({ children }) {
  // const router = useDemoRouter('/dashboard');
 
   const user =  useContext(UserContext);
  
    console.log(user)

   
    
  return (
    
      <Suspense fallback={<LinearProgress />}>
        <NextAppProvider  navigation={NAVIGATION} branding={BRANDING}  >
          {children}
        </NextAppProvider>
      </Suspense>
   
  );
}