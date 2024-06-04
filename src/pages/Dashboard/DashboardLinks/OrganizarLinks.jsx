
import { MdAddHomeWork } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import Links from "./Links";
function OrganizarLinks() {
  return (
    <div>
     {/* Add A Camp */}
     <Links LinkName=" Add A Camp" Icon={MdAddHomeWork} toLink='/dashboard'></Links>
     {/* Manage Camps */}
     <Links LinkName="Manage Camps" Icon={MdManageAccounts} toLink='manageCamps'></Links>
     {/* Manage Registered Camps */}
     <Links LinkName="Registered Camps" Icon={FaUsersCog} toLink='resisteredCamps'></Links>

    </div>
  )
}

export default OrganizarLinks
