import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suporte Tech 30 Dias",
  description:
    "Web app educacional gamificado para transição de carreira em tecnologia.",
};export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        <style
          dangerouslySetInnerHTML={{
            __html: `
              * {
                box-sizing: border-box;
              }

              html {
                scroll-behavior: smooth;
                overflow-x: hidden;
              }

              body {
                margin: 0;
                min-width: 320px;
                overflow-x: hidden;
                background: #020617;
              }

              img,
              svg,
              video,
              iframe {
                max-width: 100%;
              }

              a,
              button,
              input,
              textarea,
              select {
                font: inherit;
              }

              a,
              button {
                transition:
                  transform 0.2s ease,
                  box-shadow 0.2s ease,
                  border-color 0.2s ease;
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
              }

              a:hover,
              button:hover {
                transform: translateY(-1px);
              }

              button:disabled {
                cursor: not-allowed;
              }

              input,
              textarea,
              select {
                max-width: 100%;
              }

              @media (max-width: 900px) {
                main {
                  padding: 24px !important;
                }

                main > section {
                  width: 100% !important;
                  max-width: 100% !important;
                }

                h1 {
                  font-size: 42px !important;
                  line-height: 1.06 !important;
                  overflow-wrap: anywhere;
                }

                h2 {
                  font-size: 28px !important;
                  line-height: 1.15 !important;
                  overflow-wrap: anywhere;
                }

                h3 {
                  line-height: 1.2 !important;
                  overflow-wrap: anywhere;
                }

                section,
                article,
                aside,
                header,
                nav,
                div {
                  max-width: 100%;
                }

                section[style*="grid-template-columns"],
                div[style*="grid-template-columns"] {
                  grid-template-columns: minmax(0, 1fr) !important;
                }

                header[style*="justify-content"] {
                  align-items: stretch !important;
                }

                nav {
                  width: 100%;
                }
              }

              @media (max-width: 640px) {
                main {
                  padding: 14px !important;
                }

                h1 {
                  font-size: 34px !important;
                  line-height: 1.08 !important;
                }

                h2 {
                  font-size: 24px !important;
                }

                h3 {
                  font-size: 20px !important;
                }

                p,
                li {
                  font-size: 15px !important;
                  line-height: 1.6 !important;
                }

                section,
                article,
                aside {
                  border-radius: 20px !important;
                }

                a,
                button {
                  width: 100%;
                  min-height: 48px;
                  display: flex !important;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  white-space: normal !important;
                }

                header > div,
                nav,
                aside {
                  width: 100%;
                }

                input,
                textarea,
                select {
                  width: 100% !important;
                  font-size: 16px !important;
                }

                textarea {
                  min-height: 150px !important;
                }

                ol,
                ul {
                  padding-left: 22px !important;
                }

                [style*="padding: 42px"],
                [style*="padding: 46px"],
                [style*="padding: 48px"] {
                  padding: 24px !important;
                }

                [style*="font-size: 56px"],
                [style*="font-size: 58px"],
                [style*="font-size: 64px"] {
                  font-size: 34px !important;
                }

                [style*="minmax(280px"],
                [style*="minmax(300px"] {
                  min-width: 0 !important;
                }
              }

              @media (max-width: 380px) {
                main {
                  padding: 10px !important;
                }

                h1 {
                  font-size: 30px !important;
                }

                [style*="padding: 24px"] {
                  padding: 18px !important;
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}