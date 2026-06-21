import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import URLS from '../../constants/urls';
import useAxiosGet from '../../hooks/useAxiosGet';
import PostCard from './components/PostCard';
import Error from '../../components/Error';

export default function PostsPage() {
  const { userId } = useParams();

  const url = userId ? `${URLS.POSTS}?userId=${userId}` : URLS.POSTS;
  const { data: posts, error, loading } = useAxiosGet(url);

  return (
    <div className="min-h-dvh relative bg-gray-900 pt-14 text-white pb-48">
      {loading && <Loader />}
      {error && <Error message={error.message} />}
      <div className="flex flex-wrap gap-4 mx-auto justify-center max-w-[1200px]">
        {posts?.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
