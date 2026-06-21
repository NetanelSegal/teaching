import UserCard from './components/UserCard';
import Loader from '../../components/Loader';
import URLS from '../../constants/urls';
import useAxiosGet from '../../hooks/useAxiosGet';
import Error from '../../components/Error';

export default function UsersPage() {
  const { data: users, error, loading } = useAxiosGet(URLS.USERS);

  return (
    <div className='min-h-dvh relative bg-gray-900 pt-14 text-white'>
      {loading && <Loader />}
      {error && <Error message={error.message} />}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[1200px]'>
        {users?.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
