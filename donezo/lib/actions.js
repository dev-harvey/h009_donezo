"use server";

import { db } from "@/firebase.config";
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const tasksCollection = collection(db, "tasks");

export async function addTaskAction(formData) {
  try {
    const errors = [];

    const title = formData.get("title");
    const description = formData.get("description");
    const duedate = formData.get("duedate") ? new Date(formData.get("duedate")) : null;

    if (!title || title.trim() === "") {
      errors.push("Title is required");
    }

    if (duedate !== null && (isNaN(duedate.getTime()) || duedate <= new Date())) {
      errors.push("Due date is invalid");
    }

    if (errors.length) {
      return {
        success: false,
        errors,
      };
    }

    const docRef = await addDoc(tasksCollection, {
      complete: false,
      title: title,
      description: description,
      createdon: serverTimestamp(),
      duedate: duedate,
    });

    revalidatePath("/");

    return {
      success: true,
      errors: null,
      docId: docRef.id,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: ["Server error, failed to add task. Please try again later."],
    };
  }
}

// TODO: edit task - mark completed use this? Or different function?

// TODO: delete task
