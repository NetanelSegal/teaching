import { useNavigate } from "react-router-dom";
import AnimatedUnderlineText from "../../../components/AnimatedUnderlineText";
export default function UserCard({
  address: { city, street, suite, zipcode },
  company: { name: companyName, bs, catchPhrase },
  email,
  id,
  name,
  phone,
  website,
}) {
  const nav = useNavigate();
  const handleShowUserProfile = () => {
    nav(`/user/${id}`);
  };

  return (
    <div className="p-4 border-b border-gray-300 grow flex flex-col">
      <div className="flex justify-between items-center">
        <div
          onClick={handleShowUserProfile}
          className="flex gap-2 items-center group cursor-pointer"
        >
          <span className="size-8 relative text-gray-900 bg-blue-200 rounded-full group-hover:scale-110 transition-transform duration-75">
            <i className="fa-solid fa-user absolute inset-0 size-fit m-auto"></i>
          </span>
          <AnimatedUnderlineText className>{name}</AnimatedUnderlineText>
        </div>
        <span className="bg-gray-200 px-2 rounded-full text-gray-800 font-semibold">
          ID - {id}
        </span>
      </div>

      <p>
        <strong>Company:</strong> {companyName}
      </p>
      <p>
        <strong>BS:</strong> {bs}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {catchPhrase}
      </p>
      <p>
        <i className="fa-solid fa-location-pin"></i> {street}, {suite}, {city},{" "}
        {zipcode}
      </p>
      <p>
        <i className="fa-solid fa-phone"></i>{" "}
        <a className="text-blue-200 underline" href={`tel:${phone}`}>
          {phone}
        </a>
      </p>
      <p>
        <i className="fa-solid fa-globe"></i>{" "}
        <a
          className="text-blue-200 underline"
          target="_blank"
          href={`https://${website}`}
        >
          {website}
        </a>
      </p>
      <p>
        <i className="fa-solid fa-envelope"></i>{" "}
        <a className="text-blue-200 underline" href="mailto:{email}">
          {email}
        </a>
      </p>
      <button
        className="bg-gray-800 p-2 mt-2 rounded-lg"
        onClick={() => {
          console.log("asd");

          nav("/posts/" + id);
        }}
      >
        Show posts
      </button>
    </div>
  );
}
