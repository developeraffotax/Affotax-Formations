 


import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// export const metadata = {
//   title: "Affotax Formations",
//   description: "Create your ltd company in minutes!",
// };

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { LocalizationProvider } from "@mui/x-date-pickers";


export default function RootLayout({ children }) {





  return (
    <html lang="en" suppressHydrationWarning >
      <body>

      <AppRouterCacheProvider  >
      
     
        <div>
       {children}
          
        </div>
        
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


// theme here too to prevent ssr flicker in <ThemeProvider theme={theme}     >   

// add this below that <InitColorSchemeScript attribute="class"  />