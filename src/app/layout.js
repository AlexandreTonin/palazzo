import "./globals.css";

export const metadata = {
  title: "Palazzo",
  description: "We specialize in high-end real estate, offering a curated selection of luxury properties in prime locations. Our mission is to connect you with exclusive homes that combine sophistication, comfort, and exceptional design. Whether you are looking to buy or invest, our portfolio reflects the highest standards of quality and lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
