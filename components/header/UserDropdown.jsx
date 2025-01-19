import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, } from "@heroui/react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { SlUserFollowing } from "react-icons/sl";
import { LuCircleUserRound } from "react-icons/lu";
import { logout } from "@/lib/supabase/logout";
import { useRouter } from "next/navigation";


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







        <Dropdown placement="bottom-start" className="font-poppins ">
          <DropdownTrigger>
            <User
              as="button"
              
              avatarProps={{
                 className: 'bg-transparent',
                isBordered: false,
                icon: <LuCircleUserRound className="text-3xl -mr-2 text-gray-700 "/>,
               
              }}
              className="transition-transform  "
              description={user?.email}
              name={"My Account"}
            />
          </DropdownTrigger>


          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="dashboard">Dashboard</DropdownItem>
            <DropdownItem key="partner-offers">Partner Offers</DropdownItem>
            <DropdownItem key="finances">Finances</DropdownItem>
            <DropdownItem key="services">Services</DropdownItem>
            <DropdownItem key="companies">Companies</DropdownItem>
            <DropdownItem key="orders">Orders</DropdownItem>
            <DropdownItem key="mail">Mail</DropdownItem>
            <DropdownItem onPress={handleLogout} key="logout" color="danger"> Log Out </DropdownItem>


          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
  