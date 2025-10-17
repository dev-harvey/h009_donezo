import { getTask } from "@/lib/db";
import { Box, Checkbox, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { notFound } from "next/navigation";

export default async function TaskDetailsPage({ params }) {
  const taskDetails = await getTask(params.taskSlug);

  if (!taskDetails) {
    notFound();
  }
  
  return (
    <Container fixed sx={{p: 2}}>
      {/* TODO: Custom "TaskHeader" or "TaskDetails" component using Box is better than inline styles here */}
      <Box sx={{ p: 2, border: "1px solid white" }}>
        <Stack spacing={1} sx={{ mb: 1 }}>
          <Typography variant="h1">
            <Checkbox checked={taskDetails.complete}/> {taskDetails.title}
          </Typography>
          <Typography color="text.secondary">Created on: {taskDetails.createdonFormatted}</Typography>
          {taskDetails.duedate && <Typography>Due date: {taskDetails.duedateFormatted}</Typography>}
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
