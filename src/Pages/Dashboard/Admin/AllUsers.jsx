import { useQuery } from "@tanstack/react-query";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import Heading from "../../../Components/Heading";
import useAxios from "../../../Hooks/useAxios";
import useRole from "../../../Hooks/useRole";

const AllUsers = () => {
  const axiosInstance = useAxios();
  const roles = ["General", "Admin"];
  const { refetch: roleRefetch } = useRole();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const responce = await axiosInstance.get("/users");
      return responce.data;
    },
  });
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
          .delete(`/users/${id}`)
          .then((responce) => {
            if (responce.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  const showRoles = async (email) => {
    const { value: role } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: roles,
      inputPlaceholder: "Select a Role",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve("You need to select one :)");
          }
        });
      },
    });
    if (role) {
      axiosInstance
        .patch(`/users/role/${email}`, { role: roles[role] })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            roleRefetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Role Updated",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => console.log(error));
    }
  };
  if (isLoading) return <p>Loading.....Users</p>;
  return (
    <div>
      <Heading
        heading={"MANAGE ALL USERS"}
        subHeading={"---How many??---"}
      ></Heading>
      <div className="p-12 bg-white w-[900px]">
        <div className="flex justify-between items-center font-cinzel mb-8">
          <p className="text-[#151515] text-2xl font-bold">
            Total Users: {users.length}
          </p>
        </div>

        {/* Table Start  */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] uppercase text-white">
              <tr>
                <th className="py-7 rounded-tl-[15px]">SL.</th>
                <th className="text-center">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="rounded-tr-[15px] text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>
                    <p>{i + 1}</p>
                  </th>

                  <td className="flex items-center justify-center">
                    {user.userName}
                  </td>
                  <td>{user.userEmail}</td>
                  <td>
                    <div
                      onClick={() => showRoles(user.userEmail)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span
                        className={`${
                          user.userRole === "Admin" && "bg-purple-600"
                        } 
                        ${
                          user.userRole === "General" && "bg-green-600"
                        } font-semibold text-white px-3 py-1 rounded-full`}
                      >
                        {user.userRole}
                      </span>
                      <FaPen className="text-[10px]"></FaPen>
                    </div>
                  </td>
                  <th className="flex items-center justify-center">
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default AllUsers;
