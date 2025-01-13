import { Skeleton } from "@/components/ui/skeleton";

 function SkeletonCard() {
  return (
    <section className='min-h-[430px] w-full flex flex-col   items-center bg-primary '>
    <div className="h-[430px] w-[430px] md:h-[500px] md:w-[553px] bg-red-40 flex gap-4 md:flex-row flex-col">
      {/* Small images group */}
      <div className="md:w-[76px] w-full h-[80px] md:h-[416px] flex md:flex-col flex-row justify-between">
        {/* Placeholder for small image 1 */}
        <Skeleton className="w-[76px] h-[80px] bg-slate-400" />
        {/* Placeholder for small image 2 */}
        <Skeleton className="w-[76px] h-[80px] bg-slate-400" />
        {/* Placeholder for small image 3 */}
        <Skeleton className="w-[76px] h-[80px] bg-slate-400" />
        {/* Placeholder for small image 4 */}
        <Skeleton className="w-[76px] h-[80px] bg-slate-400" />
      </div>

      {/* Main product image */}
      <div className= "w-[430px] md:w-[481px] h-[430px] md:h-[500px]">
        <Skeleton className="w-[430px] h-[430px] md:h-[500px] md:w-[481px] bg-slate-400" />
      </div>
    </div>
    </section>
  );
}

export default SkeletonCard
