import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <div className="border-2 group border-pink rounded-lg h-auto w-auto">
        <div className="flex justify-center mt-5 ">{props.children}</div>
        <div className="text-center  mt-5">
          <h1 className="text-lg">{props.title}</h1>
          <p className="text-sm text-gray mt-2 mb-3">{props.disc}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
