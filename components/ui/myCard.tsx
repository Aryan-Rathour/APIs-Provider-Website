import { MagicCard } from "@/components/ui/MagicCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export function MagicCardDemo() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Magic Card */}
      <MagicCard
        gradientSize={250}  // Larger gradient size
        gradientColor="#ff5733"  // Different gradient color
        gradientOpacity={0.9}  // Less transparent gradient
        gradientFrom="#FF5C8D"  // Custom gradient start color
        gradientTo="#F8C14C"  // Custom gradient end color
        className="cursor-pointer flex-col items-center justify-center text-4xl shadow-2xl"
      >
        Magic
      </MagicCard>

      {/* Standard Card */}
      <Card className="w-96 bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg rounded-xl p-6">
        <CardHeader className="text-gray-900 font-semibold">
          <CardTitle>Popular APIs</CardTitle>
          <CardDescription>Discover our most used APIs</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700">
          <ul className="list-disc pl-10">
            <li>Random User Generator</li>
            <li>Weather Forecast</li>
            <li>Currency Exchange Rates</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
