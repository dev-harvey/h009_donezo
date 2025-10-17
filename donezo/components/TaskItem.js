import { Box, Checkbox, Typography } from "@mui/material";

export default function TaskItem({ task }) {
  return (
    <Box sx={{ p: 1, bgcolor: 'primary.main', textDecoration: 'none', color: 'primary.dark' }} component="a" href={`/tasks/${task.id}`}>
      <Typography variant="h6">
        <Checkbox checked={task.complete} /> {task.title}
      </Typography>
      {/* TODO: Show conditionally based on due date existing */}
      {task.duedate && <Typography variant="body2" color="white">Due: {task.duedateFormatted}</Typography>}
    </Box>
  );
}