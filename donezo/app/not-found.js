"use client";

import { Button, Container, Stack, Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <Container
      fixed
      sx={{ py: 2, textAlign: 'center' }}
    >
      <Stack spacing={2}>
        <Typography variant="h1">404 Error - Page not found</Typography>
        <Button variant="contained" href="/" sx={{ alignSelf: 'center' }}>Return to homepage</Button>
      </Stack>
    </Container>
  );
}
