
import "./globals.css";
export const metadata = {
  title: "Affotax Formations",
  description: "Create your ltd company in minutes!",
};


export default function RootLayout({ children }) {





  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
