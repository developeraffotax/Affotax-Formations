'use client';
import { createTheme } from '@mui/material/styles';


const primary = {
    main: '#d27919',
    light: '#d27919',
    dark: '#d27919',
    contrastText: '#d27919',
  };


const theme = createTheme({
//   typography: {
//     fontFamily: 'var(--font-roboto)',
//   },
    
 


  palette: {
    primary: primary,
    secondary: primary,
     
  },
  cssVariables: {
    colorSchemeSelector: 'class',
    

  },
  
   
   
   
   
  
});

export default theme;