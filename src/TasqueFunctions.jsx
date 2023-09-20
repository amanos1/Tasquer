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
