/**
 * CONTEÚDO EDITÁVEL - DASHBOARD
 *
 * Este arquivo pode ser editado por pessoas que sabem apenas HTML/CSS
 * Você pode modificar os textos, títulos e descrições aqui
 */

export const conteudoDashboard = {
  // Cabeçalho
  titulo: "Dashboard de Saúde",
  subtitulo:
    "Acompanhe o impacto do Health On Time na saúde e sustentabilidade",

  // Ações rápidas
  tituloAcoesRapidas: "Acesso Rápido",
  acoesRapidas: [
    {
      titulo: "Gerenciar Exames",
      descricao: "Adicione e acompanhe seus exames preventivos",
      path: "/exames",
    },
    {
      titulo: "Informações",
      descricao: "Acesse informações sobre saúde masculina",
      path: "/informacoes",
    },
    {
      titulo: "Atividades",
      descricao: "Registre suas atividades físicas",
      path: "/atividades",
    },
    {
      titulo: "Saúde Mental",
      descricao: "Espaço seguro para diálogo",
      path: "/saude-mental",
    },
  ],

  // KPIs (métricas principais)
  kpis: [
    {
      label: "Consultas Realizadas",
      subtitulo: "Total de atendimentos",
      trend: "+12% esta semana",
    },
    {
      label: "Usuários Ativos",
      subtitulo: "Usuários únicos",
      trend: "+8% este mês",
    },
    {
      label: "Medicamentos Descartados",
      subtitulo: "Descarte correto",
      trend: "+23% este mês",
    },
    {
      label: "Deslocamentos Evitados",
      subtitulo: "Impacto ambiental",
      trend: "+15% esta semana",
    },
  ],

  // Tabs (abas)
  tabs: {
    saude: "Saúde",
    sustentabilidade: "Sustentabilidade",
    prevencao: "Prevenção",
  },

  // Títulos dos gráficos
  graficos: {
    consultasSeveridade: "Consultas por Severidade",
    consultasUltimosDias: "Consultas nos Últimos 7 Dias",
  },

  // Próximos exames
  proximosExames: {
    titulo: "Próximos Exames",
    verTodos: "Ver Todos os Exames",
  },
};
