import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function FeedItem(props) {
  const [forYouData, setForYouData] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const feedData = data.data.memes.map((meme) => ({
          name: meme.name,
          url: meme.url,
        }));
        setForYouData(feedData); //State Update
      });
  }, []);

  return (
    <>
      {forYouData.map((item, index) => {
        return (
          <div
            className="flex px-4 py-2 gap-2 text-neutral-500 w-full"
            key={index}
          >
            <img
              src={item.url}
              className="w-10 h-10 aspect-square rounded-full"
            />
            <div className="flex flex-col flex-grow">
              <div className="flex gap-1 items-center justify-between">
                <div className="flex items-center min-w-0">
                  <h2 className="font-medium text-white truncate line-clamp-1 w-[141px]">
                    {item.name}
                  </h2>
                  <Icon
                    icon="certificate"
                    type="solid"
                    style={`text-primary-500`}
                  />
                  <p className="text-sm font-light truncate w-[141px]">
                    {item.name.replace(/\s+/g, "")}
                  </p>
                  <p className="whitespace-nowrap text-xs"> &#183; Sep 2</p>
                </div>
                <Icon
                  type="solid"
                  icon="ellipsis"
                  style="text-lg block flex-shrink-0"
                />
              </div>
              <p className="line-clamp-[10] text-white overflow-hidden">
                What is up?
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
