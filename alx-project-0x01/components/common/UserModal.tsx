import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
 const [user, setUser] = useState<UserData>({
  id: 1,
  name: "",
  username: "",
  email: "",
  address: {
   street: "",
   suite: "",
   city: "",
   zipcode: "",
   geo: {
    lat: "",
    lng: ""
   }
  },
  phone: "",
  website: "",
  company: {
   name: "",
   catchPhrase: "",
   bs: "",
  },
 });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setUser((prevPost) => ({ ...prevPost, [name]: value }));
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  onSubmit(user);
  onClose();
 };

 return (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
   <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
    <form onSubmit={handleSubmit}>
     <div className="mb-4">
      <label className="block mb-1 font-medium">Name</label>
      <input
       type="text"
       name="name"
       value={user.name}
       onChange={handleChange}
       className="w-full border px-4 py-2 rounded"
      />
     </div>
     <div className="mb-4">
      <label className="block mb-1 font-medium">Username</label>
      <input
       type="text"
       name="username"
       value={user.username}
       onChange={handleChange}
       className="w-full border px-4 py-2 rounded"
      />
     </div>
     <div className="mb-4">
      <label className="block mb-1 font-medium">Email</label>
      <input
       type="email"
       name="email"
       value={user.email}
       onChange={handleChange}
       className="w-full border px-4 py-2 rounded"
      />
     </div>
     <div className="mb-4">
      <label className="block mb-1 font-medium">Phone</label>
      <input
       type="text"
       name="phone"
       value={user.phone}
       onChange={handleChange}
       className="w-full border px-4 py-2 rounded"
      />
     </div>
     <div className="mb-4">
      <label className="block mb-1 font-medium">Website</label>
      <input
       type="text"
       name="website"
       value={user.website}
       onChange={handleChange}
       className="w-full border px-4 py-2 rounded"
      />
     </div>
     {/* Optional: handle nested address/company fields if needed */}
     <div className="flex justify-between mt-6">
      <button
       type="button"
       onClick={onClose}
       className="text-gray-500 hover:text-gray-700"
      >
       Cancel
      </button>
      <button
       type="submit"
       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
       Add User
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default UserModal;