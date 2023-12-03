"use client";

import { useRouter } from "next/navigation";

export default function BackBtn() {
    const router = useRouter();
    
  return (
    <button className="btn btn-ghost btn-sm" type="button" onClick={() => router.back()}>
      Back
    </button>
  );
}
