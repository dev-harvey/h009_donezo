"use client";

import { Container, Stack, Typography } from "@mui/material";

export default function ErrorPage({ error }) {
  return (
    <Container
      fixed
      sx={{ py: 2, textAlign: 'center' }}
    >
      <Stack spacing={2}>
        <Typography variant="h1">Something went wrong!</Typography>
        <Typography>{error.message}</Typography>
      </Stack>
    </Container>
  );
}
