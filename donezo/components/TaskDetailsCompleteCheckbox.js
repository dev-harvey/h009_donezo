"use client";

import { Checkbox, CircularProgress, Snackbar } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState, useTransition } from "react";
import { toggleTaskCompleteAction } from "@/lib/actions";

export default function TaskDetailsCompleteCheckbox({ taskId, initialComplete, size, color }) {
  const [complete, setComplete] = useState(initialComplete ?? false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [isPending, startTransition] = useTransition();

  async function handleToggle() {
    if (isPending) return;

    const prevValue = complete;
    const newValue = !complete;

    setComplete(newValue);

    startTransition(async () => {
      const response = await toggleTaskCompleteAction(taskId, newValue);

      if (!response.success) {
        setHasError(true);
        setComplete(prevValue);
      } else {
        setHasSuccess(true);
      }
    });
  }

  return (
    <>
      <Checkbox
        checked={complete}
        icon={
          isPending ? (
            <CircularProgress
              size={size === "large" ? 30 : 20}
              sx={{
                color: "inherit",
                "&.Mui-checked": {
                  color: "inherit",
                },
              }}
            />
          ) : (
            <RadioButtonUncheckedIcon />
          )
        }
        checkedIcon={
          isPending ? (
            <CircularProgress
              size={size === "large" ? 30 : 20}
              sx={{
                color: "inherit",
                "&.Mui-checked": {
                  color: "inherit",
                },
              }}
            />
          ) : (
            <CheckCircleIcon />
          )
        }
        onClick={handleToggle}
        size={size}
        {...(color && {
          sx: {
            color: color,
            "&.Mui-checked": {
              color: color,
            },
          },
        })}
        disabled={isPending}
      />
      <Snackbar
        open={hasError}
        onClose={() => setHasError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        color="error"
        message="Something went wrong, please try again later"
      />
      <Snackbar
        open={hasSuccess}
        onClose={() => setHasSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1000}
        message={complete ? "Task complete!" : "Task set to not complete."}
      />
    </>
  );
}
