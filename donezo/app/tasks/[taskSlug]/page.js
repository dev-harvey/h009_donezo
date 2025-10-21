import TaskDetails from "@/components/TaskDetails";
import TaskOverviewButton from "@/components/TaskOverviewButton";
import TaskSnackbar from "@/components/TaskSnackbar";
import { getTask } from "@/lib/db";
import { Container } from "@mui/material";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Task Details - Donezo",
  description: "Your friendly neighbourhood To Do app",
};

export default async function TaskDetailsPage({ params }) {
  const { taskSlug } = await params;
  const taskDetails = await getTask(taskSlug);

  if (!taskDetails) {
    notFound();
  }

  return (
    <Container
      fixed
      sx={{ p: 2 }}
    >
      <TaskSnackbar
        paramName="task_updated"
        message="Task updated successfully!"
      />
      <TaskOverviewButton />
      <TaskDetails taskDetails={taskDetails} />
    </Container>
  );
}
