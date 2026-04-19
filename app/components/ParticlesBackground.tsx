// "use client";

// import { useEffect, useState } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// export default function ParticlesBackground() {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { tsParticles } = await import("@tsparticles/engine");
//       await loadSlim(tsParticles);
//       setReady(true);
//     })();
//   }, []);

//   if (!ready) return null;

//   return (
//     <Particles
//       id="tsparticles"
//       options={{
//         particles: {
//           number: { value: 40 },
//           move: { enable: true, speed: 1 },
//           size: { value: 2 },
//         },
//       }}
//     />
//   );
// }