import { db } from "@/firebase.config";
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

const tasksCollection = collection(db, "tasks");

function formatTaskDates(task) {
  const createdon = task.createdon?.toDate() || null;
  const duedate = task.duedate?.toDate() || null;
  if (createdon === null) {
    // TODO: Throw error
  }
  return {
    ...task,
    duedate,
    duedateFormatted: duedate?.toLocaleString() || "",
    createdon,
    createdonFormatted: createdon?.toLocaleString() || "",
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

  console.log("Fetched tasks:", tasks);
  return tasks;
}

/*** GET SINGLE TASK ***/

export async function getTask(taskId) {
  console.log('it begins');
  console.log(taskId);
  const taskRef = doc(tasksCollection, taskId);
  const documentSnapshot = await getDoc(taskRef);

  if (!documentSnapshot.exists()) {
    // TODO: Throw an error
    console.log('error');
  }

  const newTask = {
    id: documentSnapshot.id,
    ...documentSnapshot.data(),
  };
  console.log(newTask);
  return formatTaskDates(newTask);
}

export async function addTask(task) {
  // TODO: see if this needs a try catch for errors
  const docRef = await addDoc(tasksCollection, {
    complete: false,
    title: task.title,
    description: task.description,
    createdon: serverTimestamp(),
    duedate: task.duedate,
  });
  console.log("Todo added with ID:", docRef.id);
  return docRef.id;
}

// TODO: edit task - mark completed use this? Or different function?

// TODO: delete task
