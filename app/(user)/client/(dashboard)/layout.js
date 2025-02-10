'use client'

import {useContext} from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
 
import UserDropdown from '@/components/header/UserDropdown';
import { UserContext } from '../../layout';
import { useParams, useSearchParams } from 'next/navigation';
import { useActivePage } from '@toolpad/core';
 
 
 
export default function DashboardPagesLayout(props) {
 const user =  useContext(UserContext);
  
     


    const {slug} = useParams();
    const searchParams = useSearchParams();
    let company_name = decodeURIComponent( searchParams.get('company_name'));

    if (company_name === "null") {
     
      company_name = 'My Companies'
    }
     
    const activePage = useActivePage();
    // invariant(activePage, 'No navigation match');

     

    const title = `${company_name}`;
    const path = `${activePage.path}/${slug}`;
    
    let  breadcrumbs = [...activePage.breadcrumbs, { title, path }];

    console.log("INTO THE UDNDEF BLOCK", slug)
    if(!slug) {

      console.log("INTO THE UDNDEF BLOCK")

      // breadcrumbs = [...activePage.breadcrumbs, { title, path }];
      breadcrumbs = [{title: activePage.title, path: activePage.path}]
    }



   

  return (
    <DashboardLayout  sidebarExpandedWidth={250} slots={{toolbarAccount: () => <UserDropdown user={user.user}/>, }}>
      <PageContainer title={company_name}  breadcrumbs={breadcrumbs}  className='   min-w-full w-full  ' >{props.children}</PageContainer>
    </DashboardLayout>
  );
}