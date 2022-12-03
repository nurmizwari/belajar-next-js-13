import React from "react";

async function getData(param: string) {
  const res = await fetch(`https://api.github.com/search/users?q=${param}`);
  return res.json();
}

export default async function DetailCari({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);
  return (
    <>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
