import { Box, Checkbox, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteTaskButton from "./DeleteTaskButton";
import Link from "next/link";

import TaskDetailsCompleteCheckbox from "./TaskDetailsCompleteCheckbox";

export default function TaskDetails({ taskDetails }) {
  return (
    <Box sx={{ p: 2, border: "1px solid white" }}>
      <Stack
        spacing={1}
        sx={{ mb: 1 }}
      >
        <Typography variant="h1">
          <TaskDetailsCompleteCheckbox taskId={taskDetails.id} initialComplete={taskDetails.complete} size="large" />
          {taskDetails.title}
        </Typography>
        <Typography color="text.secondary">Created on: {taskDetails.createdonFormatted}</Typography>
        {taskDetails.duedate && <Typography>Due date: {taskDetails.duedateFormatted}</Typography>}
        <Typography sx={{ whiteSpace: "pre-line" }}>{taskDetails.description}</Typography>
      </Stack>
      <Stack
        spacing={1}
        direction="row"
      >
        <Button
          component={Link}
          href={`/tasks/${taskDetails.id}/edit`}
          variant="contained"
        >
          Edit task
        </Button>
        <DeleteTaskButton taskId={taskDetails.id} />
      </Stack>
    </Box>
  );
}
