import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
 --color-grey--0: #f9fafb;
--color-grey--1: #f3f4f6;
--color-grey--2: #e5e7eb;
--color-grey--3: #d1d5db;
--color-grey--4: #9ca3af;
--color-grey--5: #6b7280;
--color-grey--6: #4b5563;
--color-grey--7: #374151;
--color-grey--8: #1f2937;
--color-grey--9: #111827;
--color-grey--10: #030712;

--color-stale--0: #f8fafc;
--color-stale--1: #f1f5f9;
--color-stale--2: #e2e8f0;
--color-stale--3: #cbd5e1;
--color-stale--4: #94a3b8;
--color-stale--5: #64748b;
--color-stale--6: #475569;
--color-stale--7: #334155;
--color-stale--8: #1e293b;
--color-stale--9: #0f172a;
--color-stale--10: #020617;

--color-zinc--0: #fafafa;
--color-zinc--1: #f4f4f5;
--color-zinc--2: #e4e4e7;
--color-zinc--3: #d4d4d8;
--color-zinc--4: #a1a1aa;
--color-zinc--5: #71717a;
--color-zinc--6: #52525b;
--color-zinc--7: #3f3f46;
--color-zinc--8: #27272a;
--color-zinc--9: #18181b;
--color-zinc--10: #09090b;

--color-neutral--0: #fafafa;
--color-neutral--1: #f5f5f5;
--color-neutral--2: #e5e5e5;
--color-neutral--3: #d4d4d4;
--color-neutral--4: #a3a3a3;
--color-neutral--5: #737373;
--color-neutral--6: #525252;
--color-neutral--7: #404040;
--color-neutral--8: #262626;
--color-neutral--9: #171717;
--color-neutral--10: #0a0a0a;

--color-red--0: #fef2f2;
--color-red--1: #fee2e2;
--color-red--2: #fecaca;
--color-red--3: #fca5a5;
--color-red--4: #f87171;
--color-red--5: #ef4444;
--color-red--6: #dc2626;
--color-red--7: #b91c1c;
--color-red--8: #991b1b;
--color-red--9: #7f1d1d;
--color-red--10: #450a0a;

--color-amber--0: #fffbeb;
--color-amber--1: #fef3c7;
--color-amber--2: #fde68a;
--color-amber--3: #fcd34d;
--color-amber--4: #fbbf24;
--color-amber--5: #f59e0b;
--color-amber--6: #d97706;
--color-amber--7: #b45309;
--color-amber--8: #92400e;
--color-amber--9: #78350f;
--color-amber--10: #451a03;

--color-orange--0: #fff7ed;
--color-orange--1: #ffedd5;
--color-orange--2: #fed7aa;
--color-orange--3: #fdba74;
--color-orange--4: #fb923c;
--color-orange--5: #f97316;
--color-orange--6: #ea580c;
--color-orange--7: #c2410c;
--color-orange--8: #9a3412;
--color-orange--9: #7c2d12;
--color-orange--10: #431407;

--color-yellow--0: #fefce8;
--color-yellow--1: #fef9c3;
--color-yellow--2: #fef08a;
--color-yellow--3: #fde047;
--color-yellow--4: #facc15;
--color-yellow--5: #eab308;
--color-yellow--6: #ca8a04;
--color-yellow--7: #a16207;
--color-yellow--8: #854d0e;
--color-yellow--9: #713f12;
--color-yellow--10: #422006;

--color-green--0: #f0fdf4;
--color-green--1: #dcfce7;
--color-green--2: #bbf7d0;
--color-green--3: #86efac;
--color-green--4: #4ade80;
--color-green--5: #22c55e;
--color-green--6: #16a34a;
--color-green--7: #15803d;
--color-green--8: #166534;
--color-green--9: #14532d;
--color-green--10: #052e16;

--color-emerald--0: #ecfdf5;
--color-emerald--1: #d1fae5;
--color-emerald--2: #bbf7d0;
--color-emerald--3: #6ee7b7;
--color-emerald--4: #34d399;
--color-emerald--5: #10b981;
--color-emerald--6: #059669;
--color-emerald--7: #047857;
--color-emerald--8: #065f46;
--color-emerald--9: #064e3b;
--color-emerald--10: #022c22;

--color-teal--0: #f0fdfa;
--color-teal--1: #ccfbf1;
--color-teal--2: #99f6e4;
--color-teal--3: #5eead4;
--color-teal--4: #2dd4bf;
--color-teal--5: #14b8a6;
--color-teal--6: #14b8a6;
--color-teal--7: #0f766e;
--color-teal--8: #115e59;
--color-teal--9: #134e4a;
--color-teal--10: #042f2e;

--color-lime--0: #f7fee7;
--color-lime--1: #ecfccb;
--color-lime--2: #d9f99d;
--color-lime--3: #bef264;
--color-lime--4: #a3e635;
--color-lime--5: #84cc16;
--color-lime--6: #65a30d;
--color-lime--7: #4d7c0f;
--color-lime--8: #3f6212;
--color-lime--9: #365314;
--color-lime--10: #1a2e05;

--color-indigo--0: #eef2ff;
--color-indigo--1: #e0e7ff;
--color-indigo--2: #c7d2fe;
--color-indigo--3: #a5b4fc;
--color-indigo--4: #818cf8;
--color-indigo--5: #6366f1;
--color-indigo--6: #4f46e5;
--color-indigo--7: #4338ca;
--color-indigo--8: #3730a3;
--color-indigo--9: #312e81;
--color-indigo--10: #1e1b4b;

