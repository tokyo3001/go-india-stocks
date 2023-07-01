export async function GET(request) {
  return Response.json([
    { distance: "45-minute drive" },
    { distance: "4.5-hour drive" },
    { distance: "4.5-hour drive" },
    { distance: "6-hour drive" },
    { distance: "2-hour drive" },
  ]);
}
