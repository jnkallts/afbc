import React from "react";

export default function Info() {
   const person = {
      name: "Ally Ford",
      position: "Clinical IT Specialist",
      website: "https://duodiag.work",
      company: "Duo Diagnosticsware",
      email: "mailto:ally@duodiag.work",
   };

   const handleClick = () => {
      window.open("mailto:ally@duodiag.work");
   };

   return (
      <div className="id">
         <section className="is">
            <h4>{person.name}</h4>
            <h5>{person.position}</h5>
            <div className="da">
               <a href={person.website} target="_blank">
                  {person.company}
               </a>
            </div>
            <div className="db">
               <button type="button" onClick={handleClick}>
                  Email
               </button>
            </div>
         </section>
      </div>
   );
}
