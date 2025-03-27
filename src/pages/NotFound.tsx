
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-enterprise flex flex-col items-center justify-center px-4 text-white">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-7xl font-bold mb-4 text-brand-primary">404</h1>
        <p className="text-2xl font-medium mb-6 text-white">Page not found</p>
        <p className="text-mk-text-light mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center justify-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
