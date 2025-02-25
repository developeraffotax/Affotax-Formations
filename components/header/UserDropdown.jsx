import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, } from "@heroui/react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { SlUserFollowing } from "react-icons/sl";
import { LuCircleUserRound } from "react-icons/lu";
import { logout } from "@/lib/supabase/logout";
import { useRouter } from "next/navigation";
import Link from "next/link";


  export default function UserDropdown({user}) {

    const router =  useRouter()

    const handleLogout = async () => {
      await logout();

      router.push('/client-login')

    }

    console.log(user)
    return (
      <div className="flex items-center gap-4 font-poppins ">
         







        <Dropdown placement="bottom-start" className="font-poppins    " classNames={{
          content: 'bg-blue-700 text-white'
        }} >
          <DropdownTrigger>
            <User
              as="button"
              
              avatarProps={{
                className: 'bg-transparent  ',
                isBordered: false,

                  icon: <LuCircleUserRound className="text-3xl -mr-2 text-gray-700 "/>,
               
              }}
              className="transition-transform  "
              // description={user?.email}
              name={<p className="max-lg:hidden">My Account</p>}
               
            />
          </DropdownTrigger>


          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2 w-full">
              <p className="font-bold">Signed in as</p>
               {/*<p className="font-bold">{"email"}</p> */}
              <p className=" ">{user?.email }</p>
            </DropdownItem>
            <DropdownItem   ><Link  href="/client/dashboard"><h3  >Dashboard</h3></Link></DropdownItem>
            <DropdownItem><Link  href="/client/companies"><h3>My Companies</h3></Link></DropdownItem>
            <DropdownItem><Link href="/client/orders"><h3>Orders</h3></Link></DropdownItem>
            <DropdownItem ><Link href="/client/user-details"><h3>Personal Details</h3></Link></DropdownItem>
          
            <DropdownItem onPress={handleLogout} key="logout" color="danger"> Log Out </DropdownItem>


          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
  