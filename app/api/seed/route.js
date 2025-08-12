import { seedTransactions } from "@/actions/seed";

export async function GET() {
  const result = await seedTransactions();

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
