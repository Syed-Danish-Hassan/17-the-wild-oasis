//import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
//import { useEffect } from "react";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
//import Button from "../ui/Button";
//import { useState } from "react";
//import CreateCabinForm from "../features/cabins/CreateCabinForm";
function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  //const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
        {/* <p>Filter / Sort</p> */}
        {/* <img
        src="https://wpbxrrxxrqjfshwaytew.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt="Cabin"
      /> */}
      </Row>

      <Row type="vertical">
        <CabinTable />
        {/* <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />} */}
        <AddCabin></AddCabin>
      </Row>
    </>
  );
}

export default Cabins;
