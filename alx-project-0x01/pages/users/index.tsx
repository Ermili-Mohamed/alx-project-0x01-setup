import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"

const Users : React.FC<UserProps[]> = ({posts})=>{
 return (
  <>
    <Header/>
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((user : UserProps) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
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

export default Users