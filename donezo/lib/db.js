import { db } from "@/firebase.config";
import { collection, getDoc, getDocs, doc, serverTimestamp } from "firebase/firestore";

import dayjs from "dayjs";
import { DATETIME_FORMAT } from "@/lib/constants";

const tasksCollection = collection(db, "tasks");

function formatTaskDates(task) {
  const createdon = task.createdon?.toDate() || null;
  const duedate = task.duedate?.toDate() || null;
  if (createdon === null) {
    throw new Error("Error retrieving task details: Missing 'createdon' field.");
  }
  return {
    ...task,
    duedate,
    duedateFormatted: duedate ? dayjs(duedate).format(DATETIME_FORMAT) : "",
    createdon,
    createdonFormatted: dayjs(createdon).format(DATETIME_FORMAT),
  };
}

/*** GET ALL TASKS ***/
export async function getTasks() {
  const querySnapshot = await getDocs(tasksCollection);
  const tasks = [];

  // TODO: change this to a .map instead, better practice
  querySnapshot.forEach((task) => {
    let newTask = {
      id: task.id,
      ...task.data(),
    };
    newTask = formatTaskDates(newTask);
    tasks.push(newTask);
  });
  return tasks;
}

/*** GET SINGLE TASK ***/

export async function getTask(taskId) {
  const taskRef = doc(tasksCollection, taskId);
  const documentSnapshot = await getDoc(taskRef);

  if (!documentSnapshot.exists()) {
    return null;
  }

  const newTask = {
    id: documentSnapshot.id,
    ...documentSnapshot.data(),
  };
  return formatTaskDates(newTask);
}
