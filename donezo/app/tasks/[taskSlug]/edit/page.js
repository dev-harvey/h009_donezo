import TaskForm from "@/components/TaskForm";
import { getTask } from "@/lib/db";
import { Container, Typography } from "@mui/material";

export const metadata = {
  title: "Edit Task - Donezo",
  description: "Your friendly neighbourhood To Do app",
};

export default async function EditTaskPage({ params }) {
  const { taskSlug } = await params;
  const taskDetails = await getTask(taskSlug);

  return (
    <Container
      fixed
      sx={{ p: 2 }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>Edit task</Typography>
      <TaskForm initialData={taskDetails} />
    </Container>
  );
}
