// .navigation {
//     &__checkbox {
//         display: none;
//     }
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

//     &__button {
//         background-color: $color-white;
//         height: 7rem;
//         width: 7rem;
//         position: fixed;
//         top: 6rem;
//         right: 6rem;
//         border-radius: 50%;
//         z-index: 2000;
//         box-shadow: 0 1rem 3rem rgba($color-black, .1);
//         text-align: center;
//         cursor: pointer;

//         @include respond(tab-port) {
//             top: 4rem;
//             right: 4rem;
//         }

//         @include respond(phone) {
//             top: 3rem;
//             right: 3rem;
//         }
//     }

//     &__background {
//         height: 6rem;
//         width: 6rem;
//         border-radius: 50%;
//         position: fixed;
//         top: 6.5rem;
//         right: 6.5rem;
//         background-image: radial-gradient($color-primary-light, $color-primary-dark);
//         z-index: 1000;
//         transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);

//         @include respond(tab-port) {
//             top: 4.5rem;
//             right: 4.5rem;
//         }

//         @include respond(phone) {
//             top: 3.5rem;
//             right: 3.5rem;
//         }
//     }

//     &__nav {
//         height: 100vh;
//         position: fixed;
//         top: 0;
//         left: 0;
//         z-index: 1500;

//         opacity: 0;
//         width: 0;
//         transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//     }

//     &__list {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%,-50%);
//         list-style: none;
//         text-align: center;
//         width: 100%;
//     }

//     &__item {
//         margin: 1rem;
//     }

//     &__link {
//         &:link,
//         &:visited {
//             display: inline-block;
//             font-size: 3rem;
//             font-weight: 300;
//             padding: 1rem 2rem;
//             color: $color-white;
//             text-decoration: none;
//             text-transform: uppercase;
//             background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-white 50%);
//             background-size: 220%;
//             transition: all .4s;

//             span {
//                 margin-right: 1.5rem;
//                 display: inline-block;
//             }
//         }

//         &:hover,
//         &:active {
//             background-position: 100%;
//             color: $color-primary;
//             transform: translateX(1rem);
//         }
//     }

//     //FUNCTIONALITY
//     &__checkbox:checked ~ &__background {
//         transform: scale(80);
//     }

//     &__checkbox:checked ~ &__nav {
//         opacity: 1;
//         width: 100%;
//     }

//     //ICON
//     &__icon {
//         position: relative;
//         margin-top: 3.5rem;

//         &,
//         &::before,
//         &::after {
//             width: 3rem;
//             height: 2px;
//             background-color: $color-grey-dark-3;
//             display: inline-block;
//         }

//         &::before,
//         &::after {
//             content: "";
//             position: absolute;
//             left: 0;
//             transition: all .2s;
//         }

//         &::before { top: -.8rem; }
//         &::after { top: .8rem; }
//     }

//     &__button:hover &__icon::before {
//         top: -1rem;
//     }

//     &__button:hover &__icon::after {
//         top: 1rem;
//     }

//     &__checkbox:checked + &__button &__icon {
//         background-color: transparent;
//     }

//     &__checkbox:checked + &__button &__icon::before {
//         top: 0;
//         transform: rotate(135deg);
//     }

//     &__checkbox:checked + &__button &__icon::after {
//         top: 0;
//         transform: rotate(-135deg);
//     }
// }

// <div class="navigation">
//             <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

//             <label for="navi-toggle" class="navigation__button">
//                 <span class="navigation__icon">&nbsp;</span>
//             </label>

//             <div class="navigation__background">&nbsp;</div>

//             <nav class="navigation__nav">
//                 <ul class="navigation__list">
//                     <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Natous</a></li>
//                     <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benfits</a></li>
//                     <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
//                     <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
//                     <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>Book now</a></li>
//                     </ul>
//             </nav>
//         </div>
const Navigation = styled.div`
  & .navigation__checkbox {
    display: none;
  }
  & .navigation__button {
    background-color: var(--color-green--1);
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 6rem;
    right: 6rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
  }
  & .navigation__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 6.5rem;
    right: 6.5rem;
    background-image: radial-gradient(
      var(--color-green--4),
      var(--color-green--7)
    );
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  }
  & .navigation__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;

    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  & .navigation__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  & .navigation__item {
    margin: 1rem;
  }
  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(80);
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    width: 100%;
  }
  .navigation__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: var(--color-grey--8);
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  .navigation__button:hover .navigation__icon::before {
    top: -1rem;
  }

  .navigation__button:hover .navigation__icon::after {
    top: 1rem;
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;
  }

  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: var(--color-grey--1);
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      var(--color-grey--1) 50%
    );
    background-size: 220%;
    transition: all 0.4s;

    span {
      margin-right: 1.5rem;
      display: inline-block;
    }
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: var(--color-green--8);
    transform: translateX(1rem);
  }
`;
import React from "react";

export default function NavBarHome() {
  return (
    <Navigation>
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <StyledNavLink to="#" className="navigation__link">
              <span>01</span>About FresseMess
            </StyledNavLink>
          </li>
          <li className="navigation__item">
            <StyledNavLink to="#" className="navigation__link">
              <span>02</span>Your Benefits
            </StyledNavLink>
          </li>
          <li className="navigation__item">
            <StyledNavLink to="#" className="navigation__link">
              <span>03</span>OURServices
            </StyledNavLink>
          </li>
          <li className="navigation__item">
            <StyledNavLink to="#" className="navigation__link">
              <span>04</span>Stories
            </StyledNavLink>
          </li>
          <li className="navigation__item">
            <StyledNavLink to="#" className="navigation__link">
              <span>05</span>Start Now
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    </Navigation>
  );
}
