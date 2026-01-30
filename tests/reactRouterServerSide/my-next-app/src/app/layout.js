import Link from "next/link"


export const metadata={
  title: "La mia app di nextJs",
  description: "Tutorial server-side routing ibrido fra server-side Generation e Rendering"
}

export default function RootLayout({children}){
  return (
    <html lang="it">
      <body>
        {/* NAVBAR FISSA */}
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about" >About</Link>
            </li>
            <li>
              <Link href="/contatti" >Contatti</Link>
            </li>
          </ul>
        </nav>

        {/* CONTENUTO DINAMICO (Simile all'Outlet) */}
        <main>
          {children}
        </main>

        <footer >
          Mazzoman's site with next.js
        </footer>
      </body>
    </html>
  )
}