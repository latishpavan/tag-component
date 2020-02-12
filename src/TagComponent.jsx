import React from "react";

export default props => {
  const { name, type } = props;

  return (
    <div className="tag" onClick={() => console.log("worjing!")}>
      {name}: {type}
    </div>
  );
};
