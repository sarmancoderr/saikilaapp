import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakila app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />


      </head>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                App sakila
              </a>
            </div>
          </nav>
        </header>
        <main>
          <div className="container">
            {children}
          </div>
        </main>

        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
