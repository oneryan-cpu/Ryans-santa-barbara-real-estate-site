import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Village Properties - Santa Barbara Real Estate',
  description: 'Santa Barbara County real estate with Ryan Kell at Village Properties'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
