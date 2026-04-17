import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts } from "@/data/content";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Blogs</h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Medium posts from Praveen Kalura on water resources, remote sensing, sustainability, and technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <a key={post.id} href={post.url} target="_blank" rel="noreferrer" className="block h-full">
                <Card className="h-full overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
                  <div className="h-52 overflow-hidden bg-teal-50">
                    <img src={post.thumbnail} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="border-teal-300 text-teal-700">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-7 text-gray-900">{post.title}</h2>
                    <p className="mb-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-teal-700">
                      Read on Medium <ChevronRight className="ml-1" size={16} />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
