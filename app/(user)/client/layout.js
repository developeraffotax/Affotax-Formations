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
 
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
 
 
 
 
 
 
 



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
    icon: <HomeOutlinedIcon />,
    pattern: 'client/companies{/:slug}*',

  },
  

  {
    segment: 'client/payment-methods',
    title: 'Payment Methods',
    icon: <PaymentsOutlinedIcon />,
     
    

  },



  {
    segment: 'client/user-details',
    title: 'Personal Details',
    icon: <AccountCircleOutlinedIcon />,
    

  },
 




  {
    segment: 'client/orders',
    title: 'My Order History',
    icon: <HistoryOutlinedIcon />,
    pattern: 'client/orders{/:slug}*',
    

  },



  {
    segment: 'client/login-details',
    title: 'Login Details',
    icon: <LoginOutlinedIcon />,
    

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