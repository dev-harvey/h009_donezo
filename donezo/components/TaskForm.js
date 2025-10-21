"use client";

import { Alert, Box, Button, Checkbox, CircularProgress, FormControlLabel, Stack, TextField  } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { addTaskAction, updateTaskAction } from "@/lib/actions";
import { useEffect, useState, useTransition } from "react";

import { DATETIME_FORMAT } from "@/lib/constants";

export default function TaskForm({ initialData }) {
  const [ isMounted, setIsMounted ] = useState(false);
  
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [duedate, setDuedate] = useState(() => {
    if (!initialData?.duedate) return null;
    const date = initialData.duedate.toDate ? initialData.duedate.toDate() : initialData.duedate;
    return dayjs(date);
  });
  const [complete, setComplete] = useState(initialData?.complete || false);
  const [errors, setErrors] = useState(null);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

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

    if (initialData) {
      formData.append("id", initialData.id);
      formData.append("complete", complete);
    }

    startTransition(async () => {
      const response = await (initialData ? updateTaskAction(formData) : addTaskAction(formData));

      if (!response.success) {
        setErrors(response.errors);
      }
    });
  }

  if (!isMounted) {
    return <Box sx={{textAlign: "center", py:2}} ><CircularProgress size={100} /></Box>
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {errors &&
          errors.map((message) => (
            <Alert
              key={message}
              severity="error"
            >
              {message}
            </Alert>
          ))}
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
          format={DATETIME_FORMAT}
          ampm={false}
          value={duedate}
          onChange={(newValue) => setDuedate(newValue)}
          disabled={isPending}
        />
        {initialData && (
          <FormControlLabel
            control={
              <Checkbox
                checked={complete}
                onChange={(e) => setComplete(e.target.checked)}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                disabled={isPending}
              />
            }
            label="Task complete?"
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignSelf: "flex-end" }}
        >
          <Button
            variant="contained"
            color="error"
            href={initialData ? `/tasks/${initialData.id}` : "/"}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Submitting" : "Submit"}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
