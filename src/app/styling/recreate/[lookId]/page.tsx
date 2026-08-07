type Props = {
  params: Promise<{
    lookId: string;
  }>;
};

export default async function RecreateLookPage({
  params,
}: Props) {
  const { lookId } = await params;

  return (
    <main className="min-h-screen py-40">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-sm uppercase tracking-[0.3em]">
          Recreate The Look
        </p>

        <h1 className="font-(--font-playfair) text-6xl">
          {lookId}
        </h1>

      </div>
    </main>
  );
}
