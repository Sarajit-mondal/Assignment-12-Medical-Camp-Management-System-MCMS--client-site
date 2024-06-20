import React, { useEffect, useState } from 'react'
import PaymentTable from '../../../components/dashboard/UserDashboard/PaymentTable';
import Heading from '../../../components/Shared/Heading';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async'
import useAxiosCommon from '../../../hooks/useAxiosCommon';
function PaymentHistory() {
const axiosSecure = useAxiosSecure()
const axiosCommon = useAxiosCommon()
// pagination 
const [totalData,setTotalData] = useState(1)
const [showPerPage,setShowPerPage] = useState(5)
const [currentPage,setCurrentPage] = useState(1)
const total = async()=>{
  const { data } = await axiosCommon.get(`/allcampCount`);
  //("count data",data.count)
    setTotalData(data.allMyPaymentsCount)
 
}
total()

// pagination 
const {user,loading} = useAuth()
const {data: paymentHistores =[],refetch} = useQuery({
  queryKey : ['paymentHistory'],
  enabled : !loading && !!user?.email,
  queryFn : async () => getAllCampData()
})

const getAllCampData =async()=>{
  const { data } = await axiosCommon.get(`/allMyPayments/${user?.email}?limit=${showPerPage}&page=${currentPage}`);
  return data
}
useEffect(()=>{
  refetch()
},[currentPage,totalData,showPerPage])


//(paymentHistores)
  return (
    <div className='space-y-4'>
      <Helmet title='Payment History'></Helmet>
     <Heading  title="Payment History" subtitle="This is your all payment History" center="center"></Heading>
      {/* payment history */}
      <PaymentTable paymentHistores={paymentHistores} totalData={totalData}showPerPage={showPerPage}setShowPerPage={setShowPerPage}setCurrentPage={setCurrentPage} currentPage={currentPage}></PaymentTable>
    </div>
  )
}

export default PaymentHistory
