import BackBtn from "@/app/components/BackBtn";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <>
      <h2>Settings</h2>
      <Link className="btn btn-md" href="/api/auth/logout">LOGOUT</Link>{" "}
      <BackBtn />
    </>
  );
}
