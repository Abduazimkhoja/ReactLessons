import React, { memo } from "react";

const Two = (props) => {
   console.log("child");

   return (
      <div>
         child
         {props.dataMemo.title}
         {props.dataCall().title}
      </div>
   );
};

export default memo(Two);
