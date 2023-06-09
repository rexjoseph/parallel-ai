import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { formatDistance } from "date-fns";
import Paragraph from "./ui/Paragraph";
import { Input } from "./ui/Input";
import Heading from "./ui/Heading";
import Table from "./Table";
import ApiKeyOptions from "./ApiKeyOptions";
import Image from "next/image";
import Link from "next/link";

const ApiDashboard = async () => {
  const user = await getServerSession(authOptions);
  if (!user) notFound();

  const apiKeys = await db.apiKey.findMany({
    where: {
      userId: user.user.id,
    },
  });

  const activeApiKey = apiKeys.find((apiKey) => apiKey.enabled);

  if (!activeApiKey) notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializeableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));

  return (
    <div className="container flex flex-col gap-6">
      <div className="flex justify-between">
        <Heading style={{textAlign: "left"}}>Hey 👋, {user.user.name}</Heading>
        <div>
          <Image 
            width ={40}
            height={40}
            className="w-10 h-10 p-1 rounded-full" 
            src={user.user.image ? user.user.image : '/default-image.jpg'}  
            alt="Bordered avatar" />
        </div>
      </div>
      <Link href={`/dashboard/billing`}>
        Billing
      </Link>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph>Your API key:</Paragraph>
        <Input className="w-fit truncate" readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyId={activeApiKey.id} apiKeyK={activeApiKey.key} />
      </div>
      <Paragraph className="text-center md:text-left mt-4 -mb-4">
        API Usage history
      </Paragraph>

      <Table userRequests={serializeableRequests} />
    </div>
  );
};

export default ApiDashboard;
