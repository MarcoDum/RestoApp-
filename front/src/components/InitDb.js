import db from "../db.json";

export const InitDb = () => {
  fetch("/record", {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(db)
  })
    .then(res => res.json())
    .then(res => console.log(res), err => console.log(err));
};
