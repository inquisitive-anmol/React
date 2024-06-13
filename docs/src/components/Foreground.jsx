import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
  const data = [
    {
      desc: "ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
        {data.map((item, index) => (
            <Card data={item} reference={ref}/>
        ))}
    </div>
  );
};

export default Foreground;
