import React from "react";
import TestNets from "../../pages/TestNets";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./style.scss";

const Wrapper = () => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <section className="pages--wrapper">
          {/* All pages route will be here */}
          <TestNets />
        </section>
      </main>
    </div>
  );
};

export default Wrapper;
