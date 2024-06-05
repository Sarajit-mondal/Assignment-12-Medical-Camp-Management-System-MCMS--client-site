import React from 'react'
import PaymentTable from '../../../components/dashboard/UserDashboard/PaymentTable';
import Heading from '../../../components/Shared/Heading';

function PaymentHistory() {
const participant = {
        name: 'John Doe',
        fees: '$200',
        paymentStatus: 'Paid',
        confirmationStatus: 'Confirmed'
      };
  return (
    <div className='space-y-4'>
     <Heading  title="Payment History" subtitle="This is your all payment History" center="center"></Heading>
      {/* payment history */}
      <PaymentTable participant={participant}></PaymentTable>
    </div>
  )
}

export default PaymentHistory
