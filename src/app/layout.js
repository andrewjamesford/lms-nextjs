import './globals.css'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LMS',
  description: 'An LMS built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Theme>
        {children}
      </Theme>
      </body>
    </html>
  )
}
