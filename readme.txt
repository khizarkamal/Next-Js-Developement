// Layout 
For Root Layout we have to provide the html and body tags

// Hosting fonts

// Client Components Vs Server Componenets
By default all components are server components

//Server Component 
1-- Data fetching
Super Fast as we return Html cod e instaed of Js and request
usually completes fast on the  server

const url = "https://www.course-api.com/react-tours-project";

type Tour {
    id:string;
    name:string;
    info:string;
    image:string;
    price:string;
}

const Tours = async () => {
  const url = "https://www.course-api.com/react-tours-project";
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  return <div>Tours</div>;
};

Just use async await on the server component function

Next Js is super aggresive on cashing stuff

// Next Image Component
https://www.pexels.com/photo/assorted-map-pieces-2859169/

1- Local Images
Import the Image

import mapImage from "@/images/maps.jpg";
import Image from "next/image";

        <Image
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
            priority
            src={mapImage}
            alt="local-image"
          />

Remote Images 

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

Since Next js does have access to remote image during build process
we have to provide the width and height manually, and optional blurDataUrl prop

The width and height property are used to calcuate the the correct aspect ratio in order to prevent
layout shift


// Server Actions mostly when dealing with forms 

And most importantly always remember to ue name attribute while working with forms
suing server action approach

Syntax for writing server actions inside server Components
const createUser = async () => {
  "use server";
  console.log("Server Action");
};

While we add some new data using server actions we see something unusual that is the changes 
are not reflected immeditely 
The reason is that Next Js is super aggressively cashing all our resources because it 
increases load time

two options

1- revalidate path 
2- redirect

Make sure imorts are correct
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

  // Revalidating Path to show the latest data
  // revalidatePath("/action");
  // OR we can use redirct
  redirect("/");
  // One Thing to keep in mind in not to place redirect in try catch block the reason to not include is 
  that it will also trigger the catch block