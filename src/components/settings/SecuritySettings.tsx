import { LockKeyhole, ChevronRight, ShieldCheck } from "lucide-react";

export default function SecuritySettings() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-(--primary)">
              Protection
            </p>

            <h2 className="mt-2 font-(--font-playfair) text-2xl">
              Security
            </h2>

            <p className="mt-2 text-sm text-(--muted)">
              Keep your TSE account secure.
            </p>
          </div>

          <div className="divide-y divide-(--border)">

            <button className="flex w-full items-center justify-between py-5 text-left">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-(--background) p-3">
                  <LockKeyhole size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Change Password
                  </p>

                  <p className="mt-1 text-xs text-(--muted)">
                    Update your account password.
                  </p>
                </div>
              </div>

              <ChevronRight size={18} className="text-(--muted)" />
            </button>

            <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-(--background) p-3">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Two-Factor Authentication
                  </p>

                  <p className="mt-1 text-xs text-(--muted)">
                    Add another layer of protection.
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-(--border) px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-(--muted)">
                Coming Soon
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
