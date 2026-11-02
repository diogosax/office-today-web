# Protocolo entre ferramentas

## Começar

Conferir remote, branch e estado do checkout. Ler as instruções existentes e esta base; anexar somente fontes relevantes à tarefa. Não depender do histórico de outro chat ou presumir acesso automático a repositórios irmãos.

ChatGPT e proprietário definem resultado/aceite; Codex ou agente Cursor implementa conforme a tarefa; Claude Desktop ou Ask revisa quando necessário. O responsável por uma alteração não precisa passar toda tarefa pelos três serviços. Respeitar regras específicas e decisões visuais existentes.

## Executar e encerrar

Uma tarefa delimitada por branch e PR; um escritor por checkout. Mudanças de contrato entre plataforma e site requerem referências em ambos os repositórios. No encerramento atualizar o estado e o repasse, com evidências verificáveis e próxima ação. Nunca registrar segredos, dados privados de clientes ou transcrições completas por rotina.

Escolher verificações proporcionais. Não executar scripts de deploy, migração, bootstrap de operadores, e-mail, ingestão ou billing durante uma simples leitura. Publicação da base em branch não autoriza merge ou deploy; respeitar o fluxo já documentado no projeto.

## Comandos existentes (inventário, não execução automática)

### `package.json`

- `dev`: `next dev`
- `build`: `next build`
- `start`: `next start`
- `lint`: `eslint`

## Teste de compreensão em uma conversa nova

Peça ao assistente, sem alterar arquivos: identifique o repositório e a marca; diferencie plataforma e site; liste capacidades observadas e pendências com fontes; explique como validar a próxima mudança; proponha um único próximo passo. Corrija os documentos se ele depender de adivinhação. Esse teste interativo ainda deve ser feito no Cursor; a validação documental não o substitui.
