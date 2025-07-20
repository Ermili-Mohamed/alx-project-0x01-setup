import UserCard from "@/components/common/UserCard"
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header"
import { UserData, UserProps } from "@/interfaces"
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {

 const [isModalOpen, setModalOpen] = useState(false);
 const [user, setUser] = useState<UserData | null>(null);


 const handleAddUser = (newPost: UserData) => {
  setUser({ ...newPost, id: posts.length + 1 });
 };


 return (
  <>
   <Header />
   <div className="p-8">
    <div className="flex justify-between">
     <h1 className="text-3xl font-bold mb-6">Users</h1>
     <button onClick={() => setModalOpen(true)}
      className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User
     </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     {posts.map((user: UserProps) => (
      <UserCard key={user.id} {...user} />
     ))}
    </div>
   </div>
   {isModalOpen && (
    <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
   )}
  </>
 )
}

export async function getStaticProps() {
 const response = await fetch("https://jsonplaceholder.typicode.com/users")
 const posts = await response.json()

 return {
  props: {
   posts
  }
 }
}

export default Users;