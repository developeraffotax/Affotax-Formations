import { NextAppProvider } from '@toolpad/core/nextjs';
import LinearProgress from '@mui/material/LinearProgress';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Suspense } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import "../globals.css";
import ApartmentIcon from '@mui/icons-material/Apartment';



const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'companies',
    title: 'Companies',
    icon: <ApartmentIcon />,

  },
];



const BRANDING = {
  title: 'Affotax Formations Client Portal',
};



export default function Layout({ children }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <Suspense fallback={<LinearProgress />}>
        <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
          {children}
        </NextAppProvider>
      </Suspense>
    </AppRouterCacheProvider>
  );
}