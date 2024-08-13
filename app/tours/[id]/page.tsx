import React from "react";
import mapImage from "@/images/maps.jpg";

console.log("Image--", mapImage);

const Tour = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Tour Id: {params.id}</h3>
    </div>
  );
};

export default Tour;
