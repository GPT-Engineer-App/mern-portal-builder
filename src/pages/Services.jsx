import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Service 1", description: "Description for service 1" },
  { title: "Service 2", description: "Description for service 2" },
  { title: "Service 3", description: "Description for service 3" },
];

const ServicesPage = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{service.description}</CardDescription>
            <Button variant="link" className="mt-2">Learn More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesPage;