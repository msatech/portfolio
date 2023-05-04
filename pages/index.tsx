import { Banner, Header } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <main>
        <Header />
        <Banner />
      </main>
    </div>
  );
}
