/** @format */
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <main>{children}</main>
    </html>
  );
}
