import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Heading from "../../../Components/Heading";
import useAllMenu from "../../../Hooks/useAllMenu";
import useAxios from "../../../Hooks/useAxios";

const ManageItems = () => {
  const { items, refetch } = useAllMenu();
  const axiosInstance = useAxios();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosInstance.delete(`/all-menu/${id}`);
        if (response.data.deletedCount > 0) {
          refetch();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Item Deleted Successfully",
          });
        }
      }
    });
  };
  return (
    <div>
      <Heading
        heading={"MANAGE ALL ITEMS"}
        subHeading={"---Hurry Up!---"}
      ></Heading>
      <div className="p-12 bg-white mb-12 w-[900px]">
        <div className="flex justify-between items-center font-cinzel mb-8">
          <p className="text-[#151515] text-2xl font-bold">
            Total Items: {items.length}
          </p>
        </div>

        {/* Table Start  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th className="py-7 rounded-tl-[15px]">SL.</th>
                <th className="text-center">Item Image</th>
                <th className="text-left">Item Name</th>
                <th>Price</th>
                <th className="rounded-tr-[15px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              {items.map((item, i) => (
                <tr key={item._id}>
                  <th>
                    <p>{i + 1}</p>
                  </th>

                  <td>
                    <img className="w-16 rounded-md" src={item.image} alt="" />
                  </td>

                  <td className="flex items-center justify-start">
                    {item.name}
                  </td>
                  <td>${item.price}</td>
                  <th className="flex items-center justify-center gap-2">
                    <Link to={`/dashboard/update-items/${item._id}`}>
                      <button
                        title="Update Item"
                        className="btn btn-sm btn-warning text-white text-xl"
                      >
                        <MdEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      title="Delete Item"
                      className="btn btn-sm btn-error text-white text-xl"
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

export default ManageItems;
