import React from "react";

export default function Email() {
   window.open("mailto:ally@duodiag.work");

   return <button onClick={Email()}>Email</button>;
}
