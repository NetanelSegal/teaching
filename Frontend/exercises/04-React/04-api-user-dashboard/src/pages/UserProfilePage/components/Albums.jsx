import React, { useEffect, useState } from "react";
import useAxiosGet from "../../../hooks/useAxiosGet";
import Loader from "../../../components/Loader";
import URLS from "../../../constants/urls";
import Error from "../../../components/Error";
import Photos from "./Photos";

export default function Albums({ userId }) {
  const albumsUrl = userId ? `${URLS.ALBUMS}?userId=${userId}` : URLS.ALBUMS;
  const { data: albums, error, loading } = useAxiosGet(albumsUrl);
  const [showPhotos, setShowPhotos] = useState([]);

  useEffect(() => {
    if (albums) {
      setShowPhotos(Array.from({ length: albums?.length }, () => false));
    }
  }, [albums]);
  console.log("showPhotos", showPhotos);

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={error.message} />}
      <h2 className="text-2xl font-bold text-blue-200">Albums</h2>
      <ul className="w-full">
        {albums?.map((album, i) => (
          <li key={album.id} className="w-full">
            <div className="flex items-center">
              <span className="text-blue-200 px-1">{i + 1} -</span>
              <p>{album.title}</p>
            </div>
            <Photos albumId={album.id} />
          </li>
        ))}
      </ul>
    </>
  );
}
