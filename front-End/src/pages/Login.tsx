import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { heroSectionData } from "../assets/assets";
import { BikeIcon, Lock, MailIcon, UserIcon } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  }

  return (
    <div className=" min-h-screen flex min-w-screen">
      {/* Left side */}
      <div className=" hidden w-1/2 lg:flex flex-col bg-app-green text-amber-50 relative justify-center items-center">
        <img src={heroSectionData.hero_image} className=" absolute  object-cover h-full bg-center opacity-10" />
          
          <div className=" relative text-center px-12">
            <h2 className=" text-4xl font-semibold text-white mb-4">Welcome Back to Instacart</h2>
            <p className=" text-white/60 font-serif text-xl max-w-sm mx-auto">Fresh groceries organic produce, delivered to your door step.</p>
          </div>
      </div>

      {/* Right Side */}

      <div className=" flex-1 flex-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link to="/" className=" inline-flex items-center gap-2 mb-6">
                <BikeIcon className=" text-app-green size-8" />
                <span className="text-2xl font-semibold text-app-green">Instacart</span>
              </Link>
              <h1 className=" text-app-green text-2xl font-semibold mb-2">
                {isLoggedIn ? "Sign in your account" : "Sign up your account"}
              </h1>
              <div className=" text-sm text-app-text-light">
                {isLoggedIn ? "Don't have an accoount?" :
                 "Already have an account?"} 
                 <button className="text-orange-500 ml-1 font-semibold" onClick={() =>setIsLoggedIn(!isLoggedIn  )}> 
                  {isLoggedIn ? "Create one" : "Sign in"}
                 </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLoggedIn && (
                <>
                  <label className="text-sm flex flex-col gap-1">
                    Name
                    <div className="relative">
                      <UserIcon className=" absolute left-3.5 top-1/2 translate-y-1/2 size-4 text-app-text-light"/>
                      <input 
                        name="name" type="text"
                        value={name} onChange={ (e)=>setName(e.target.value)}
                      />
                    </div>
                  </label>

                  <label className="text-sm flex flex-col gap-1">
                    Email
                    <div className="relative">
                        <MailIcon
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                  </label>
                  <label className="text-sm flex flex-col gap-1">
                    Password
                    <div className="relative">
                        <Lock
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                  </label>
                </>
              )}

            </form>

        </div>
      </div>

    </div>
  )
}

export default Login