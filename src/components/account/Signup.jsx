import Input from "../Input";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appwriteSignup } from "../../service/appwrite";
import { useDispatch, useSelector } from "react-redux";
import { setAuthError, setAuthLoading } from "../../store/slice/authSlice";
import Loader from "../Loader";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading: myLoading, error: myError } = useSelector(
    (state) => state.emailAuth,
  );
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = (data) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) {
      dispatch(setAuthError("Passwords don’t match—try again carefully..."));
      return false;
    }

    if (!passwordRegex.test(password)) {
      dispatch(
        setAuthError(
          "Password must be at least 8 characters, include uppercase, lowercase, and a special character.",
        ),
      );
      return false;
    }

    return true;
  };

  const handleInput = (e) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(signupData)) {
      const { email, password } = signupData;
      const name = `${signupData.firstName} ${signupData.lastName}`;

      const func = async () => {
        try {
          dispatch(setAuthError(""));
          dispatch(setAuthLoading(true));
          if (email && password && name) {
            const result = await appwriteSignup({ email, password, name });
            if (result?.$id) {
              setSignupData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
              navigate("/signin");
            }
          }
        } catch (error) {
          dispatch(setAuthError(error?.message || "Something went wrong."));
        } finally {
          dispatch(setAuthLoading(false));
        }
      };

      func();
    }
  };

  useEffect(() => {
    dispatch(setAuthError(""));
  }, []);

  if (myLoading) return <Loader />;

  return (
    <section className="mx-auto flex min-h-[calc(100vh-196px)] max-w-[1536px] items-center justify-center px-5 py-10">
      <div className="w-full max-w-[500px] rounded-md bg-white px-8 py-6">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Create Your Account
        </h2>
        {myError && <p className="mb-2 pl-2 text-red-600">*{myError}</p>}
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
