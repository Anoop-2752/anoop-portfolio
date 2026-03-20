"use client";

import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("./SplashCursor"), {
  ssr: false,
});

export default function CursorEffect() {
  return (
    <SplashCursor
      SPLAT_RADIUS={0.3}
      SPLAT_FORCE={6000}
      DENSITY_DISSIPATION={1.5}
      VELOCITY_DISSIPATION={2}
      CURL={4}
      COLOR_UPDATE_SPEED={12}
    />
  );
}