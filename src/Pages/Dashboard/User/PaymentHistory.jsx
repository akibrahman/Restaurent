import moment from "moment/moment";
import Heading from "../../../Components/Heading";
import usePaymentHispory from "../../../Hooks/usePaymentHispory";

const PaymentHistory = () => {
  const { data: payments, isLoading } = usePaymentHispory();
  if (isLoading) return <p>Loading.......</p>;
  return (
    <div>
      <Heading
        heading={"PAYMENT HISTORY"}
        subHeading={"---At a Glance!---"}
      ></Heading>
      <div className="p-12 bg-white w-[900px]">
        <div className="flex justify-between items-center font-cinzel mb-8">
          <p className="text-[#151515] text-2xl font-bold">
            Total Payments: {payments.length}
          </p>
        </div>

        {/* Table Start  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th className="py-7 rounded-tl-[15px]">SL.</th>
                <th className="text-center">E-mail</th>
                <th>Total Price</th>
                <th>Payment Date</th>
                <th className="rounded-tr-[15px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              {payments.map((payment, i) => (
                <tr key={payment._id}>
                  <th>
                    <p>{i + 1}</p>
                  </th>

                  <td className="flex items-center justify-center">
                    {payment.email}
                  </td>
                  <td>
                    ${(payment.paymentConfirmDetails.amount / 100).toFixed(2)}
                  </td>
                  <td>
                    <p>{moment(payment.paymentDate).format("Do MMM YYYY")}</p>
                    <p>{}</p>
                  </td>
                  <th className="flex justify-center">
                    <button className="bg-[#D1A054] text-white px-4 py-1 rounded-full duration-300 active:scale-90">
                      Details
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
