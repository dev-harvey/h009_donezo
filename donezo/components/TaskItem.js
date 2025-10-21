import { Box, Checkbox, Typography } from "@mui/material";
import TaskDetailsCompleteCheckbox from "./TaskDetailsCompleteCheckbox";

export default function TaskItem({ task }) {
  return (
    <Box
      sx={{ p: 1, bgcolor: "primary.main", textDecoration: "none", color: "primary.dark" }}
      component="a"
      href={`/tasks/${task.id}`}
    >
      <Typography variant="h6">
        <TaskDetailsCompleteCheckbox taskId={task.id} initialComplete={task.complete} size="small" color="primary.dark" />
        {task.title}
      </Typography>
      {task.duedate && (
        <Typography
          variant="body2"
          color="white"
        >
          Due: {task.duedateFormatted}
        </Typography>
      )}
    </Box>
  );
}
