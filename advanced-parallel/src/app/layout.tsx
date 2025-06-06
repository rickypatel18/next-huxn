import { ReactNode } from "react";
import "./globals.css";

type CP = {
  children: ReactNode;
  comments: ReactNode;
  members: ReactNode;
};

export default function RootLayout({ children, comments, members }: CP) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <h1>{children}</h1>
        <div className="flex">
          {comments}
          {members}
        </div>
      </body>
    </html>
  );
}
