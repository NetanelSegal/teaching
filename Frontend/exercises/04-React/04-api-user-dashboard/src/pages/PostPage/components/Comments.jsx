import Loader from '../../../components/Loader';
import URLS from '../../../constants/urls';
import useAxiosGet from '../../../hooks/useAxiosGet';

export default function Comments({ postId, toggle }) {
  const {
    data: comments = [],
    error,
    loading,
  } = useAxiosGet(`${URLS.COMMENTS}?postId=${postId}`);
  return (
    <>
      {toggle && (
        <div className="flex flex-col p-2 mt-2 bg-white rounded-2xl gap-2 absolute top-[102%] z-10 left-0 right-0 max-h-52 overflow-y-auto">
          <p className="font-semibold text-gray-900 text-end">
            Total: {comments?.length}
          </p>
          {loading && (
            <div className="text-center">
              <Loader />
            </div>
          )}
          {error && (
            <div className="text-center text-red-500 font-semibold">
              {error.message}
            </div>
          )}
          {comments?.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </>
  );
}

const Comment = ({ body, email, name }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-xl text-gray-900">
      <div className="border-b-2 border-gray-900 pb-2">
        <p className="font-bold">{name}</p>
        <p className="font-semibold">{email}</p>
      </div>
      <p className="pt-2">{body}</p>
    </div>
  );
};
