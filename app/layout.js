export const metadata = {
  title: "Ryan’s Santa Barbara Real Estate",
  description: "Real estate site built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
