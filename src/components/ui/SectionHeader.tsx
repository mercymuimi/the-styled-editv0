import React from "react";

interface SectionHeaderProps {
eyebrow: string;
title: string;
description?: string;
center?: boolean;
}

export default function SectionHeader({
eyebrow,
title,
description,
center = false,
}: SectionHeaderProps) {
return (
<div
className={
center
? "mx-auto max-w-3xl text-center"
: "max-w-2xl"
}
> <span className="text-sm tracking-[0.35em] text-(--primary)">
{eyebrow} </span>

```
  <h2 className="mt-5 font-(--font-playfair) text-5xl leading-none md:text-6xl">
    {title}
  </h2>

  {description ? (
    <p className="mt-7 text-lg leading-relaxed text-(--muted)">
      {description.trim()}
    </p>
  ) : null}
</div>
);
}
