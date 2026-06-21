import AnimatedUnderlineText from "../components/AnimatedUnderlineText";

export default function PageNotFound() {
  return (
    <div className="text-center h-screen bg-gray-900 relative">
      <span className="text-5xl font-bold text-red-500 absolute inset-0 size-fit m-auto">
        <AnimatedUnderlineText
          textColor="text-red-500"
          lineColor="bg-red-500"
          fontWeight="font-bold"
        >
          404
        </AnimatedUnderlineText>{" "}
        Not Found
      </span>
    </div>
  );
}
