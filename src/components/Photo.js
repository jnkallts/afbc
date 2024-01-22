import React from "react";
import profile from "../images/ally.png";

export default function Photo() {
   return (
      <div className="pc">
         <section className="ps">
            <img src={profile} alt="profile photo" className="profile" />
         </section>
      </div>
   );
}
