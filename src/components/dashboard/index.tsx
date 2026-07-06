import Content from "../content";
import Filters from "../filters";
import { Wrapper } from "./dashboard-styled.ts";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const fetchData = async (value) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://recotest.pythonanywhere.com/api/v1/app-service/get-apps",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appName: "",
            category: "",
            pageNumber: value || 0,
            pageSize: 25,
          }),
        },
      );

      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to fetch data");
      }
      const resp = await response.json();
      setData(resp.appRows || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const FilteredData = data?.filter((app) => {
    const matchName = app.appName
      .toLocaleLowerCase()
      .includes(nameFilter.toLowerCase());
    const matchCategory = app.category
      .toLocaleLowerCase()
      .includes(categoryFilter.toLowerCase());
    return matchCategory && matchName;
  });

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value);
    console.log("Page clicked:", value);
  };

  return (
    <Wrapper>
      <Content
        loading={loading}
        filteredData={FilteredData}
        handleChange={handleChange}
        page={page}
      />
      <Filters
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
    </Wrapper>
  );
}
