import ImageSlider from "@/components/imageSlider";
import clientSideFunction from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  const clientResult = clientSideFunction();
  return (
    <>
      <h1>
        Server Route: {result} {clientResult}
      </h1>
      <ImageSlider />
    </>
  );
}
