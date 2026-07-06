import { Wrapper, FilterGroup } from "./filter-styled.ts";
import type { Dispatch, SetStateAction } from "react";

interface FilterProps {
  nameFilter: string;
  categoryFilter: string;
  setNameFilter: Dispatch<SetStateAction<string>>;
  setCategoryFilter: Dispatch<SetStateAction<string>>;
}

export default function Filters({
  nameFilter,
  setNameFilter,
  categoryFilter,
  setCategoryFilter,
}: FilterProps) {
  return (
    <Wrapper>
      <h5>Filters</h5>
      <FilterGroup>
        <input
          placeholder="Name Filter"
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          placeholder="Category filter"
          type="text"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
      </FilterGroup>
    </Wrapper>
  );
}
