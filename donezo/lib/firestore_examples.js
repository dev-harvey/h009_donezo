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

// Reference to the 'todos' collection
const todosCollection = collection(db, 'todos');

// ============================================
// CREATE - Add a new todo
// ============================================
export const addTodo = async (title) => {
  try {
    const docRef = await addDoc(todosCollection, {
      title: title,
      completed: false,
      createdAt: serverTimestamp() // Firebase server timestamp
    });
    console.log('Todo added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

// ============================================
// READ - Get all todos
// ============================================
export const getTodos = async () => {
  try {
    const querySnapshot = await getDocs(todosCollection);
    const todos = [];
    
    querySnapshot.forEach((doc) => {
      todos.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log('Fetched todos:', todos);
    return todos;
  } catch (error) {
    console.error('Error getting todos:', error);
    throw error;
  }
};

// ============================================
// UPDATE - Toggle todo completion
// ============================================
export const toggleTodo = async (todoId, currentStatus) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await updateDoc(todoRef, {
      completed: !currentStatus
    });
    console.log('Todo updated:', todoId);
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

// ============================================
// UPDATE - Edit todo title
// ============================================
export const updateTodoTitle = async (todoId, newTitle) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await updateDoc(todoRef, {
      title: newTitle
    });
    console.log('Todo title updated:', todoId);
  } catch (error) {
    console.error('Error updating todo title:', error);
    throw error;
  }
};

// ============================================
// DELETE - Remove a todo
// ============================================
export const deleteTodo = async (todoId) => {
  try {
    const todoRef = doc(db, 'todos', todoId);
    await deleteDoc(todoRef);
    console.log('Todo deleted:', todoId);
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};