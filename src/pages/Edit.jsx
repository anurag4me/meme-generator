import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

export default function EditPage() {
  const [count, setCount] = useState(0);
  const [params] = useSearchParams();

  const memeRef = createRef()

  const url = params.get("url");

  const addText = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div ref={memeRef} className="mt-5 mb-5 mx-4 border border-dark w-50">
        <img src={url} alt="img" width="250px" />
        {Array(count)
          .fill(0)
          .map((e, i) => (
            <Text key={i} />
          ))}
      </div>
      <Button onClick={addText} className="mx-4">Add Text</Button>
      <Button onClick={()=>{exportComponentAsJPEG(memeRef)}} className="mx-4" variant="success">Save</Button>
    </>
  );
}
