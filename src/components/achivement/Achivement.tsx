"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { OverlayLoading } from "..";
import { Title } from "../title";
import "./styles.css";
import { blurImgBase64 } from "@/assest/image/blur-img";
import {
  reward1,
  reward2,
  reward3,
  reward4,
  reward5,
  certiAiEnBa,
  certiAiEnDev,
  certificateClaudeCode,
} from "@/assest/image/jpg";
import Image, { StaticImageData } from "next/image";

interface AwardItem {
  id: string;
  image?: StaticImageData;
  description: string;
  pdfUrl?: string;
  group: "reward" | "certificate";
}

const listAwards: AwardItem[] = [
  {
    id: "1",
    group: "reward",
    image: reward1,
    description: "Award 1 Description",
  },
  {
    id: "2",
    group: "reward",
    image: reward2,
    description: "Award 2 Description",
  },
  {
    id: "3",
    group: "reward",
    image: reward3,
    description: "Award 3 Description",
  },
  {
    id: "4",
    group: "reward",
    image: reward4,
    description: "Award 4 Description",
  },
  {
    id: "5",
    group: "reward",
    image: reward5,
    description: "Award 5 Description",
  },
  {
    id: "6",
    group: "certificate",
    image: certiAiEnBa,
    description: "Certification in AI Engineering for Business Analysts",
  },
  {
    id: "7",
    group: "certificate",
    image: certiAiEnDev,
    description: "Certification in AI Engineering for Developers",
  },
  {
    id: "certificate-claude-code",
    group: "certificate",
    image: certificateClaudeCode,
    description: "Certification Claude Code",
  },
  {
    id: "cert-pdf-1",
    group: "certificate",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-ssophb6qxvzx-1781595049.pdf",
  },
  {
    id: "cert-pdf-2",
    group: "certificate",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-zqjg8pyak7ot-1781596090.pdf",
  },
  {
    id: "cert-pdf-3",
    group: "certificate",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-jjsh5s5ht2rz-1781596406.pdf",
  },
  {
    id: "cert-pdf-4",
    group: "certificate",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-jxmaawtdbdd3-1781596495.pdf",
  },
  {
    id: "cert-pdf-5",
    group: "certificate",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-wtvau9f445ah-1781596568.pdf",
  },
  {
    id: "cert-pdf-6",
    group: "certificate",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-n9t3tuziumj5-1781596780.pdf",
  },
];

const SECTIONS: { group: AwardItem["group"]; title: string }[] = [
  { group: "reward", title: "Rewards" },
  { group: "certificate", title: "Certificates" },
];

const PdfThumbnail = ({ description }: { description: string }) => (
  <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
    <svg
      className="h-12 w-12 text-red-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
      <path d="M8 12h3v1.5H9.5v1H11V16H9.5v2H8v-6zm4 0h2.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5H13.5V18H12v-6zm1.5 1.5v1h1v-1h-1z" />
    </svg>
    <p className="line-clamp-2 text-center text-xs text-white/70">
      {description}
    </p>
  </div>
);

export const Achievement = () => {
  const [previewItem, setPreviewItem] = useState<AwardItem | null>(null);

  const openPreview = useCallback((item: AwardItem) => {
    setPreviewItem(item);
  }, []);

  const closePreview = useCallback(() => {
    setPreviewItem(null);
  }, []);

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="h-[100vh] overflow-auto">
        <OverlayLoading key={`achievement-overlay`} />
        <div className="container !overflow-visible p-6 pb-[100px] lg:p-0">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Title>
              My <span className="text-primary">Achievements</span>
            </Title>
          </motion.div>
          <motion.div
            className="achv-hero"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="achv-hero-number">
              {listAwards.length}
              <span>+</span>
            </div>
            <p className="achv-hero-label">Rewards & Certificates</p>
          </motion.div>

          {SECTIONS.map(({ group, title }) => {
            const items = listAwards.filter((award) => award.group === group);
            return (
              <section key={group}>
                <h3 className="achv-section-title">
                  {title}
                  <span>{items.length}</span>
                </h3>
                <div className="achv-grid">
                  {items.map((award, index) => (
                    <motion.button
                      type="button"
                      key={`award-${award.id}`}
                      className="achv-card"
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(index, 5) * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      onClick={() => openPreview(award)}
                    >
                      {award.image ? (
                        <Image
                          className="block w-full h-auto"
                          src={award.image}
                          placeholder="blur"
                          blurDataURL={blurImgBase64}
                          alt={award.description}
                        />
                      ) : (
                        <PdfThumbnail description={award.description} />
                      )}
                      <div className="achv-card-caption">
                        <span>{award.description}</span>
                        <em>View ↗</em>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-slate-900 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closePreview}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              >
                ✕
              </button>

              {/* Content */}
              {previewItem.pdfUrl ? (
                <iframe
                  src={previewItem.pdfUrl}
                  className="h-[85vh] w-full"
                  title={previewItem.description}
                />
              ) : previewItem.image ? (
                <div className="flex max-h-[90vh] items-center justify-center p-4">
                  <Image
                    src={previewItem.image}
                    alt={previewItem.description}
                    className="max-h-[85vh] w-auto rounded-lg object-contain"
                    placeholder="blur"
                    blurDataURL={blurImgBase64}
                  />
                </div>
              ) : null}

              {/* Description */}
              <div className="border-t border-white/10 px-4 py-3">
                <p className="text-center text-sm text-white/70">
                  {previewItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

