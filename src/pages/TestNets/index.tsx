import React, { useEffect } from "react";
import Card from "../../components/Card";
import "./styles.scss";
import TestNetHeader from "../../components/TestNetHeader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const TestNets = () => {
  const { data, isLoading } = useTypedSelector((state) => state.testNets);
  const { fetchTestNets } = useActions();
  useEffect(() => {
    if (!isLoading && !data.length) {
      fetchTestNets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TestNetHeader />
      {data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </>
  );
};

export default TestNets;
