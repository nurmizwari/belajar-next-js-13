import React, { Suspense } from "react";
import RepoList from "./sectionRepository";

async function getData(param: string) {
  const res = await fetch(`https://api.github.com/search/users?q=${param}`);
  return res.json();
}
// async function getDataRepos(param: string) {
//   const res = await fetch(`https://api.github.com/users/${param}/repos`);
//   return res.json();
// }

//! sequential data fetching pake suspense
// const RepoList = async ({ slug }: any) => {
//   const dataRepo = await getDataRepos(slug);
//   return (
//     <div>
//       <p>List Repository</p>
//       <div>{JSON.stringify(dataRepo)}</div>
//     </div>
//   );
// };

export default async function DetailCari({
  params,
}: {
  params: { slug: string };
}) {
  const dataUser = await getData(params.slug);

  // const [user, repo] = await Promise.all([dataUser, dataRepo]); // gini juga bisa tanpa ini juga bisa
  // langsung pake dataUser juga bisa tanpa perlu await promise
  //! INI BELAJAR PARALLER DATA FETCHING (FETCH DATA BERBARENGAN)

  return (
    <>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>
      <div style={{ marginTop: "10px" }}>
        <Suspense fallback={<div>wait ..</div>}>
          {/* @ts-ignore */}
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
      {/* <p>List Repository : {params.slug}</p>
      <div>{JSON.stringify(repo)}</div> */}
    </>
  );
}
