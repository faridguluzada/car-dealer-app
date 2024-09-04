"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export function useQueryString() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function createQueryString(name: string, value: string | null) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return { createQueryString, searchParams };
}
