import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPageLayout from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade — Office Today",
  description:
    "Saiba como a Office Today coleta, utiliza e protege os seus dados pessoais.",
  alternates: {
    canonical: "https://www.office-today.com/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <LegalPageLayout
          title="Política de Privacidade"
          lastUpdated="março de 2025"
        >
          <p>
            A <strong>Office Today</strong> (Sax Group, representante do Grupo Office Total S.A.)
            valoriza a privacidade dos seus usuários e está comprometida com a proteção dos dados
            pessoais coletados por meio deste website. Esta Política de Privacidade descreve que
            informações coletamos, como as utilizamos e com quem podemos compartilhá-las.
          </p>

          <hr />

          <h2>1. Dados coletados</h2>
          <p>
            Coletamos informações apenas quando você as fornece voluntariamente, principalmente
            por meio do formulário de contato disponível neste website. Os dados coletados podem
            incluir:
          </p>
          <ul>
            <li>Nome completo</li>
            <li>Nome da empresa</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone (opcional)</li>
            <li>Serviço de interesse selecionado</li>
            <li>Conteúdo da mensagem enviada</li>
          </ul>
          <p>
            Também podemos coletar informações técnicas de forma automática por meio de ferramentas
            de análise e segurança, como o endereço IP e dados de navegação, estritamente para fins
            operacionais e de proteção contra spam.
          </p>

          <h2>2. Finalidade do tratamento</h2>
          <p>Os dados coletados são utilizados exclusivamente para:</p>
          <ul>
            <li>Responder às solicitações de contato e orçamento enviadas por meio do formulário;</li>
            <li>Identificar e entrar em contato com potenciais clientes interessados nos serviços da Office Today;</li>
            <li>Prevenir envios automatizados abusivos (spam) por meio de verificação de segurança.</li>
          </ul>
          <p>
            Não utilizamos os dados coletados para fins de marketing não solicitado, perfis
            comportamentais ou publicidade de terceiros.
          </p>

          <h2>3. Base legal</h2>
          <p>
            O tratamento dos dados pessoais fornecidos por meio do formulário de contato tem como
            base o <strong>legítimo interesse</strong> da Office Today em responder a solicitações
            comerciais recebidas, bem como o <strong>consentimento tácito</strong> do titular ao
            preencher e enviar o formulário de forma voluntária.
          </p>

          <h2>4. Compartilhamento de dados</h2>
          <p>
            Os dados pessoais não são vendidos, alugados ou cedidos a terceiros para fins
            comerciais. Podemos compartilhá-los apenas com:
          </p>
          <ul>
            <li>
              <strong>Resend (resend.com):</strong> serviço utilizado para o envio de e-mails
              transacionais gerados pelo formulário de contato. Os dados são transmitidos de
              forma segura e utilizados exclusivamente para a entrega do e-mail.
            </li>
            <li>
              <strong>Google reCAPTCHA:</strong> serviço do Google utilizado para proteger o
              formulário contra envios automatizados. Ao utilizar este site, a{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>{" "}
              e os{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termos de Serviço
              </a>{" "}
              do Google se aplicam.
            </li>
          </ul>

          <h2>5. Retenção de dados</h2>
          <p>
            Os dados fornecidos por meio do formulário de contato são retidos pelo período
            necessário ao atendimento da solicitação e por no máximo 12 meses após o último
            contato, salvo obrigação legal em sentido contrário.
          </p>

          <h2>6. Cookies e rastreamento</h2>
          <p>
            Este website pode utilizar cookies técnicos essenciais para o funcionamento correto das
            páginas. Não utilizamos cookies de rastreamento comportamental ou publicidade
            direcionada de terceiros.
          </p>
          <p>
            O Google reCAPTCHA pode definir cookies próprios em seu navegador para fins de
            verificação de segurança. Consulte a política do Google para mais detalhes.
          </p>

          <h2>7. Direitos do titular</h2>
          <p>
            Você tem o direito de solicitar, a qualquer momento:
          </p>
          <ul>
            <li>Confirmação sobre o tratamento dos seus dados;</li>
            <li>Acesso às informações que mantemos sobre você;</li>
            <li>Correção de dados incompletos ou incorretos;</li>
            <li>Eliminação dos dados fornecidos, quando aplicável;</li>
            <li>Revogação de consentimento para tratamentos baseados nessa base legal.</li>
          </ul>
          <p>
            Para exercer esses direitos, entre em contato pelo e-mail:{" "}
            <a href="mailto:contact@office-today.com">contact@office-today.com</a>.
          </p>

          <h2>8. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
            contra acesso não autorizado, perda ou divulgação indevida. A transmissão de dados
            neste website é realizada por conexão segura (HTTPS/TLS).
          </p>

          <h2>9. Links externos</h2>
          <p>
            Este website pode conter links para sites de terceiros. A Office Today não se
            responsabiliza pelas práticas de privacidade desses sites e recomenda a leitura das
            respectivas políticas antes de fornecer qualquer dado pessoal.
          </p>

          <h2>10. Alterações a esta política</h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir
            mudanças nas nossas práticas ou na legislação aplicável. A data de última atualização
            é sempre indicada no início deste documento. O uso continuado do website após
            alterações constitui aceitação da versão revisada.
          </p>

          <h2>11. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus
            dados, entre em contato:
          </p>
          <ul>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:contact@office-today.com">contact@office-today.com</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://www.office-today.com">www.office-today.com</a>
            </li>
          </ul>
        </LegalPageLayout>
      </main>
      <Footer />
    </>
  );
}
