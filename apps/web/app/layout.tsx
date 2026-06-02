export default function RootLayout({
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
              }

              body {
                margin: 0;
                background: #020617;
              }

              a, button {
                transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
              }

              a:hover, button:hover {
                transform: translateY(-1px);
              }

              @media (max-width: 900px) {
                main {
                  padding: 24px !important;
                }

                h1 {
                  font-size: 42px !important;
                  line-height: 1.05 !important;
                }

                h2 {
                  font-size: 28px !important;
                }

                section {
                  max-width: 100% !important;
                }

                article {
                  max-width: 100% !important;
                }
              }

              @media (max-width: 640px) {
                main {
                  padding: 18px !important;
                }

                h1 {
                  font-size: 34px !important;
                }

                h2 {
                  font-size: 24px !important;
                }

                p {
                  font-size: 15px !important;
                }

                a, button {
                  width: 100%;
                  text-align: center;
                  justify-content: center;
                }

                input,
                textarea,
                select {
                  font-size: 16px !important;
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}