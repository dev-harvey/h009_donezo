"use client";

import { deleteTaskAction } from "@/lib/actions";
import { Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";

export default function DeleteTaskButton({ taskId }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  function handleDelete() {
    startTransition(async () => {
      setError("");
      const response = await deleteTaskAction(taskId);
      if (!response.success) {
        setError(response.error);
      }
    });
  }
  // TODO: Add deletion confirmation modal
  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        disabled={isPending}
      >
        {isPending ? "Deleting..." : "Delete task"}
      </Button>
      {error && (
        <Snackbar
          open={error}
          onClose={() => setError("")}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          message={error}
        />
      )}
    </>
  );
}
