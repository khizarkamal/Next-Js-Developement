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
