import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" mb-32">
      <h1 className="text-4xl text-center mb-4">Login</h1>
      <form action="" className="max-w-md mx-auto border ">
        <input type="email" name="" placeholder="example@gmail.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Login here</button>
        <div className="text-center py-2 text-gray-500">Don't have an account yet ? 
        <Link to={'/register'} className="underline text-black" >Register Now </Link>
         </div>
      </form>
      </div>
    </div>
  )
}
