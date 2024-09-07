import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getAllMemes().then((el) => setData(el.data.memes));
  }, []);
  console.log(data)
  if (!data) return <p>Loading...</p>;
  return (
    <div className="row">
      {data.map((meme) => (
        <MemeCard title={meme.name} img={meme.url} key={meme.id}/>
      ))}
    </div>
  );
}
