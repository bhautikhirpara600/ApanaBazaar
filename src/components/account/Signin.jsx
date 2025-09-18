import { Link } from "react-router-dom";
import Input from "../Input";
import { useState } from "react";
import Button from "../Button";

function Signin() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData({ email: "", password: "" });
  };
  return (
    <section className="mx-auto flex min-h-[calc(100vh-196px)] max-w-[1536px] items-center justify-center px-5 py-10">
      <div className="w-full max-w-[500px] rounded-md bg-white px-8 py-6">
        <h2 className="mb-4 text-center text-2xl font-bold">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleInput}
            value={userData.email}
            type="email"
            name="email"
            placeholder="Email Address"
            required={true}
          />
          <Input
            onChange={handleInput}
            className="my-6"
            value={userData.password}
            type="password"
            name="password"
            placeholder="Password"
            required={true}
          />
          <Button>Sign in</Button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-red-400">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signin;
