"use client";

import { deleteTaskAction } from "@/lib/actions";
import { Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useTransition } from "react";

export default function DeleteTaskButton({ taskId }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);

  function handleDeleteTask() {
    startTransition(async () => {
      setError("");
      const response = await deleteTaskAction(taskId);
      if (!response.success) {
        setError(response.error);
      }
      setDialogOpen(false);
    });
  }

  function handleClickOpenDialog() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
    document.activeElement?.blur();
  }

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleClickOpenDialog}
        disabled={isPending}
      >
        {isPending ? "Deleting..." : "Delete task"}
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
      >
        <DialogTitle
          variant="h4"
          component="p"
        >
          Are you sure you want to delete this task?
        </DialogTitle>
        <DialogContent>
          <Typography>This action cannot be undone so your task will be deleted forever!</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleCloseDialog}
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteTask}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete task"}
          </Button>
        </DialogActions>
      </Dialog>
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
