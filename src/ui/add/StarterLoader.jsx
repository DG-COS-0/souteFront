import styled from "styled-components";

const Bloc1 = styled.div`
  background-color: var(--color-emerald--7);
  transform: scaleY(0);
  transform-origin: top;
`;

const Bloc2 = styled.div`
  background-color: var(--color-emerald--2);
  transform: scaleY(0);
  transform-origin: top;
`;
const Bloc3 = styled.div`
  background-color: var(--color-emerald--8);
  color: red;
  transform: scaleY(0);
  transform-origin: top;
`;
const Mask = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  text-align: center;
  transform: translateX(-100%);
`;
const BlocContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  //   grid-template-columns: 1fr;
  height: 100dvh;
`;
const StyledStarterLoader = styled.div``;
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
export default function StarterLoader({ setIsStartAnimFinished }) {
  const bloc1 = useRef();
  const bloc2 = useRef();
  const bloc3 = useRef();
  const mask = useRef();
  const heading = useRef();
  const container = useRef();
  useGSAP(() => {
    tl.to([bloc1.current, bloc2.current, bloc3.current], {
      scaleY: 1,
      stagger: 0.3,
    })
      .to(
        heading.current,
        {
          x: 0,
          ease: "elastic.out(1, 0.5)",
          duration: 2,
        },
        "-=0.5"
      )
      .to(bloc1.current, {
        scaleY: 0,
      })
      .to(
        bloc3.current,
        {
          scaleY: 0,
          transformOrigin: "bottom",
        },
        "-=0.5"
      )
      .to(
        bloc2.current,
        {
          height: "100vh",
        },
        "-=0.5"
      )
      .to(
        heading.current,
        {
          scale: 0.5,
          duration: 1,
        },
        "-=0.5"
      )
      .to(
        container.current,
        {
          opacity: 0,
          duration: 1.2,
          onComplete: () => setIsStartAnimFinished(true),
        },
        "-=0.5"
      );
  });

  return (
    <StyledStarterLoader ref={container}>
      <BlocContainer>
        <Bloc1 ref={bloc1} />
        <Bloc2 ref={bloc2} />
        <Bloc3 ref={bloc3} />
      </BlocContainer>
      <Mask ref={mask}>
        <Heading ref={heading}>SumFrizes 🌿</Heading>
      </Mask>
    </StyledStarterLoader>
  );
}
