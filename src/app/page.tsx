import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { trpc, getQueryClient } from '@/trpc/server';
import { Client } from "./client-greeting";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.hello.queryOptions({
      text: "Sachin!"
    })
  );

  return (
    <HydrationBoundary
      state={dehydrate(queryClient)}
    >
      <div className="text-red-500">
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </div>
    </HydrationBoundary>
  );
}

export default Page;