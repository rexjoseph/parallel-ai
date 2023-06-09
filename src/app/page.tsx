import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import type { Metadata } from "next";
import OptForm from "@/components/OptForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Parallel - Your personal assistant for Legal Requests ⚡️",
  description: "Open source",
};

export default function Home() {
  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 rounded-xl text-white">
      <div className="text-center max-w-7xl mx-auto pt-32 md:pt-40 pb-32 sm:py-52 flex flex-col sm:items-center justify-center">
        <div className="rounded-full w-fit text-xs text-gray-400 py-1 px-4 mb-4 bg-gray-900 border border-indigo-900/50 shadow-md">
          Parallel AI BETA
        </div>
        <Heading
          size="default"
          className="w-full max-w-3xl text-left md:text-center md:max-w-2xl text-3xl my-2 md:my-0 font-bold text-white md:text-5xl md:leading-tight"
        >
          Your personal assistant for Legal Requests
        </Heading>

        <Paragraph className="max-w-lg text-left md:text-center mt-4 text-base font-medium text-gray-400 md:text-xl">
          With the parallel API, you can easily draft subpoenas, lookup phone carriers, and manage case discoveries with an AI Assistant using an{" "}
          <Link
            href="/login"
            className="underline underline-offset-2 text-black dark:text-light"
          >
            API key
          </Link>
          . Be the first to gain access when we launch.
        </Paragraph>
        <OptForm />
        <div>
          <div>
            <div>
              <div>
                <Image
                  src="/app-preview.png"
                  width={800}
                  height={320}
                  alt="App preview"
                  sizes="(max-width: 768px) 100vw,"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto text-left mt-16">
          <h3 className="text-3xl font-semibold">
            Delegate requests to an AI Assistant and be more efficient
          </h3>
          <p className="max-w-lg text-base font-medium text-gray-400 md:text-lg">
            Provide information being requested or tasks to be done, the app does the rest. From
            looking up phone carrier/company, addresses to subpoenas, drafts, and case discoveries.
            Want to use your custom draft templates everytime? Train your assistant. PDF, audio inputs and Downloads coming soon.
          </p>
        </div>
        <section className="relative w-full max-w-4xl mx-auto mt-28">
          <div className="w-full grid md:grid-cols-2 gap-6 md:gap-12 text-left items-end my-12">
            <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
              Supercharged by
              <span className="text-cyan-400 block">Machine Learning & Natural Language Processing</span>
            </h2>
            <p className="max-w-lg text-base font-medium text-gray-400 md:text-lg">
              Leverage the power of ML and NLP to produce higher quality tasks / requests
              while freeing up your time. Streamline your drafts and
              make it that much easier to quickly get more done.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-x-8 gap-y-10 md:gap-0 text-left pt-6">
            <div>
              <h3 className="text-2xl md:text-4xl font-medium mb-2">
                &gt; 170bn
              </h3>
              <p className="text-sm text-gray-400">trained parameters</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-medium mb-2">Context</h3>
              <p className="text-sm text-gray-400">
                understanding & interference
              </p>
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl md:text-4xl font-medium mb-2">
                Enhanced consistency
              </h3>
              <p className="text-sm text-gray-400">
                optimized templates to match your writing style
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-white border-t border-gray-800">
        <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="-my-2 text-center text-base text-white">
            <span className="text-gray-400 group-hover:text-white transition">
              Parallel - Your personal assistant for Legal Requests ⚡️
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
