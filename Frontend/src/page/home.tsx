import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p className="mt-4">Welcome to our site!</p>
      <Link to="/about" className="text-blue-500 underline mt-4 block">
        Go to About
      </Link>
    </div>
  );
};

export default Home;
