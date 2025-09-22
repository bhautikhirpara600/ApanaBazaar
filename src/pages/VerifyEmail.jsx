import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthError, setAuthLoading } from "../store/slice/authSlice";
import {
  appwriteCreateVerification,
  appwriteUpdateVerification,
} from "../service/appwrite";
import { appwriteVar } from "../service/config";
import Loader from "../components/Loader";
import { ButtonOrange } from "../components";

function VerifyEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading: myLoading, error: myError } = useSelector(
    (state) => state.emailAuth,
  );
  const [showModal, setShowModal] = useState(true);

  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const secret = params.get("secret");

  const handleVerification = () => {
    setShowModal(false);
    const func = async () => {
      try {
        dispatch(setAuthError(""));
        dispatch(setAuthLoading(true));
        await appwriteCreateVerification({
          url: appwriteVar.APPWRITE_REDIRECT_URL,
        });
      } catch (error) {
        dispatch(setAuthError(error?.message || "Something went wrong."));
      } finally {
        dispatch(setAuthLoading(false));
      }
    };
    func();
  };

  useEffect(() => {
    const func = async () => {
      try {
        dispatch(setAuthError(""));
        dispatch(setAuthLoading(true));
        if (userId && secret) {
          const result = await appwriteUpdateVerification({ userId, secret });
          if (result.userId) {
            navigate("/");
          } else {
            dispatch(setAuthError("Email verification failed..."));
          }
        }
      } catch (error) {
        dispatch(setAuthError(error?.message || "Something went wrong."));
      } finally {
        dispatch(setAuthLoading(false));
      }
    };
    func();
  }, [userId, secret]);

  if (myLoading) return <Loader />;

  return (
    <section className="mx-auto flex min-h-[calc(100vh-196px)] max-w-[1536px] items-center justify-center px-5 py-10">
      {myError && <p className="mb-2 pl-2 text-red-600">*{myError}</p>}
      {showModal ? (
        <div className="w-full max-w-[500px] rounded-sm bg-amber-200 px-4 py-8 text-center text-gray-800">
          <p className="media720:text-2xl text-[18px]">
            Would you like to verify your email?
          </p>
          <p className="media720:text-2xl mt-4 text-[18px]">
            If you verify your email, you'll receive a special discount on our
            products!
          </p>
          <div className="mt-6 flex items-center justify-between px-6">
            <ButtonOrange className="py-2" onClick={handleVerification}>
              Yes
            </ButtonOrange>
            <ButtonOrange className="py-2" onClick={() => navigate("/")}>
              No
            </ButtonOrange>
          </div>
        </div>
      ) : (
        <p className="media720:text-2xl text-[18px]">
          Please check your email...
        </p>
      )}
    </section>
  );
}

export default VerifyEmail;
