import TaskItem from "@/components/TaskItem";
import { getTasks } from "@/lib/db";
import { Box, Grid, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default async function Home() {
  const tasks_OLD = [
    {
      id: "test",
      complete: false,
      title: "Task 1 title",
      description: "Test description. Ut consequat aute occaecat mollit proident tempor quis tempor proident consequat. Cupidatat quis aliqua veniam ex excepteur in quis pariatur et sint consectetur quis et qui. Est irure laborum amet laboris nostrud do consequat.\nNew line of the description. Officia in enim sit aliqua culpa laborum nisi amet ex. Aute ut incididunt Lorem sit consequat velit. In ipsum quis culpa occaecat ullamco elit esse reprehenderit ex. Aliqua incididunt ipsum incididunt adipisicing Lorem non.",
      createdon: "October 15, 2025 at 12:13:20 PM UTC-4",
      duedate: "October 31, 2025 at 12:00:00 PM UTC-4",
    },
    {
      id: "test2",
      complete: false,
      title: "Task 2 title",
      description: "Test description. Ut consequat aute occaecat mollit proident tempor quis tempor proident consequat. Cupidatat quis aliqua veniam ex excepteur in quis pariatur et sint consectetur quis et qui. Est irure laborum amet laboris nostrud do consequat.\nNew line of the description. Officia in enim sit aliqua culpa laborum nisi amet ex. Aute ut incididunt Lorem sit consequat velit. In ipsum quis culpa occaecat ullamco elit esse reprehenderit ex. Aliqua incididunt ipsum incididunt adipisicing Lorem non.",
      createdon: "October 15, 2025 at 12:13:20 PM UTC-4",
      duedate: "November 31, 2025 at 12:00:00 PM UTC-4",
    },
    {
      id: "test3",
      complete: false,
      title: "Task 3 title",
      description: "Test description. Ut consequat aute occaecat mollit proident tempor quis tempor proident consequat. Cupidatat quis aliqua veniam ex excepteur in quis pariatur et sint consectetur quis et qui. Est irure laborum amet laboris nostrud do consequat.\nNew line of the description. Officia in enim sit aliqua culpa laborum nisi amet ex. Aute ut incididunt Lorem sit consequat velit. In ipsum quis culpa occaecat ullamco elit esse reprehenderit ex. Aliqua incididunt ipsum incididunt adipisicing Lorem non.",
      createdon: "October 15, 2025 at 12:13:20 PM UTC-4",
      duedate: "December 31, 2025 at 12:00:00 PM UTC-4",
    },
  ];

  const tasks = await getTasks();

  return (
    <Container
      fixed
      sx={{ py: 2 }}
    >
      {/* TODO: settings bar for sorting */}
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
