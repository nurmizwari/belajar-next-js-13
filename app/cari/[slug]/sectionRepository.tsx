async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  return res.json();
}

const RepoList = async ({ slug }: any) => {
  const dataRepo = await getDataRepos(slug);
  return (
    <div>
      <p>List Repository</p>
      <div>{JSON.stringify(dataRepo)}</div>
    </div>
  );
};
export default RepoList;
