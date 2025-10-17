import { Stack } from '@mui/material'
import TaskItem from './TaskItem';

export default function TasksList({tasks}) {
  return (
    <Stack spacing={0.5}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </Stack>
  );
}
