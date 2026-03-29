import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
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
    </TableOperations>
  );
}

export default CabinTableOperations;
