import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center md:w-auto md:text-center space-y-5 px-6 ">
        <h2 className="text-4xl font-bold">Welcome to User Management App</h2>
        <p className="text-2xl md:px-35">
          Learn React Router step by step from beginner to advanced level.
          Understand navigation, dynamic routing, nested routes, loaders,
          protected routes and more by building real projects.
        </p>
        <Link to={"/about"} className="mt-3 bg-blue-500 w-fit rounded-lg text-white cursor-pointer hover:bg-blue-600 px-6 py-3 font-semibold md:mx-auto">
          About
        </Link>
      </div>
    </>
  );
};
export default HomePage;
