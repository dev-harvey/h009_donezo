import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata = {
  title: "Donezo",
  description: "Your friendly neighbourhood To Do app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
