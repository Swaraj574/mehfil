import { lazy } from "react";

export const PoetSpotlight =
  lazy(() =>
    import(
      "../features/home/PoetSpotlight/PoetSpotlight"
    )
  );