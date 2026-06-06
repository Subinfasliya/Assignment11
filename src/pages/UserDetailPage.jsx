import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Button from "../components/Button";
import Loader from "../components/Loader";

const UserDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = await response.json();

      if (data) {
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <>
      <h2 className="text-3xl font-bold text-center py-6">User Details Page</h2>

      <div className="px-5 py-3 h-screen">
        <div className="w-[500px] border mx-auto px-3 py-5 rounded space-y-2">
          {loading ? (
            <Loader />
          ) : user.id ? (
            <>
              <h3 className="text-2xl font-bold">{user.name}</h3>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Address: {user.address?.city}</p>

              <Link to={"/users"}>
                <Button
                  value={"Back"}
                  className={"bg-gray-500 px-4 py-2 rounded text-white font-bold "}
                />
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-2xl">No User Found</h1>
              <Link to={"/users"}>
                <Button
                  value={"Back"}
                  className={"bg-gray-500 px-4 py-2 rounded text-white cursor-pointer"}
                />
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
