import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import { useEffect, useState } from "react";
import Button from "../Button";
import { appwriteGetUser, appwriteSignin } from "../../service/appwrite";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthError,
  setAuthLoading,
  setIsLoggedIn,
} from "../../store/slice/authSlice";
import Loader from "../Loader";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading: myLoading, error: myError } = useSelector(
    (state) => state.emailAuth,
  );
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const func = async () => {
      try {
        dispatch(setAuthError(""));
        dispatch(setAuthLoading(true));
        if (userData.email && userData.password) {
          const result = await appwriteSignin(userData);
          if (result.session?.$id) {
            dispatch(setIsLoggedIn(true));
            setUserData({ email: "", password: "" });
            const userAccountData = result.user;
            if (userAccountData?.emailVerification) {
              navigate("/");
            } else {
              navigate("/verifyEmail");
            }
          }
        }
      } catch (error) {
        dispatch(setAuthError(error?.message || "Something went wrong."));
      } finally {
        dispatch(setAuthLoading(false));
      }
    };
    func();
  };

  useEffect(() => {
    dispatch(setAuthError(""));
  }, []);

  if (myLoading) return <Loader />;

  return (
    <section className="mx-auto flex min-h-[calc(100vh-196px)] max-w-[1536px] items-center justify-center px-5 py-10">
      <div className="w-full max-w-[500px] rounded-md bg-white px-8 py-6">
        <h2 className="mb-4 text-center text-2xl font-bold">Sign in</h2>
        {myError && <p className="mb-2 pl-2 text-red-600">*{myError}</p>}
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
          <Button disabled={myLoading}>Sign in</Button>
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
