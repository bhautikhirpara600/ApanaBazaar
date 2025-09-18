import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);
    setSignupData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <section className="mx-auto flex min-h-[calc(100vh-196px)] max-w-[1536px] items-center justify-center px-5 py-10">
      <div className="w-full max-w-[500px] rounded-md bg-white px-8 py-6">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleInput}
            name="firstName"
            value={signupData.firstName}
            placeholder="First Name"
            required={true}
          />
          <Input
            className="my-6"
            onChange={handleInput}
            name="lastName"
            value={signupData.lastName}
            placeholder="Last Name"
            required={true}
          />
          <Input
            onChange={handleInput}
            name="email"
            value={signupData.email}
            type="email"
            placeholder="Email"
            required={true}
          />
          <Input
            onChange={handleInput}
            className="my-6"
            name="password"
            value={signupData.password}
            type="password"
            placeholder="Password"
            required={true}
          />
          <Input
            onChange={handleInput}
            name="confirmPassword"
            value={signupData.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            required={true}
          />
          <Button className="mt-6">Sign Up</Button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-red-400">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
