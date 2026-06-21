export default function Loader() {
  return (
    <div className="absolute inset-0 size-fit m-auto">
      <span className="loader block w-14 h-2 bg-white rounded-full relative z-0 overflow-hidden">
        <span className="loader-inner-animation bg-blue-200 absolute inset-0 rounded-full"></span>
        <span className="loader-inner-animation bg-blue-500 absolute inset-0 rounded-full"></span>
        <span className="loader-inner-animation bg-blue-900 absolute inset-0 rounded-full"></span>
      </span>
    </div>
  );
}
