"use client";

import { Snackbar } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TaskSnackbar({ paramName, message }) {
  const searchParams = useSearchParams();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get(paramName) === "true") {
      setSnackbarOpen(true);
      const url = new URL(window.location);
      url.searchParams.delete(paramName);
      window.history.replaceState({}, '', url);
    }
  }, [searchParams, paramName]);

  return (
    <Snackbar
      open={snackbarOpen}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      message={message}
    />
  );
}
