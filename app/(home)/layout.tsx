import NavBar from "../components/NavBar";
import { Suspense } from "react";
import Loading from "./loading";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen container mx-auto xs:px-3 md:px-4">
      <Suspense fallback={<Loading />}>
        <div className="flex-grow">{children}</div>
      </Suspense>
      <NavBar />
    </div>
  );
}
