import { expect, test } from "@playwright/test";

async function clearAppStorage(page: import("@playwright/test").Page) {
  await page.goto("/", {
    waitUntil: "domcontentloaded",
  });

  await page.evaluate(() => {
    window.localStorage.clear();
  });
}

test.beforeEach(async ({ page }) => {
  await clearAppStorage(page);
});

test("home carrega e possui navegação principal", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "networkidle",
  });

  await expect(page).toHaveTitle(/Suporte Tech/i);

  await expect(
    page.getByRole("heading", {
      name: /Aprenda tecnologia usando sua experiência em atendimento/i,
    })
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: /Ver dashboard/i,
    })
  ).toBeVisible();
});

test("dashboard permite salvar nome do aluno", async ({ page }) => {
  await page.goto("/dashboard", {
    waitUntil: "networkidle",
  });

  const nameInput = page.getByPlaceholder("Exemplo: Matheus Batista");

  await expect(nameInput).toBeVisible();
  await nameInput.fill("Usuário de Teste");

  const saveButton = page.getByRole("button", {
    name: /salvar nome|salvar/i,
  });

  await expect(saveButton.first()).toBeVisible();
  await saveButton.first().click();

  await expect
    .poll(async () => {
      return page.evaluate(() => {
        return window.localStorage.getItem(
          "suporte-tech-student-profile"
        );
      });
    })
    .toBe(JSON.stringify({ name: "Usuário de Teste" }));

  await page.reload({
    waitUntil: "networkidle",
  });

  const reloadedNameInput = page.getByPlaceholder(
    "Exemplo: Matheus Batista"
  );

  await expect(reloadedNameInput).toHaveValue("Usuário de Teste");
});

test("aula 1 exibe conteúdo, vídeo, quiz e PetroKoblaco", async ({
  page,
}) => {
  await page.goto("/aulas/dia-1", {
    waitUntil: "networkidle",
  });

  await expect(
    page.getByText(/Boas-vindas e avaliação inicial/i)
  ).toBeVisible();

  await expect(
    page.getByText(/Vídeo\/playlist de apoio/i)
  ).toBeVisible();

  await expect(
    page.getByText(/Assistente PetroKoblaco IA/i)
  ).toBeVisible();

  await expect(
    page.getByRole("button", {
      name: /Pedir ajuda ao PetroKoblaco/i,
    })
  ).toBeVisible();

  await expect(page.getByText(/Quiz rápido/i)).toBeVisible();
});

test("PetroKoblaco responde usando IA ou fallback local", async ({
  page,
}) => {
  await page.goto("/aulas/dia-1", {
    waitUntil: "networkidle",
  });

  const textarea = page.getByRole("textbox").last();

  await textarea.fill(
    "Essa trilha pode me ajudar a conseguir emprego?"
  );

  await page
    .getByRole("button", {
      name: /Pedir ajuda ao PetroKoblaco/i,
    })
    .click();

  await expect(
    page.getByText(/Resposta do PetroKoblaco/i)
  ).toBeVisible();

  await expect(
    page
      .getByText(/trilha|vaga|mercado|portfólio|tecnologia/i)
      .last()
  ).toBeVisible();
});

test("aula inexistente mostra mensagem amigável", async ({ page }) => {
  await page.goto("/aulas/dia-99", {
    waitUntil: "networkidle",
  });

  await expect(
    page.getByText(/Aula não encontrada/i)
  ).toBeVisible();
});

test("certificado em andamento carrega com dados do aluno", async ({
  page,
}) => {
  await page.goto("/dashboard", {
    waitUntil: "networkidle",
  });

  const nameInput = page.getByPlaceholder(
    "Exemplo: Matheus Batista"
  );

  await expect(nameInput).toBeVisible();
  await nameInput.fill("Usuário Certificado");

  const saveButton = page.getByRole("button", {
    name: /salvar nome|salvar/i,
  });

  await expect(saveButton.first()).toBeVisible();
  await saveButton.first().click();

  await expect
    .poll(async () => {
      return page.evaluate(() => {
        return window.localStorage.getItem(
          "suporte-tech-student-profile"
        );
      });
    })
    .toBe(JSON.stringify({ name: "Usuário Certificado" }));

  await page.goto("/certificado", {
    waitUntil: "networkidle",
  });

  await expect(
    page.getByText(/Usuário Certificado/i).first()
  ).toBeVisible();

  await expect(
    page.getByText(/Dados do certificado/i)
  ).toBeVisible();

  await expect(
    page.getByText(/Em andamento/i).first()
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: /Continue para liberar/i,
    })
  ).toBeVisible();

  await expect(
    page.getByText(/0 de 30 aulas concluídas/i)
  ).toBeVisible();
});

test("não existe rolagem horizontal", async ({ page }) => {
  await page.goto("/aulas/dia-1", {
    waitUntil: "networkidle",
  });

  const hasHorizontalOverflow = await page.evaluate(() => {
    return (
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth
    );
  });

  expect(hasHorizontalOverflow).toBe(false);
});

test("links internos principais não retornam erro", async ({ page }) => {
  const routes = [
    "/",
    "/dashboard",
    "/aulas/dia-1",
    "/certificado",
  ];

  for (const route of routes) {
    const response = await page.goto(route, {
      waitUntil: "networkidle",
    });

    expect(response?.status()).toBeLessThan(400);
  }
});