import { getTask } from "@/lib/db";
import { Box, Checkbox, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default async function TaskPage({ params }) {
  // TODO: get task details from firestore using params.taskSlug. Look at firestore_examples in lib.
  const taskDetails_OLD = {
    id: "test",
    complete: false,
    title: "Task title",
    description: "Test description. Ut consequat aute occaecat mollit proident tempor quis tempor proident consequat. Cupidatat quis aliqua veniam ex excepteur in quis pariatur et sint consectetur quis et qui. Est irure laborum amet laboris nostrud do consequat.\nNew line of the description. Officia in enim sit aliqua culpa laborum nisi amet ex. Aute ut incididunt Lorem sit consequat velit. In ipsum quis culpa occaecat ullamco elit esse reprehenderit ex. Aliqua incididunt ipsum incididunt adipisicing Lorem non.",
    createdon: "October 15, 2025 at 12:13:20 PM UTC-4",
    duedate: "October 31, 2025 at 12:00:00 PM UTC-4",
  };

  const taskDetails = await getTask(params.taskSlug);
  
  return (
    <Container fixed sx={{p: 2}}>
      {/* TODO: Custom "TaskHeader" or "TaskDetails" component using Box is better than inline styles here */}
      <Box sx={{ p: 2, border: "1px solid white" }}>
        <Stack spacing={1} sx={{ mb: 1 }}>
          <Typography variant="h1">
            <Checkbox checked={taskDetails.complete}/> {taskDetails.title}
          </Typography>
          <Typography color="text.secondary">Created on: {taskDetails.createdonFormatted}</Typography>
          <Typography>Due date: {taskDetails.duedateFormatted}</Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>{taskDetails.description}</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <Button variant="contained">Edit task</Button>
          <Button variant="contained" color="error">Delete task</Button>
        </Stack>
      </Box>
    </Container>
  );
}
