export type ProjectShot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Problema + solução, em 2-4 linhas. */
  description: string;
  /** O que mudou depois. Renderizado com a barra de destaque. */
  result: string;
  technologies: string[];
  repository?: string;
  site?: string;
  /** Imagem exibida enquanto o projeto está em repouso. */
  cover: ProjectShot;
  /** Prints extras percorridos no hover / ao entrar na viewport. */
  shots: ProjectShot[];
};

export const projects: Project[] = [
  {
    slug: "nordeste-360",
    title: "Nordeste 360",
    description:
      "Uma viagem pedagógica pelo Nordeste rende fotos soltas no celular e um relatório genérico no fim — o que o aluno realmente aprendeu se perde no caminho. Construí um app onde cada destino vira trilha formativa, com história, acervo cultural e diário de bordo, e o progresso do estudante vira nível e conquista. Funciona offline, porque em campo quase nunca tem sinal.",
    result:
      "a viagem deixa de ser passeio e vira registro formativo, com cada trilha cruzada às ODS da Agenda 2030 no relatório do professor.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "PWA"],
    site: "https://nordeste360.vercel.app/",
    cover: {
      src: "/assets/projetos/nordeste-360/cover.webp",
      alt: "Painel inicial do Nordeste 360 com a trilha em destaque Canudos e atalhos para viagens, cultura e desenvolvimento",
    },
    shots: [
      {
        src: "/assets/projetos/nordeste-360/01.webp",
        alt: "Catálogo de trilhas formativas e lugares históricos, filtrado por eixo temático",
      },
      {
        src: "/assets/projetos/nordeste-360/02.webp",
        alt: "Seção de cultura do Nordeste 360 exibindo o acervo musical, com a ficha do Axé",
      },
      {
        src: "/assets/projetos/nordeste-360/03.webp",
        alt: "Atalhos do painel para minhas viagens, trilhas formativas, cultura e diário de bordo",
      },
    ],
  },
  {
    slug: "lumicare",
    title: "LumiCare",
    description:
      "Aluno em crise de ansiedade não vai preencher formulário nem criar conta — e escola que coleta dado emocional esbarra em privacidade na hora seguinte. Construí um check-in de humor que leva menos de 30 segundos, sem e-mail, sem senha e sem rastreamento: tudo fica no navegador do próprio estudante. Junto vêm micro-intervenções rápidas (respiração 4-4-4, SOS Prova, pomodoro) e um histórico que revela o padrão emocional da semana.",
    result:
      "registro emocional em menos de 30 segundos com zero dado pessoal saindo do aparelho do aluno, alinhado às ODS 3 e 4.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repository: "https://github.com/eracksonsouza/lumiCare-front",
    site: "https://lumicare-app.vercel.app/",
    cover: {
      src: "/assets/projetos/lumicare/cover.webp",
      alt: "Página inicial do LumiCare com o convite para fazer um check-in emocional anônimo",
    },
    shots: [
      {
        src: "/assets/projetos/lumicare/01.webp",
        alt: "Ferramentas do LumiCare: SOS Prova, diário emocional, desafio do bem-estar e mural positivo",
      },
      {
        src: "/assets/projetos/lumicare/02.webp",
        alt: "Micro-intervenções do LumiCare, com respiração 4-4-4, meditação guiada e pomodoro",
      },
      {
        src: "/assets/projetos/lumicare/03.webp",
        alt: "Seção de privacidade: zero dados pessoais, armazenamento local e funcionamento offline",
      },
      {
        src: "/assets/projetos/lumicare/04.webp",
        alt: "Fluxo de check-in do LumiCare perguntando quando foi e qual emoção o estudante sentiu",
      },
    ],
  },
  {
    slug: "nei-market-analytics",
    title: "NEI Market Analytics",
    description:
      "Quem está começando a investir precisa abrir cinco abas para juntar cotação de cripto, ação e fundo imobiliário — e ainda sai sem entender o que leu. Centralizei tudo em um painel único alimentado por várias APIs financeiras em tempo real, com um chatbot em cima da API do Gemini que responde dúvidas em linguagem de iniciante, ao lado do dado.",
    result:
      "cotação de criptoativos, ações e FIIs em um só lugar, com explicação simples ao lado de cada número.",
    technologies: ["Vue.js", "TypeScript", "Express.js", "Tailwind CSS"],
    repository: "https://github.com/bush1D3v/NEI_market_analytics",
    site: "https://nei-market-analytics.com.br/",
    cover: {
      src: "/assets/projetos/nei-market-analytics/cover.webp",
      alt: "Painel do NEI Market Analytics com moedas e ações em alta, notícias do mercado e a tabela de criptoativos em tempo real",
    },
    shots: [
      {
        src: "/assets/projetos/nei-market-analytics/01.webp",
        alt: "Página de criptomoedas com preço, capitalização de mercado e volume de Bitcoin, Ethereum, Solana e outras",
      },
      {
        src: "/assets/projetos/nei-market-analytics/02.webp",
        alt: "Chatbot NEI Market AI aberto sobre o painel, pronto para responder dúvidas sobre o mercado",
      },
    ],
  },
];
