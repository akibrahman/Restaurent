import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Heading from "../../../Components/Heading";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const { carts, isLoading, refetch } = useCart();
  const axiosInstance = useAxios();
  const totalPrice = carts?.reduce((a, b) => a + b.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/carts/${id}`)
          .then(() => {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => console.log(error));
      }
    });
  };
  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      <Heading
        heading={"WANNA ADD MORE?"}
        subHeading={"---My Cart---"}
      ></Heading>
      <div className="p-12 bg-white w-[900px]">
        <div className="flex justify-between items-center font-cinzel mb-8">
          <p className="text-[#151515] text-2xl font-bold">
            Total Orders: {carts.length}
          </p>
          <p className="text-[#151515] text-2xl font-bold">
            Total Price: {totalPrice}
          </p>
          <button className="bg-[#D1A054] px-2 py-1 rounded-md text-white font-semibold duration-300 active:scale-75">
            Pay
          </button>
        </div>

        {/* Table Start  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th className="py-7 rounded-tl-[15px]">SL.</th>
                <th className="text-center">Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th className="rounded-tr-[15px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              {carts.map((item, i) => (
                <tr key={item._id}>
                  <th>
                    <p>{i + 1}</p>
                  </th>

                  <td className="flex items-center justify-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <th className="flex items-center justify-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error text-white text-xl"
                    >
                      <MdDelete />
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

export default Cart;
