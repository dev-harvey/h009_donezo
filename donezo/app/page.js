import Sidebar from "@/components/Sidebar";
import TasksList from "@/components/TasksList";
import { getTasks } from "@/lib/db";
import { Box, Grid, Container, Stack, Typography } from "@mui/material";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <Container
      fixed
      sx={{ py: 2 }}
    >
      {/* TODO: Add settings bar for sorting */}
      <Grid
        container
        spacing={2}
      >
        <Grid size={3}>
          <Sidebar />
        </Grid>
        <Grid size={9}>
          <TasksList tasks={tasks} />
        </Grid>
      </Grid>
    </Container>
  );
}
