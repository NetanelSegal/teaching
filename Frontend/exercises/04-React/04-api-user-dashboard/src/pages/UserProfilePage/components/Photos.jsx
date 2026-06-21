import { useState } from "react";
import useAxiosGet from "../../../hooks/useAxiosGet";
import Loader from "../../../components/Loader";
import Error from "../../../components/Error";
import URLS from "../../../constants/urls";

export default function Photos({ albumId }) {
  const [showPhotos, setShowPhotos] = useState(false);

  const photosUrl = albumId ? `${URLS.PHOTOS}?albumId=${albumId}` : URLS.PHOTOS;
  const { data: photos, error, loading } = useAxiosGet(photosUrl);

  return (
    <>
      <h2 className="text-xl font-semibold text-blue-200 ml-4 ">
        Photos{" "}
        <i
          className={`fa-solid fa-chevron-right text-sm transition-transform ${
            showPhotos ? "rotate-90" : "rotate-0"
          } transition-all ease-in duration-150`}
          onClick={() => setShowPhotos((prev) => !prev)}
        ></i>
      </h2>
      <div className="flex gap-1 justify-left pl-4 w-full overflow-x-auto">
        {loading && <Loader />}
        {error && <Error message={error.message} />}
        {showPhotos &&
          photos?.map((photo) => (
            <img
              className="object-cover size-20 rounded-xl border-2 border-blue-200 text-ellipsis mb-2"
              src={photo.thumbnailUrl || photo.url}
              alt={photo.title}
            />
          ))}
      </div>
    </>
  );
}