--color-sky--0: #f0f9ff;
--color-sky--1: #e0f2fe;
--color-sky--2: #bae6fd;
--color-sky--3: #7dd3fc;
--color-sky--4: #38bdf8;
--color-sky--5: #0ea5e9;
--color-sky--6: #0284c7;
--color-sky--7: #0369a1;
--color-sky--8: #075985;
--color-sky--9: #0c4a6e;
--color-sky--10: #082f49;


--color-cyan--0: #ecfeff;
--color-cyan--1: #cffafe;
--color-cyan--2: #a5f3fc;
--color-cyan--3: #67e8f9;
--color-cyan--4: #22d3ee;
--color-cyan--5: #06b6d4;
--color-cyan--6: #0891b2;
--color-cyan--7: #0e7490;
--color-cyan--8: #155e75;
--color-cyan--9: #164e63;
--color-cyan--10: #083344;

--color-blue--0: #eff6ff;
--color-blue--1: #dbeafe;
--color-blue--2: #bfdbfe;
--color-blue--3: #93c5fd;
--color-blue--4: #60a5fa;
--color-blue--5: #3b82f6;
--color-blue--6: #2563eb;
--color-blue--7: #1d4ed8;
--color-blue--8: #1e40af;
--color-blue--9: #1e3a8a;
--color-blue--10: #172554;

--color-fuchsia--0: #fdf4ff;
--color-fuchsia--1: #fae8ff;
--color-fuchsia--2: #f5d0fe;
--color-fuchsia--3: #f0abfc;
--color-fuchsia--4: #e879f9;
--color-fuchsia--5: #d946ef;
--color-fuchsia--6: #c026d3;
--color-fuchsia--7: #a21caf;
--color-fuchsia--8: #86198f;
--color-fuchsia--9: #701a75;
--color-fuchsia--10: #4a044e;

--color-purple--0: #faf5ff;
--color-purple--1: #f3e8ff;
--color-purple--2: #e9d5ff;
--color-purple--3: #d8b4fe;
--color-purple--4: #c084fc;
--color-purple--5: #a855f7;
--color-purple--6: #9333ea;
--color-purple--7: #7e22ce;
--color-purple--8: #6b21a8;
--color-purple--9: #581c87;
--color-purple--10: #3b0764;


--color-pink--0: #fdf2f8;
--color-pink--1: #fce7f3;
--color-pink--2: #fbcfe8;
--color-pink--3: #f9a8d4;
--color-pink--4: #f472b6;
--color-pink--5: #ec4899;
--color-pink--6: #db2777;
--color-pink--7: #be185d;
--color-pink--8: #9d174d;
--color-pink--9: #831843;
--color-pink--10: #500724;


--color-rose--0: #fff1f2;
--color-rose--1: #ffe4e6;
--color-rose--2: #fecdd3;
--color-rose--3: #fda4af;
--color-rose--4: #fb7185;
--color-rose--5: #f43f5e;
--color-rose--6: #e11d48;
--color-rose--7: #be123c;
--color-rose--8: #9f1239;
--color-rose--9: #881337;
--color-rose--10: #4c0519;

--color-violet--0: #f5f3ff;
--color-violet--1: #ede9fe;
--color-violet--2: #ddd6fe;
--color-violet--3: #c4b5fd;
--color-violet--4: #a78bfa;
--color-violet--5: #8b5cf6;
--color-violet--6: #7c3aed;
--color-violet--7: #6d28d9;
--color-violet--8: #5b21b6;
--color-violet--9: #4c1d95;
--color-violet--10: #2e1065;

} 
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  /* transition: background-color 0.3s, border 0.3s; */
}

html {
  font-size: 62.5%;
}

body {
  color: var(--color-grey--7);
  background-color: var(--color-grey--2);

  /* overflow: hidden; */
  /* transition: color 0.3s, background-color 0.3s; */
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;

  font-family: "Signika", sans-serif;
  font-optical-sizing: auto;

}
  input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}
::-moz-selection { /* Code for Firefox */
  color: var(--color-grey--1);
  background: var(--color-emerald--6);
}

::selection {
  color: var(--color-grey--1);
  background: var(--color-emerald--6);
}
input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

}
.u-center-text { text-align: center !important; }

.u-margin-bottom-small { margin-bottom: 1.5rem !important; }
.u-margin-bottom-medium {
    margin-bottom: 4rem !important;

}

.u-margin-bottom-big { 
    margin-bottom: 8rem !important;


}

.u-margin-top-auto {
  margin-bottom: auto !important;
}
.u-margin-top-big { margin-top: 8rem !important; }
.u-margin-top-huge { margin-top: 10rem !important; }


.heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, var(--color-green--5), var(--color-green--8));
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s;
  }
  .heading-secondary:hover {
      transform: skewY(2deg) skewX(8deg) scale(1.1);
      text-shadow: .5rem 1rem 2rem rgba(0, 0,0 , .2);
  }


  .book {
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ),
    url(/form.jpg);
  background-size: cover;
  border-radius: 3px;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
}
.book__form {
  width: 50%;
  padding: 6rem;
}

.heading-tertiary {
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-grey--0);
}
.form__group:not(:last-child) {
  margin-bottom: 2rem;
}

.form__radio-group {
        width: 49%;
        display: inline-block;

       
    }

    &__radio-input {
        display: none;
    }
    
    &__radio-label {
        font-size: $default-font-size;
        cursor: pointer;
        position: relative;
        padding-left: 4.5rem;
    }

    &__radio-button {
        height: 3rem;
        width: 3rem;
        border: 5px solid $color-primary;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 0;
        top: -.4rem;

        &::after {
            content: "";
            display: block;
            height: 1.3rem;
            width: 1.3rem;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: $color-primary;
            opacity: 0;
            transition: opacity .2s;
        }
    }

    &__radio-input:checked ~ &__radio-label &__radio-button::after {
        opacity: 1;
    }
`;
export default GlobalStyles;
