import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div style={{ color: 'red', fontWeight: 800, fontSize: '25px' }}>
                    <Link href='/' >Home</Link>
                    <Link href='/users' style={{ marginLeft: '50px' }}>users</Link>
                    <Link href='/admin' style={{ marginLeft: '50px' }}>admins</Link>
                    <br />
                    <br />
                </div>
                {children}
            </body>
        </html>
    )
}
