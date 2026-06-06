import React from "react";
import Button from "../components/Button";
import { useLoaderData } from "react-router";
import Card from "../components/Card";


const UserPage = () => {

  const users = useLoaderData();

  

  return (
    <>
      <div className="px-6 py-3">
        <h2 className="text-3xl font-bold text-center py-6">User Lists</h2>

        <div className="my-10 h-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {users.map((user) => <Card user={user} key={user.id}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
