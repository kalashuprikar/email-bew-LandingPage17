import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingPage } from "./types";
import {
  HeaderBlockPreview,
  HeroBlockPreview,
  FeaturesBlockPreview,
  TestimonialsBlockPreview,
  AboutBlockPreview,
  ContactFormBlockPreview,
  FooterBlockPreview,
  SpacerBlockPreview,
  PricingBlockPreview,
  FaqBlockPreview,
  SignupBlockPreview,
  PricingFooterBlockPreview,
} from "./BlockPreviews";

interface LandingPagePreviewModeProps {
  page: LandingPage;
  onBack: () => void;
}

type PreviewDevice = "mobile" | "tablet" | "desktop";

export const LandingPagePreviewMode: React.FC<LandingPagePreviewModeProps> = ({
  page,
  onBack,
}) => {
  const [device, setDevice] = useState<PreviewDevice>("desktop");

  const getDeviceWidth = (): string => {
    switch (device) {
      case "mobile":
        return "375px";
      case "tablet":
        return "768px";
      default:
        return "100%";
    }
  };

  const renderBlock = (block: any) => {
    const blockProps = {
      block,
      isSelected: false,
      onSelect: () => {},
      onUpdate: () => {},
    };

    switch (block.type) {
      case "header":
        return <HeaderBlockPreview key={block.id} {...blockProps} />;
      case "hero":
        return <HeroBlockPreview key={block.id} {...blockProps} />;
      case "features":
        return <FeaturesBlockPreview key={block.id} {...blockProps} />;
      case "testimonials":
        return <TestimonialsBlockPreview key={block.id} {...blockProps} />;
      case "about":
        return <AboutBlockPreview key={block.id} {...blockProps} />;
      case "contact-form":
        return <ContactFormBlockPreview key={block.id} {...blockProps} />;
      case "footer":
        return <FooterBlockPreview key={block.id} {...blockProps} />;
      case "section-spacer":
        return <SpacerBlockPreview key={block.id} {...blockProps} />;
      case "pricing":
        return <PricingBlockPreview key={block.id} {...blockProps} />;
      case "faq":
        return <FaqBlockPreview key={block.id} {...blockProps} />;
      case "signup":
        return <SignupBlockPreview key={block.id} {...blockProps} />;
      case "pricing-footer":
        return <PricingFooterBlockPreview key={block.id} {...blockProps} />;
      default:
        return <div key={block.id}>Unknown block type</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900"
            onClick={onBack}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Editor
          </Button>
        </div>

        {/* Device Selector */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={device === "mobile" ? "default" : "outline"}
            onClick={() => setDevice("mobile")}
          >
            Mobile
          </Button>
          <Button
            size="sm"
            variant={device === "tablet" ? "default" : "outline"}
            onClick={() => setDevice("tablet")}
          >
            Tablet
          </Button>
          <Button
            size="sm"
            variant={device === "desktop" ? "default" : "outline"}
            onClick={() => setDevice("desktop")}
          >
            Desktop
          </Button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-y-auto bg-gray-900 flex items-start justify-center p-8">
        <div
          style={{
            width: getDeviceWidth(),
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col gap-0">
            {page.blocks.map((block) => renderBlock(block))}
          </div>
        </div>
      </div>
    </div>
  );
};
