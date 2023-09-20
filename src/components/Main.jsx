import { useEffect, useState } from "react";
import Task from "./Task";
import { get, set, ref, push } from "firebase/database";

const Main = (database) => {
  const db = database["database"];
  //console.log(db);
  const [tasqueList, setTasqueList] = useState([]);
  //let tasqueList = {};
  useEffect(() => {
    get(ref(db, "tasques"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTasqueList(snapshot.val());
          //console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  class TasqueView {
    constructor(tasqueObj) {
      this.top = tasqueObj["title"];
      this.bottom = "";
      if (typeof tasqueObj["dueDate"] != "undefined") {
        this.dueDate = new Date(tasqueObj["dueDate"]);
        this.bottom += this.dueDate.toDateString();
      }
    }

    getTop() {
      return this.top;
    }

    getBottom() {
      return this.bottom;
    }

    getDueDate() {
      return this.dueDate;
    }
  }

  const newTask = (e) => {
    e.preventDefault();
    const taskVal = e.target[0].value;
    e.target[0].value = "";
    let tasque = makeTask2(taskVal);
    const newTasqueRef = push(ref(db, "tasques"));
    set(newTasqueRef, {
      title: tasque.name,
      dueDate: tasque.dueDate.toJSON(),
      makeDate: tasque.makeDate.valueOf(),
    });
  };

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
