import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recomended } from "./Recomended/Recomended";
import { Self } from "./Self/Self";

export const Resources = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="recomended" className="w-full">
        <TabsList className="w-full bg-zinc-800 text-white">
          <TabsTrigger value="recomended" className="w-full">
            Recomended
          </TabsTrigger>
          <TabsTrigger value="self" className="w-full">
            Self Made
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recomended" className="pt-4">
          <Recomended />
        </TabsContent>
        <TabsContent value="self" className="pt-4">
          <Self />
        </TabsContent>
      </Tabs>
    </div>
  );
};
