import React from "react";
import Card from "../../components/Card";
import "./styles.scss";
import TestNetHeader from "../../components/TestNetHeader";

const TestNets = () => {
  return (
    <div>
      {/* Header with Filter and Sorter */}
      <TestNetHeader />
      {/* Lists */}
      <Card />
    </div>
  );
};

export default TestNets;
