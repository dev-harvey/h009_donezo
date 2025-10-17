import TaskItem from "@/components/TaskItem";
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
          {/* TODO: Create Sidebar component */}
          <p>Sidebar</p>
        </Grid>
        <Grid size={9}>
          {/* TODO: Split into TasksList component */}
          <Stack spacing={0.5}>
            {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
