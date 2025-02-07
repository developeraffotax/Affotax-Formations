'use client'

import {useContext} from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
 
import UserDropdown from '@/components/header/UserDropdown';
import { UserContext } from '../../layout';
 
 
 
export default function DashboardPagesLayout(props) {
 const user =  useContext(UserContext);
  
    console.log(user)

   

  return (
    <DashboardLayout   slots={{toolbarAccount: () => <UserDropdown user={user.user}/> }}>
      <PageContainer  className='   min-w-full w-full  '>{props.children}</PageContainer>
    </DashboardLayout>
  );
}