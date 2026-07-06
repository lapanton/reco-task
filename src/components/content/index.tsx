import { Wrapper, Table } from "./content-styled.ts";

interface App {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}
interface ContentProps {
  filteredData: App;
  loading: boolean;
}

export default function Content({ filteredData, loading }: ContentProps) {
  console.log("FilteredData", filteredData);
  return (
    <Wrapper>
      {loading ? (
        <div>.... Loading</div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Connection</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.appName}</td>
                  <td>{e.category}</td>
                  <td>{e.appId}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
}
