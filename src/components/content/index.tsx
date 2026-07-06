import { Wrapper, Table, WrapPagination } from "./content-styled.ts";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface App {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}
interface ContentProps {
  filteredData: App;
  loading: boolean;
  page: never;
  handleChange: never;
}

export default function Content({
  filteredData,
  loading,
  handleChange,
  page,
}: ContentProps) {
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
      <WrapPagination>
        <Stack spacing={2}>
          <Pagination
            count={10}
            color="primary"
            page={page}
            onChange={handleChange}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "& .Mui-selected": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              },
            }}
          />
        </Stack>
      </WrapPagination>
    </Wrapper>
  );
}
