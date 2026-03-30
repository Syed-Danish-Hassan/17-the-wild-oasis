import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
//import Sort from "../../ui/Sort";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      >
        Filter
      </Filter>
      {/* <Sort>Sort</Sort> */}

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (Low to High)" },
          { value: "regularPrice-desc", label: "Sort by Price (High to Low)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (Low to High)" },
          {
            value: "maxCapacity-desc",
            label: "Sort by Capacity (High to Low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
