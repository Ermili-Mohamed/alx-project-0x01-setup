import { UserProps } from "@/interfaces"

const UserCard : React.FC<UserProps> = ({ name, username, email, phone, website, company, address })=>{
   return (
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-sm text-gray-500">📧 {email}</p>
      <p className="text-sm text-gray-500">📞 {phone}</p>
      <p className="text-sm text-gray-500">🌐 {website}</p>
      <p className="text-sm text-gray-500">🏢 {company.name}</p>
      <p className="text-sm text-gray-500">📍 {address.city}</p>
    </div>
  );
}

export default UserCard