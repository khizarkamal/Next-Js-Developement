import React from "react";

const TourLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className=" w-1/2 py-4 bg-slate-600 rounded text-center mb-4">
        <h1 className=" text-white capitalize text-3xl">Nested Route</h1>
      </section>
      <div>{children}</div>
    </>
  );
};

export default TourLayout;
