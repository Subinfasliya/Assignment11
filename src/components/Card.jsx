import { Link } from "react-router";
import Button from "./Button";

const Card = ({user}) => {
  return (
    <>
      <div className="card p-5 border rounded-lg space-y-2">
        <h5 className="font-bold text-xl">{user.name}</h5>
        <p>Name : {user.name}</p>
        <p>Email: {user.email} </p>
        <p>Phone: {user.phone} </p>

        <div>
          <Link to={`/users/${user.id}`}>
            <Button
              value={"View Details"}
              className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold my-2 cursor-pointer"
            />
          </Link>
        </div>

      </div>
    </>
  );
};
export default Card;
