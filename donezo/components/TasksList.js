"use client";

import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Toolbar, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import { useState } from "react";

export default function TasksList({ tasks }) {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [sortOrder, setSortOrder] = useState("created-desc");

  function sortTasks(tasks, sortOrder) {
    switch (sortOrder) {
      case "created-desc":
        return tasks.toSorted((a, b) => b.createdon - a.createdon);
      case "created-asc":
        return tasks.toSorted((a, b) => a.createdon - b.createdon);
      case "duedate-asc":
        return tasks.toSorted((a, b) => {
          if (!a.duedate) return 1;
          if (!b.duedate) return -1;
          return a.duedate - b.duedate;
        });
      case "duedate-desc":
        return tasks.toSorted((a, b) => {
          if (!a.duedate) return 1;
          if (!b.duedate) return -1;
          return b.duedate - a.duedate;
        });
      case "title-asc":
        return tasks.toSorted((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return tasks.toSorted((a, b) => b.title.localeCompare(a.title));
      default:
        return tasks.toSorted((a, b) => b.createdon - a.createdon);
    }
  }

  const sortedTasks = sortTasks(tasks, sortOrder);

  const completeTasks = sortedTasks.filter((task) => task.complete);
  const incompleteTasks = sortedTasks.filter((task) => !task.complete);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Button
          variant="outlined"
          size="large"
          href="/tasks/add"
        >
          Add task
        </Button>
        <FormControl sx={{ minWidth: 200, mb: 1 }}>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortOrder}
            label="Sort by"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <MenuItem value="created-desc">Recently Created</MenuItem>
            <MenuItem value="created-asc">Oldest First</MenuItem>
            <MenuItem value="duedate-asc">Due Date (Earliest)</MenuItem>
            <MenuItem value="duedate-desc">Due Date (Latest)</MenuItem>
            <MenuItem value="title-asc">Title (A-Z)</MenuItem>
            <MenuItem value="title-desc">Title (Z-A)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Stack
        spacing={0.5}
        sx={{ mb: 2 }}
      >
        {incompleteTasks.length === 0 && <Typography variant="h6">You don't have any incomplete tasks.</Typography>}
        {incompleteTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </Stack>
      {!showCompletedTasks && (
        <Button
          variant="outlined"
          size="large"
          onClick={() => setShowCompletedTasks(true)}
        >
          Show completed tasks
        </Button>
      )}
      {completeTasks.length !== 0 && showCompletedTasks && (
        <Stack
          spacing={0.5}
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">Completed tasks</Typography>
          {completeTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
            />
          ))}
        </Stack>
      )}
      {showCompletedTasks && (
        <Button
          variant="outlined"
          size="large"
          onClick={() => setShowCompletedTasks(false)}
          sx={{ alignSelf: "flex-start" }}
        >
          Hide completed tasks
        </Button>
      )}
    </>
  );
}
