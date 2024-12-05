import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackToProfileLink() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center text-white hover:text-gray-300 transition-all duration-300"
    >
      <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="relative">
        Back to Profile
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </span>
    </Link>
  );
}