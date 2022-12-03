import Link from "next/link";
import useSWR from "swr";

interface Props {
  query: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SectionResult({ query }: Props) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );
  const loading = !data && !error;
  return (
    <>
      <div>hasil pencarian : {query}</div>
      {loading && "loading ...."}
      {data &&
        data.items.map((user: any, idx: number) => {
          return (
            <ul key={idx}>
              <li>
                <Link href={`/cari/${user.login}`}>{user.login}</Link>
              </li>
              <li>
                <Link href={user.html_url}>Repository</Link>
              </li>
            </ul>
          );
        })}
      {/* <div>{JSON.stringify(data)}</div> */}
    </>
  );
}
// ini client component fetching menggunakan swr
// test
