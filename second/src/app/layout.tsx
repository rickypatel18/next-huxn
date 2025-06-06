import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-purple-800 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-purple-400">
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-purple-400">
                    About
                  </Link>
                  <Link href="/contact" className="hover:text-purple-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
          {children}
      </body>
    </html>
  );
}
