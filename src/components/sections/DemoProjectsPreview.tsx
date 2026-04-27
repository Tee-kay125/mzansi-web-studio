import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { demos } from "@/data/demos";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImageBlock } from "@/components/ui/ImageBlock";

const demoImages: Record<string, string> = {
  "Salon Website Demo": "/images/main/demo-salon.jpg",
  "Driving School Website Demo": "/images/main/demo-driving.jpg",
  "Beauty Ecommerce Demo": "/images/main/demo-beauty.jpg",
  "TheNAT Tutoring & Technology Platform": "/images/main/demo-tutor.jpg",
};

export function DemoProjectsPreview() {
  return (
    <AnimatedSection className="bg-white px-4 py-20 text-slate-950 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Demo projects"
            title="See what your business website could look like."
            description="These demo websites help you visualise the kind of professional online presence we can build for your business."
          />
          <Link href="/portfolio" className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800">
            View all demos <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <div key={demo.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <ImageBlock
                src={demoImages[demo.title] || "/images/main/demo-salon.jpg"}
                alt={demo.title}
                label={demo.category}
                className="h-72"
                imgClassName="transition duration-700 group-hover:scale-105"
              />

              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">{demo.category}</p>
                <h3 className="mt-3 text-2xl font-black">{demo.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{demo.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {demo.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={demo.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-50 px-5 py-3 font-black text-emerald-700 transition hover:bg-emerald-100"
                >
                  View demo <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
