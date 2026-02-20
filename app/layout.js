import "./globals.css";

export const metadata = {
  title: "KK GOLD | SV Wellness",
  description:
    "KK GOLD by SV Wellness is a herbal wellness capsule designed to support energy, stamina, vigor, and vitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
