import { Hammer } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export default function MaintenancePage({ title }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="flex min-h-screen items-center justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl rounded-lg bg-white p-6 text-center shadow-lg sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
            <Hammer size={34} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            This page is under maintenance. Please check back soon.
          </p>
          <a href="#about" className="mt-8 inline-flex rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800">
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
