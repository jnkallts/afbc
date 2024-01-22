import { contentData } from "../lib/data";
import React, { useState } from "react";

export default function Content() {
   const contentList = contentData.map((content) => (
      <div key={content.id}>
         <h3>{content.title}</h3>
         <p>{content.description}</p>
      </div>
   ));

   return (
      <div className="dc">
         <div className="content">{contentList}</div>
      </div>
   );
}
