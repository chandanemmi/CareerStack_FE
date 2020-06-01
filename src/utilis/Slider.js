import React, { useRef, useEffect, useCallback } from "react";

const SliderCard = ({ children, noObserver, scroll }) => {
  const observerRef = useRef();
  const cardRef = useRef();
  const isMounted = useRef(true);

  // creating memoized callback
  const memoizedCreateObserve = useCallback(
    () => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              if (isMounted.current && cardRef.current) {
                cardRef.current.style.overflowY = "scroll";
              }
            } else {
              if (isMounted.current && cardRef.current) {
                cardRef.current.style.overflowY = "hidden";
              }
            }
          });
        },
        {
          rootMargin: "-49px 0px 0px 0px",
          // threshold: 0.25
        }
      );

      // observe the div
      if (observerRef.current) {
        observer.observe(observerRef.current);
      }

      return observer;
      // end of memoization
    },
    // dependancy
    [cardRef, observerRef, isMounted]
  );

  useEffect(() => {
    if (!noObserver) {
      const observer = memoizedCreateObserve();
      const observerRefCopy = observerRef.current;
      return () => {
        observer.unobserve(observerRefCopy);
        isMounted.current = false;
      };
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!noObserver && <div ref={observerRef} className="observer-sect"></div>}
      <div
        ref={cardRef}
        className="slider-card"
        style={{ overflowY: scroll ? "auto" : "hidden" }}>
        {children}
      </div>
    </>
  );
};
export default SliderCard;
