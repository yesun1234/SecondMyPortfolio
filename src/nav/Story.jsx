import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Story = () => {
  const { story } = useContext(DataContext);

  if (!story || story.length === 0) {
    return <div>이야기가 없습니다</div>;
  }
  console.log(story);
  return (
    <div id="story">
      <h2 className="title">Story</h2>
      {story.map((item, index) => (
        <div className="story-box" key={index}>
          <strong>{item.title}</strong>
          <br />
          {item.desc.map((item, i) => (
            <React.Fragment key={i}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Story;
