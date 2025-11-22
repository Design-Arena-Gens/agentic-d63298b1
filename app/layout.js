import "./globals.css";
import { Tajawal } from "next/font/google";

export const metadata = {
  title: "ملخص قوانين الآلات الحرارية",
  description: "عرض منظم وواضح لكافة القوانين الأساسية في علم الآلات الحرارية."
};

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
