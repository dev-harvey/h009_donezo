import { db } from '@/firebase.config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';

// Reference to the 'tasks' collection
const tasksCollection = collection(db, 'tasks');

// ============================================
// CREATE - Add a new task
// ============================================
export const addtask = async (title) => {
  try {
    const docRef = await addDoc(tasksCollection, {
      title: title,
      completed: false,
      createdAt: serverTimestamp() // Firebase server timestamp
    });
    console.log('task added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// ============================================
// READ - Get all tasks
// ============================================
export const gettasks = async () => {
  try {
    const querySnapshot = await getDocs(tasksCollection);
    const tasks = [];
    
    querySnapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log('Fetched tasks:', tasks);
    return tasks;
  } catch (error) {
    console.error('Error getting tasks:', error);
    throw error;
  }
};

// ============================================
// UPDATE - Toggle task completion
// ============================================
export const toggletask = async (taskId, currentStatus) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, {
      completed: !currentStatus
    });
    console.log('task updated:', taskId);
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

// ============================================
// UPDATE - Edit task title
// ============================================
export const updatetaskTitle = async (taskId, newTitle) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, {
      title: newTitle
    });
    console.log('task title updated:', taskId);
  } catch (error) {
    console.error('Error updating task title:', error);
    throw error;
  }
};

// ============================================
// DELETE - Remove a task
// ============================================
export const deletetask = async (taskId) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await deleteDoc(taskRef);
    console.log('task deleted:', taskId);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};