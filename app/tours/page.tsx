import Link from "next/link";
import Image from "next/image";
import React from "react";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const url = "https://www.course-api.com/react-tours-project";
  const resp = await fetch(url);
  const data: Tour[] = await resp.json();
  return data;
};

const Tours = async () => {
  const tours: Tour[] = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-2">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-4">
        {tours?.map((tour: Tour) => {
          return (
            <Link
              key={tour.id}
              href={`tours/${tour.id}`}
              className=" hover:text-blue-500"
            >
              <div className="relative h-48 mb-2">
                <Image
                  className=" object-cover rounded"
                  src={tour.image}
                  alt={tour.name}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw  "
                  fill
                />
              </div>
              <h2>{tour.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
