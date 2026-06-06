import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="px-6 py-4 bg-gray-200 h-50 flex flex-col items-center justify-center space-y-5">
        <div className="">
          <p>&copy; Subin T S. Alrights Reserved</p>
        </div>
        
        <div className="w-[80%] max-w-[100%] border-[1px] border-solid border-gray-300" ></div>
        
        <div>
          <ul className="flex gap-3">
            <li>
              <Link className="hover:text-blue-500">GitHub</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500">Linkedin</Link>
            </li>
            <li>
             <Link className="hover:text-blue-500">Twitter X</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
