import Link from "next/link";
import { resolve } from "path";
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
      {tours?.map((tour: Tour) => {
        return (
          <Link
            key={tour.id}
            href={`tours/${tour.id}`}
            className=" hover:text-blue-500"
          >
            <h2>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
};

export default Tours;
