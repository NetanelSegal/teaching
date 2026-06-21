import { useState } from 'react';
import useAxiosGet from '../../../hooks/useAxiosGet';
import URLS from '../../../constants/urls';
import Loader from '../../../components/Loader';
import Comments from './Comments';

export default function PostCard({ title, body, userId, id: postId }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gray-700 p-4 rounded-lg max-w-96 relative flex flex-col">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold text-blue-200">{title}</h2>
        <span className="bg-gray-200 min-w-max ml-2 px-2 rounded-full text-gray-800 font-semibold">
          User ID - {userId}
        </span>
      </div>
      <p className="text-gray-300 mb-2">{body}</p>
      <button
        className="text-blue-200 bg-gray-800 p-2 rounded-lg self-start mt-auto"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? 'Hide' : 'Show'} Comments
      </button>
      <div className="relative">
        <Comments postId={postId} toggle={toggle} />
      </div>
    </div>
  );
}
