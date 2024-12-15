import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recomended } from "./Recomended/Recomended";
import { Self } from "./Self/Self";

export const Resources = () => {
  return (
    <div>
      <Tabs defaultValue="recomended" className="w-[60vw] p-5">
        <TabsList className="w-full  bg-zinc-800 text-white">
          <TabsTrigger value="recomended" className="w-full">
            Recomended
          </TabsTrigger>
          <TabsTrigger value="self" className="w-full">
            Self Made
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recomended">
          <Recomended />
        </TabsContent>
        <TabsContent value="self">
          <Self />
        </TabsContent>
      </Tabs>
    </div>
  );
};
