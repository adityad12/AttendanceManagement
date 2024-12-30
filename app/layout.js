import Nav from "../components/Nav";
import "./globals.css"; 

export const metadata = {
  title: "Attendance Management System",
  description: "Manage attendance for your institution efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {children}
        </main>
    </body>
  </html>
  );
}

