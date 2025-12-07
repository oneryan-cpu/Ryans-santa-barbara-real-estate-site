export const metadata = {
  title: 'Santa Barbara Real Estate',
  description: 'Your Santa Barbara real estate resource.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
