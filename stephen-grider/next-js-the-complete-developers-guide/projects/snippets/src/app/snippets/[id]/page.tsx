
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default function SnipperShowPage(props: any) {
  console.log(props);
  return <div>Show a snippet</div>;
}
