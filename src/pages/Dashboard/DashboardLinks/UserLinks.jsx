import React from 'react'
import { BsGraphUp } from 'react-icons/bs'
import { IoMdLogIn } from "react-icons/io"
import { MdPayments } from "react-icons/md";
import Links from './Links'

function UserLinks() {
  return (
    <div>
      {/* Analytics */}
      <Links LinkName="Analytics" Icon={BsGraphUp} toLink='/dashboard'></Links>
      {/* . Registered Camps */}
      <Links LinkName="Registered Camps
" Icon={IoMdLogIn} toLink='registeredCamps'></Links>
 {/* payment */}
      <Links LinkName="Payment History" Icon={MdPayments} toLink='paymentHistory'></Links>
    </div>
  )
}

export default UserLinks
