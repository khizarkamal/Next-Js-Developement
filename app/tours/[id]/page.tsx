import React from "react";
import mapImage from "@/images/maps.jpg";
import Image from "next/image";

const Tour = ({ params }: { params: { id: string } }) => {
  const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

  return (
    <div>
      <h3 className="text-3xl font-bold">Tour Id: {params.id}</h3>
      <div className="flex gap-x-4 mt-4">
        {/* Local Image */}
        <div>
          <Image
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
            priority
            src={mapImage}
            alt="local-image"
          />
          <h2>Local Image</h2>
        </div>
        {/* Remote Image */}
        <div>
          <Image
            className="w-48 h-48 object-cover rounded"
            src={url}
            alt="remote-url"
            width={192}
            height={192}
            priority
          />
          <h2>Remote Image</h2>
        </div>
      </div>
    </div>
  );
};

export default Tour;
