import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
            <div className="grid grid-cols-3 gap-3 mb-8">{
[...Array.from({ length: 9 }, (_, index) => (
                <div
                    key={index}
                    className={`aspect-square rounded-lg bg-primary/10 ${index % 2 === 0 ? 'animate-pulse' : ''}`}
                ></div>
            ))]}</div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="text-base-content/60 ">{subtitle}</div>
        </div>
    </div>
  );
};

export default AuthImagePattern;
