import { ReduxProvider } from "@/redux/provider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Redux Persist Cart",
  description: "E-commerce cart with redux-persist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
