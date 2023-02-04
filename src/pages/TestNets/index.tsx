import React, { useEffect, useRef } from "react";
import Card from "../../components/Card";
import "./styles.scss";
import TestNetHeader from "../../components/TestNetHeader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import EmptyList from "../../components/EmptyList";
import Loader from "../../components/Loader";
import { TestNet } from "../../store/models/testnets.d";
import ErrorComponent from "../../components/ErrorComponent";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const TestNets = () => {
  const { data, isLoading, error } = useTypedSelector(
    (state) => state.testNets
  );
  const ref = useRef(null);
  const { fetchTestNets } = useActions();
  useEffect(() => {
    if (!isLoading && !data.length) {
      fetchTestNets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold: 0, //trigger event as soon as the element is in the viewport.
    },
    false // don't remove the observer after intersected.
  );

  useEffect(() => {
    //load next page when bottom is visible
    if (isBottomVisible) {
      console.log("we reached bottom");
    }
  }, [isBottomVisible]);

  const renderCard = (card: TestNet) => <Card key={card.id} data={card} />;

  return (
    <>
      <TestNetHeader />
      {!!data.length && data.map(renderCard)}
      {!data.length && !isLoading && !error && <EmptyList />}
      {isLoading && <Loader />}
      {error && <ErrorComponent />}
      {/* for bottom of the page ref only */}
      <div ref={ref} />
    </>
  );
};

export default TestNets;
