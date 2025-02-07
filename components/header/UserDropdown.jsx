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

    return (
      <div className="flex items-center gap-4 font-poppins ">
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src={<HiMiniUserCircle />}
            />
          </DropdownTrigger>


          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}







        <Dropdown placement="bottom-start" className="font-poppins dark:bg-black dark:text-white" classNames={{
          content: 'bg-blue-700 text-white'
        }} >
          <DropdownTrigger>
            <User
              as="button"
              
              avatarProps={{
                 className: 'bg-transparent',
                isBordered: false,
                icon: <LuCircleUserRound className="text-3xl -mr-2 text-gray-700 "/>,
               
              }}
              className="transition-transform  "
              // description={user?.email}
              name={"My Account"}
            />
          </DropdownTrigger>


          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem  key="/client/dashboard" ><Link  href="/client/dashboard"><h3  >Dashboard</h3></Link></DropdownItem>
            <DropdownItem key="/client/companies"><Link  href="/client/companies"><h3>My Companies</h3></Link></DropdownItem>
            <DropdownItem key="/client/orders"><Link href="/client/orders"><h3>Orders</h3></Link></DropdownItem>
            <DropdownItem key="/client/user-details"><Link href="/client/user-details"><h3>Personal Details</h3></Link></DropdownItem>
            {/* <DropdownItem key="companies">Companies</DropdownItem>
            <DropdownItem key="orders">Orders</DropdownItem>
            <DropdownItem key="mail">Mail</DropdownItem> */}
            <DropdownItem onPress={handleLogout} key="logout" color="danger"> Log Out </DropdownItem>


          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
  