export const metadata = {
  title: "Pau Ramos — Portfolio",
  description: "Minimal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
