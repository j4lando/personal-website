
import React from "react";
import { loadPublicationsConfig, PublicationItem } from "../../lib/configLoader";

export default function PublicationSection() {
  const publications: PublicationItem[] = loadPublicationsConfig();
  return (
    <section id="publications" className="w-full h-full min-h-screen flex flex-col items-center justify-center snap-start" style={{background: "rgba(122,56,29,1)"}}>
      <h2 className="text-3xl font-bold text-white mb-8">Papers</h2>
      <ul className="w-full max-w-2xl list-disc pl-8">
        {publications.map(pub => (
          <li key={pub.id} className="mb-8 text-white text-base">
            <div className="font-semibold text-lg mb-1">{pub.title}</div>
            <div className="mb-1">
              {pub.author.replace(/ and /g, ', ')} ({pub.year})
              {pub.journal ? `. ${pub.journal}` : pub.booktitle ? `. ${pub.booktitle}` : ""}
            </div>
            {pub.doi && (
              <div className="mb-1">DOI: {pub.doi}</div>
            )}
            {pub.url && (
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="underline text-blue-200">View Publication</a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
