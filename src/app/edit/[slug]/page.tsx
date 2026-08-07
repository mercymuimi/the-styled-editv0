import { notFound } from "next/navigation";
import EditRelated from "@/components/edit/EditRelated";
import { edits } from "@/data/edits";

import EditNav from "@/components/edit/EditNav";
import EditHero from "@/components/edit/EditHero";
import EditStory from "@/components/edit/EditStory";
import EditLooks from "@/components/edit/EditLooks";
import EditBehind from "@/components/edit/EditBehind";
import EditStylingCTA from "@/components/edit/EditStylingCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EditPage({
  params,
}: Props) {
  const { slug } = await params;

  const edit = edits.find(
    (item) => item.slug === slug
  );

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