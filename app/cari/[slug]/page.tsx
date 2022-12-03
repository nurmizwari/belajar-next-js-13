import React from "react";

async function getData(param: string) {
  const res = await fetch(`https://api.github.com/search/users?q=${param}`);
  return res.json();
}
async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  return res.json();
}

export default async function DetailCari({
  params,
}: {
  params: { slug: string };
}) {
  const dataUser = await getData(params.slug);
  const dataRepo = await getDataRepos(params.slug);

  const [user, repo] = await Promise.all([dataUser, dataRepo]); // gini juga bisa tanpa ini juga bisa
  // langsung pake dataUser juga bisa tanpa perlu await promise
  //! INI BELAJAR PARALLER DATA FETCHING (FETCH DATA BERBARENGAN)

  return (
    <>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(user)}</div>
      <p>List Repository : {params.slug}</p>
      <div>{JSON.stringify(repo)}</div>
    </>
  );
}
