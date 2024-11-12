import localFont from "next/font/local";
import "../../globals.scss";

export default function LayoutProtected({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
