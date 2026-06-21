import AnimatedUnderlineText from "../components/AnimatedUnderlineText";

export default function HomePage() {
  return (
    <div className="h-dvh relative bg-gray-900">
      <div className="absolute text-white inset-0 size-fit m-auto text-center sm:text-left p-5">
        <h1 className="text-4xl font-bold text-blue-200">Welcome</h1>
        <h3 className="text-4xl">
          here we showcase <AnimatedUnderlineText>users</AnimatedUnderlineText>
          <br />
          and their <AnimatedUnderlineText>info</AnimatedUnderlineText>
        </h3>
      </div>
    </div>
  );
}
