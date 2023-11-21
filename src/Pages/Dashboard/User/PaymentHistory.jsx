import Heading from "../../../Components/Heading";

const PaymentHistory = () => {
  const payments = [1, 2, 3, 4, 5];
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
                    {"Email"}
                  </td>
                  <td>{"Total Price"}</td>
                  <td>{"Payment Date"}</td>
                  <th>
                    <button>Details</button>
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
