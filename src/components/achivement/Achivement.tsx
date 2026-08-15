"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useState, useCallback } from "react";
import Slider from "react-slick";
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
}

const listAwards: AwardItem[] = [
  {
    id: "1",
    image: reward1,
    description: "Award 1 Description",
  },
  {
    id: "2",
    image: reward2,
    description: "Award 2 Description",
  },
  {
    id: "3",
    image: reward3,
    description: "Award 3 Description",
  },
  {
    id: "4",
    image: reward4,
    description: "Award 4 Description",
  },
  {
    id: "5",
    image: reward5,
    description: "Award 5 Description",
  },
  {
    id: "6",
    image: certiAiEnBa,
    description: "Certification in AI Engineering for Business Analysts",
  },
  {
    id: "7",
    image: certiAiEnDev,
    description: "Certification in AI Engineering for Developers",
  },
  {
    id: "certificate-claude-code",
    image: certificateClaudeCode,
    description: "Certification Claude Code",
  },
  {
    id: "cert-pdf-1",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-ssophb6qxvzx-1781595049.pdf",
  },
  {
    id: "cert-pdf-2",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-zqjg8pyak7ot-1781596090.pdf",
  },
  {
    id: "cert-pdf-3",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-jjsh5s5ht2rz-1781596406.pdf",
  },
  {
    id: "cert-pdf-4",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-jxmaawtdbdd3-1781596495.pdf",
  },
  {
    id: "cert-pdf-5",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-wtvau9f445ah-1781596568.pdf",
  },
  {
    id: "cert-pdf-6",
    description: "Certificate of Completion",
    pdfUrl: "/pdf/certificate-n9t3tuziumj5-1781596780.pdf",
  },
];

const PdfThumbnail = ({ description }: { description: string }) => (
  <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
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
    <span className="text-[10px] uppercase tracking-wider text-primary/80">
      Click to preview
    </span>
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Slider {...settings}>
              {listAwards?.map((award, index) => (
                <div key={`award-${award.id}`} className="p-4">
                  <motion.div
                    className="w-full cursor-pointer"
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onClick={() => openPreview(award)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {award.image ? (
                      <Image
                        className="rounded-lg"
                        src={award.image}
                        placeholder="blur"
                        blurDataURL={blurImgBase64}
                        alt={award.description}
                      />
                    ) : (
                      <PdfThumbnail description={award.description} />
                    )}
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
          <div className="mt-4 flex justify-end">
            <div className="card-info relative inline-block scale-75 origin-right py-1 px-3">
              <h3 className="relative !text-3xl">{listAwards.length}</h3>
              <p className="relative !text-xs !pl-8 before:!w-5 before:!top-[10px]">Rewards & Certificates</p>
            </div>
          </div>
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

