"use client";

import { Snackbar } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskSnackbar() {
  const searchParams = useSearchParams();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("task_added") === "true") {
      setSnackbarOpen(true);
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams]);

  return (
    <Snackbar
      open={snackbarOpen}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      message="Task added successfully!"
    />
  );
}
