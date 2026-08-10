import { notFound } from "next/navigation";

import EditRelated from "@/components/edit/EditRelated";
import EditHero from "@/components/edit/EditHero";
import EditStory from "@/components/edit/EditStory";
import EditLooks from "@/components/edit/EditLooks";
import EditStylingCTA from "@/components/edit/EditStylingCTA";

import { edits } from "@/data/edits";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EditPage({ params }: Props) {
  const { slug } = await params;

  const edit = edits.find((item) => item.slug === slug);

  if (!edit) {
    notFound();
  }

  return (
    <>
      <EditHero edit={edit} />

      <EditStory edit={edit} />

      <EditLooks edit={edit} />

      <EditStylingCTA />

      <EditRelated currentSlug={edit.slug} />
    </>
  );
}