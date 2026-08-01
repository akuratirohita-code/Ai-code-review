const SkeletonBlock = ({ className = "" }) => (
  <div className={`animate-pulse rounded-xl bg-border/60 ${className}`} />
);

const LoadingSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-5">
        <SkeletonBlock className="h-4 w-24" />
        <SkeletonBlock className="mt-3 h-10 w-32" />
        <div className="mt-5 grid grid-cols-3 gap-2">
          <SkeletonBlock className="h-14" />
          <SkeletonBlock className="h-14" />
          <SkeletonBlock className="h-14" />
        </div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5">
          <SkeletonBlock className="h-4 w-20" />
          <SkeletonBlock className="mt-3 h-4 w-3/4" />
          <SkeletonBlock className="mt-2 h-4 w-full" />
          <SkeletonBlock className="mt-2 h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
