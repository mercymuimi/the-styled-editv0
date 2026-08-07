"use client";

import { LogOut, Trash2 } from "lucide-react";

export default function DangerZone() {
  const handleLogout = () => {
    console.log("Logout will be connected to Supabase.");
  };

  const handleDeleteAccount = () => {
    console.log("Account deletion will be connected later.");
  };

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-red-200 bg-red-50/40 p-6 sm:p-8">

          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-red-600">
              Account
            </p>

            <h2 className="mt-2 font-(--font-playfair) text-2xl">
              Danger Zone
            </h2>

            <p className="mt-2 text-sm text-red-700/70">
              Actions here can affect your account and cannot always
              be undone.
            </p>
          </div>

          <div className="space-y-4">

            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-between rounded-2xl border border-red-200 bg-white/60 p-4 text-left transition hover:bg-white"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-red-100 p-3 text-red-600">
                  <LogOut size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-red-700">
                    Log Out
                  </p>

                  <p className="mt-1 text-xs text-red-700/60">
                    Sign out of your TSE account.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={handleDeleteAccount}
              className="flex w-full items-center justify-between rounded-2xl border border-red-200 bg-white/60 p-4 text-left transition hover:bg-white"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-red-100 p-3 text-red-600">
                  <Trash2 size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-red-700">
                    Delete Account
                  </p>

                  <p className="mt-1 text-xs text-red-700/60">
                    Permanently remove your TSE account and data.
                  </p>
                </div>
              </div>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
