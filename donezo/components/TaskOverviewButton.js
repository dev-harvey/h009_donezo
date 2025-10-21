import { Button } from "@mui/material";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function TaskOverviewButton() {
  return (
    <Button
      component={Link}
      href="/"
      startIcon={<ChevronLeftIcon />}
      variant="text"
      sx={{
        px: 0.5,
        mb: 1,
        textTransform: "none",
        fontSize: "0.875rem",
      }}
    >
      Back to tasks overview
    </Button>
  );
}
