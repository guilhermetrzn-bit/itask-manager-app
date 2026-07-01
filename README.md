### Descrição do desafio

Sua missão é desenvolver o **iTask Manager**. O app deve permitir que o usuário gerencie suas atividades diárias com foco em organização e feedback visual.

### Funcionalidades Obrigatórias:

1. **Criação de Tarefas:**
    - Um campo para o **Título** da tarefa.
    - Um campo para a **Descrição** (opcional ou obrigatória).
    - Ao clicar no botão "Adicionar", uma nova instância da classe `Tarefa` deve ser criada.
2. **Exibição Inteligente:**
    - Cada tarefa no site deve mostrar automaticamente a **data e o horário exato** em que foi criada (use o `new Date()` dentro do constructor da classe).
3. **Controle de Status:**
    - Cada item da lista deve ter um `checkbox`.
    - **Feedback Visual:** Quando o checkbox for marcado, o estilo da tarefa deve mudar imediatamente. Você pode escolher entre: aplicar um risco no texto (`text-decoration: line-through`), mudar a cor de fundo do card ou diminuir a opacidade.
4. **Arquitetura POO:**
    - Você **deve** usar pelo menos uma classe (ex: `Tarefa`) para representar os dados.
    - A classe deve conter o método que gera o elemento HTML (o `renderizar()`) ou uma classe separada de `App` para gerenciar a lista de objetos.
