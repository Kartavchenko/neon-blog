import NavBar from "../components/NavBar";
import { Redirect } from "next/dist/lib/load-custom-routes";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      <NavBar/>
    </div>
  );
}
