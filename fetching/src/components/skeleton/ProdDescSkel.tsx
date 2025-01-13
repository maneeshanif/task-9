import { Skeleton } from "@/components/ui/skeleton";

 function SkeletonDetailsCard() {
  return (
    <div className="h-[703px] w-full md:w-[606px] flex flex-col md:px-0 px-4 items-start justify-between">
      {/* Top Section */}
      <div className="w-full h-[460px] pb-10 border-b border-mygray flex flex-col items-start justify-between">
        {/* Title */}
        <Skeleton className="w-[80%] h-[42px] bg-slate-400" />
        {/* Price */}
        <Skeleton className="w-[50%] h-[24px] bg-slate-200" />
        {/* Reviews */}
        <div className="h-[20px] w-[264px] flex justify-between items-center">
          <Skeleton className="w-[124px] h-[20px] bg-slate-400" />
          <Skeleton className="w-[120px] h-[16px] bg-slate-200" />
        </div>
        {/* Size */}
        <div className="w-[123px] h-[63px] flex flex-col justify-between items-start">
          <Skeleton className="w-[50px] h-[16px] bg-slate-200" />
          <div className="h-[30px] w-[123px] flex justify-between items-center">
            <Skeleton className="h-[30px] w-[30px] bg-slate-300 rounded-md" />
            <Skeleton className="h-[30px] w-[30px] bg-slate-300 rounded-md" />
            <Skeleton className="h-[30px] w-[30px] bg-slate-300 rounded-md" />
          </div>
        </div>
        {/* Color */}
        <div className="w-[123px] h-[63px] flex flex-col justify-between items-start">
          <Skeleton className="w-[50px] h-[16px] bg-slate-200" />
          <div className="h-[30px] w-[123px] flex justify-between items-center">
            <Skeleton className="h-[30px] w-[30px] bg-slate-300 rounded-full" />
            <Skeleton className="h-[30px] w-[30px] bg-slate-300 rounded-full" />
            <Skeleton className="h-[30px] w-[30px] bg-slate-300 rounded-full" />
          </div>
        </div>
        {/* Buttons */}
        <div className="h-[64px] w-full flex justify-between items-center">
          <Skeleton className="md:w-[123px] w-[80px] h-[56px] md:h-[64px] bg-slate-300 rounded-lg" />
          <Skeleton className="h-[56px] md:h-[64px] w-[120px] md:w-[215px] bg-slate-300 rounded-lg" />
          <Skeleton className="h-[56px] md:h-[64px] w-[120px] md:w-[215px] bg-slate-300 rounded-lg" />
        </div>
      </div>
      {/* Bottom Section */}
      <div className="h-[150px] w-full flex flex-col items-start pb-8 justify-between">
        {/* SKU */}
        <div className="flex items-center gap-8">
          <Skeleton className="w-24 h-[16px] bg-slate-300" />
          <Skeleton className="w-40 h-[16px] bg-slate-300" />
        </div>
        {/* Category */}
        <div className="flex items-center gap-8">
          <Skeleton className="w-24 h-[16px] bg-slate-300" />
          <Skeleton className="w-40 h-[16px] bg-slate-300" />
        </div>
        {/* Tags */}
        <div className="flex items-center gap-8">
          <Skeleton className="w-24 h-[16px] bg-slate-300" />
          <Skeleton className="w-40 h-[16px] bg-slate-300" />
        </div>
        {/* Share */}
        <div className="flex items-center gap-8">
          <Skeleton className="w-24 h-[16px] bg-slate-300" />
          <div className="flex gap-2">
            <Skeleton className="w-[24px] h-[24px] bg-slate-300 rounded-full" />
            <Skeleton className="w-[24px] h-[24px] bg-slate-300 rounded-full" />
            <Skeleton className="w-[24px] h-[24px] bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonDetailsCard;