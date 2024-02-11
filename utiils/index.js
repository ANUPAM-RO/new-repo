"use client";

export const fetchApiData = async (url) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  });

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
