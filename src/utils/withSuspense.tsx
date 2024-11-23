import { Suspense } from "react";

export const withSuspense = (Component: React.LazyExoticComponent<React.ComponentType>, Fallback: React.ReactNode) => {
  return () => (
    <Suspense fallback={Fallback}>
      <Component />
    </Suspense>
  );
};