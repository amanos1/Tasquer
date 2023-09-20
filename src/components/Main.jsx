import { useEffect, useState } from "react";
import Task from "./Task";
import { get, set, ref, push } from "firebase/database";

const Main = (database) => {
  const db = database["database"];
  //console.log(db);
  const [tasqueList, setTasqueList] = useState([]);
  //let tasqueList = {};

  /*for (let i = 0; i < 10; i++) {
    taskList[i] = makeTask();
  }*/

  /*onValue(ref(db, "tasques/"), (snapshot) => {
    setTasqueList(snapshot.val());
  });*/

  //console.log(tasqueList);

  let tasques = [];

  for (const tasque in tasqueList) {
    tasques.push(new TasqueView(tasqueList[tasque]));
  }

  return (
    <div className="main">
      {/*console.log(tasqueList)*/}
      <p>Take out trash</p>
      {tasques.map((item, index) => (
        <Task task={item} key={index} />
      ))}
      <form onSubmit={newTask}>
        <input type="text"></input>
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default Main;
