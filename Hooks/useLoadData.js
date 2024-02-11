"use client";
import { fetchApiData } from "@/utiils";
import { useEffect, useState } from "react";

export default function useLoadData() {
  const [catInfo, setCatInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchApiData(
        "https://api.thecatapi.com/v1/images/search?has_breeds=1"
      );
      setCatInfo(data);
    }
    fetchData();
    setLoading(false);
  }, []);

  return { catInfo, isLoading };
}
