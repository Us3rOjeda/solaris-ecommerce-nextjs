"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useItemId(id: string) {
  const router = useRouter();

  useEffect(() => {
    if (id) {
      router.push(`/item?id=${id}`);
    }
  }, [id, router]);
}

export default useItemId;
