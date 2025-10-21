import TaskForm from "@/components/TaskForm";
import TaskOverviewButton from "@/components/TaskOverviewButton";
import { Container, Typography } from "@mui/material";

export const metadata = {
  title: "Add Task - Donezo",
  description: "Your friendly neighbourhood To Do app",
};

export default function AddTaskPage() {
  return (
    <Container
      fixed
      sx={{ p: 2 }}
    >
      <TaskOverviewButton />
      <Typography
        variant="h1"
        sx={{ mb: 2 }}
      >
        Add new task
      </Typography>
      <TaskForm />
    </Container>
  );
}
