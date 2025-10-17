"use client";

import { Alert, Button, Stack, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { addTaskAction } from "@/lib/actions";
import { useState, useTransition } from "react";

import { redirect } from "next/navigation";

export default function AddTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState(null);

  const [errors, setErrors] = useState(null);

  const [isPending, startTransition] = useTransition();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors("");

    const formData = new FormData();
    formData.append("title", title);
    if (description) {
      formData.append("description", description);
    }
    if (duedate) {
      formData.append("duedate", duedate.toISOString());
    }

    startTransition(async () => {
      const response = await addTaskAction(formData);

      if (!response.success) {
        setErrors(response.errors);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {errors && errors.map((message) => <Alert key={message} severity="error">{message}</Alert>)}
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={isPending}
        />
        <TextField
          name="description"
          label="Description (Optional)"
          variant="outlined"
          multiline
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="2"
          disabled={isPending}
        />
        <DateTimePicker
          label="Due Date (Optional)"
          minDate={dayjs()}
          value={duedate}
          onChange={(newValue) => setDuedate(newValue)}
          disabled={isPending}
        />
        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting" : "Submit"}
        </Button>
      </Stack>
    </form>
  );
}
