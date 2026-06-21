import { Navigate, useNavigate, useParams } from "react-router-dom";
import useAxiosGet from "../../hooks/useAxiosGet";
import URLS from "../../constants/urls";
import UserCard from "../UsersPage/components/UserCard";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Albums from "./components/Albums";

export default function UserProfilePage() {
  const { userId } = useParams();
  const {
    data: userData,
    error,
    loading,
  } = useAxiosGet(`${URLS.USERS}/${userId}`);

  return (
    <div className="min-h-dvh relative bg-gray-900 pt-14 text-white px-5">
      {loading && <Loader />}
      {error && <Error message={error.message} />}

      <div className="mx-auto flex flex-col lg:flex-row justify-center gap-4">
        <div className="min-w-[400px] shrink-0">
          {userData && <UserCard {...userData} />}
        </div>

        <div className="bg-gray-700 rounded-xl p-2 lg:w-1/3">
          <Albums userId={userId} />
        </div>
      </div>
    </div>
  );
}
