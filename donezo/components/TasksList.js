import { Stack, Typography } from "@mui/material";
import TaskItem from "./TaskItem";

export default function TasksList({ tasks }) {
  return (
    // TODO: Add no tasks message
    <>
      <Stack spacing={0.5}>
        {tasks.map((task) => {
          if (!task.complete) {
            return (
              <TaskItem
                key={task.id}
                task={task}
              />
            );
          }
        })}
      </Stack>
      <br />
      <br />
      <br />
      {/* TODO: Add button to toggle show/hide completed tasks */}
      <Stack spacing={0.5}>
        <Typography variant="h4">Completed tasks</Typography>
        {tasks.map((task) => {
          if (task.complete) {
            return (
              <TaskItem
                key={task.id}
                task={task}
              />
            );
          }
        })}
      </Stack>
    </>
  );
}
