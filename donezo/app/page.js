import Sidebar from "@/components/Sidebar";
import TasksList from "@/components/TasksList";
import TaskSnackbar from "@/components/TaskSnackbar";
import { getTasks } from "@/lib/db";
import { Grid, Container, Button } from "@mui/material";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <>
      <Container
        fixed
        sx={{ py: 2 }}
      >
        <Grid
          container
          spacing={2}
        >
          {/* <Grid size={3}>
            <Sidebar />
          </Grid> */}
          {/* <Grid size={9}> */}
          <Grid size={12}>
            <TasksList tasks={tasks} />
            <TaskSnackbar
              paramName="task_added"
              message="Task added successfully!"
            />
            <TaskSnackbar
              paramName="task_deleted"
              message="Task deleted successfully!"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
