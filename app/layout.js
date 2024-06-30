// app/layout.js
'use client';

import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Visual Protocol App (Next.js )</title>
      </head>
      <body>
        <header>
        <h1>GC Visual Protocol</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
