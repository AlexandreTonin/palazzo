'use client';

import { HeroSection } from "@/components/layout/HeroSection";
import { PropertiesGrid } from "@/components/layout/PropertiesGrid";
import { useProperties } from "@/hooks/useProperties";

export default function Home() {
  const { data, isLoading, error } = useProperties();

  return (
    <>
      <HeroSection />

      <PropertiesGrid
        properties={data}
        title="Propriedades em Destaque"
      />
    </>
  );
}
