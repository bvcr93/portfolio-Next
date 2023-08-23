// pages/ideas/primary.js
import IdeasLayout from "@/components/IdeasLayout";
import { ReactElement } from "react";

function PrimaryIdeas() {
  return <div>PrimaryIdeas</div>;
}

PrimaryIdeas.getLayout = function getLayout(page:ReactElement) {
  return <IdeasLayout>{page}</IdeasLayout>;
}

export default PrimaryIdeas;
