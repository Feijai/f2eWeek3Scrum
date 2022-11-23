import React from "react";

 const textBr = (text: string) => {
  return text.split("<br/>")?.map((ele: string, idx: number) =>
    idx === 0 ? (
      <React.Fragment key={idx}>{ele}</React.Fragment>
    ) : (
      <React.Fragment key={idx}>
        <br />
        {ele}
      </React.Fragment>
    )
  );
};

export default textBr