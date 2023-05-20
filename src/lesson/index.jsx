import React, { useState } from "react";
import { Image } from "./style";

export const Lesson = () => {
   const [product, setProduct] = useState(0);
   return (
      <div>
         <Image>
            <button onClick={() => setProduct(product + 1)}>plus</button>
            {product}
            <button onClick={() => setProduct(product - 1)}>minus</button>
         </Image>
      </div>
   );
};
