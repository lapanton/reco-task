import Sidebar from "../sidebar";
import Content from "../content";
import Filters from "../filters";
import { Wrapper } from "./dashboard-styled.ts";

export default function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />
      <Content />
      <Filters />
    </Wrapper>
  );
}
