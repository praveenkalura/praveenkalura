import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Research, modeling, and geospatial development projects across water resources and remote sensing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="border-0 shadow-md transition-all hover:shadow-lg">
                <CardContent className="p-5 sm:p-6">
                  <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
                    <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
                    <Badge variant="outline" className="border-teal-300 text-teal-700">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="mb-2 text-sm font-medium text-gray-600">{project.organization}</p>
                  <p className="mb-4 text-sm text-gray-500">{project.duration}</p>
                  <p className="mb-5 text-sm leading-6 text-gray-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology} variant="outline" className="border-gray-300 text-gray-700">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
