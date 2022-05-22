import React, { useState } from "react";
import Header from "./Components/Navbar/Header";
import HomeBG from "./Components/Homepage/Home";
import BookingForm from "./Components/BookingForm/Form";
import Thankyou from "./Components/Thankyou/Thankyou";
import CancelForm from "./Components/Cancel/CancelForm";
import CancelCard from "./Components/Cancel/CancelCard";
import BookingNotFound from "./Components/Cancel/BookingNotFound";
import AllTablesBooked from "./Components/BookingForm/AllTablesBooked";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header setPage={setPage} />
      {page === 0 && <HomeBG />}
      {page === 1 && <BookingForm setPage={setPage} />}
      {page === 2 && <Thankyou setPage={setPage} />}
      {page === 3 && <BookingNotFound setPage={setPage} />}
      {page === 4 && <AllTablesBooked setPage={setPage} />}
      {page === 5 && <CancelForm setPage={setPage} />}
      {page === 6 && <CancelCard setPage={setPage} />}
    </>
  );
}

export default App;
