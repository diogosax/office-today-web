import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPageLayout from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Termos de Serviço — Office Today",
  description:
    "Leia os Termos de Serviço do website da Office Today. Condições de uso, propriedade intelectual e limitações de responsabilidade.",
  alternates: {
    canonical: "https://www.office-today.com/termos-de-servico",
  },
};

export default function TermosDeServicoPagem() {
  return (
    <>
      <Header />
      <main id="main-content">
        <LegalPageLayout
          title="Termos de Serviço"
          lastUpdated="março de 2025"
        >
          <p>
            Ao acessar e utilizar o website da <strong>Office Today</strong> (
            <a href="https://www.office-today.com">www.office-today.com</a>), você concorda com
            os presentes Termos de Serviço. Se não concordar com algum dos termos abaixo, por
            favor não utilize este website.
          </p>

          <hr />

          <h2>1. Natureza do website</h2>
          <p>
            Este website tem caráter exclusivamente informacional e comercial. Seu objetivo é
            apresentar os serviços de locação e gestão de hardware corporativo oferecidos pela
            Office Today e disponibilizar um canal de contato para solicitações de orçamento e
            informações.
          </p>
          <p>
            O preenchimento e envio do formulário de contato não constitui celebração de contrato,
            proposta vinculante ou qualquer tipo de compromisso comercial entre as partes. Qualquer
            acordo comercial depende de proposta formal emitida pela Office Today e aceita pelo
            cliente.
          </p>

          <h2>2. Uso aceitável</h2>
          <p>Ao utilizar este website, você concorda em não:</p>
          <ul>
            <li>Submeter informações falsas, enganosas ou fraudulentas pelo formulário de contato;</li>
            <li>Utilizar ferramentas automatizadas para enviar mensagens em massa (spam);</li>
            <li>Tentar acessar áreas restritas, sistemas ou dados não disponíveis publicamente;</li>
            <li>Reproduzir, distribuir ou modificar conteúdos deste website sem autorização expressa;</li>
            <li>Utilizar o website de forma que viole legislação aplicável ou direitos de terceiros.</li>
          </ul>

          <h2>3. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo disponível neste website — incluindo textos, logotipos, ilustrações,
            imagens, design e código — é de propriedade da Office Today ou de seus licenciantes,
            e está protegido pelas leis brasileiras e internacionais de propriedade intelectual.
          </p>
          <p>
            É vedada a reprodução, adaptação, distribuição ou uso comercial de qualquer elemento
            deste website sem autorização prévia e por escrito da Office Today.
          </p>

          <h2>4. Formulário de contato e dados pessoais</h2>
          <p>
            As informações fornecidas por meio do formulário de contato são utilizadas
            exclusivamente para responder à solicitação do usuário, conforme descrito em nossa{" "}
            <a href="/politica-de-privacidade">Política de Privacidade</a>. Ao enviar o
            formulário, você declara que as informações fornecidas são verdadeiras e que possui
            autorização para utilizá-las.
          </p>

          <h2>5. Serviços de terceiros</h2>
          <p>Este website utiliza os seguintes serviços de terceiros:</p>
          <ul>
            <li>
              <strong>Google reCAPTCHA:</strong> para proteção contra envios automatizados. O uso
              está sujeito à{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>{" "}
              e aos{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termos de Serviço
              </a>{" "}
              do Google.
            </li>
            <li>
              <strong>Resend:</strong> para entrega de e-mails transacionais gerados pelo
              formulário de contato.
            </li>
            <li>
              <strong>Google Fonts:</strong> para carregamento de fontes tipográficas utilizadas
              no design do website.
            </li>
            <li>
              <strong>Vercel:</strong> para hospedagem e entrega do website.
            </li>
          </ul>
          <p>
            A Office Today não se responsabiliza pelas políticas, disponibilidade ou desempenho
            desses serviços de terceiros.
          </p>

          <h2>6. Limitação de responsabilidade</h2>
          <p>
            As informações apresentadas neste website são fornecidas &quot;no estado em que se
            encontram&quot;, sem garantias de completude, precisão ou adequação a finalidade
            específica. A Office Today não se responsabiliza por:
          </p>
          <ul>
            <li>Decisões tomadas com base exclusivamente nas informações disponíveis neste website;</li>
            <li>Interrupções temporárias de acesso ao website por motivos técnicos;</li>
            <li>Danos indiretos, incidentais ou consequentes decorrentes do uso ou incapacidade de uso do website.</li>
          </ul>

          <h2>7. Links para outros sites</h2>
          <p>
            Este website pode conter links para websites de terceiros. Esses links são fornecidos
            por conveniência informacional. A Office Today não controla e não se responsabiliza
            pelo conteúdo, políticas de privacidade ou práticas de sites externos.
          </p>

          <h2>8. Alterações nos termos</h2>
          <p>
            Estes Termos de Serviço podem ser atualizados a qualquer momento, sem aviso prévio. A
            versão mais recente estará sempre disponível nesta página, com a data de última
            atualização indicada. O uso continuado do website após eventuais alterações constitui
            aceitação dos novos termos.
          </p>

          <h2>9. Lei aplicável</h2>
          <p>
            Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil.
            Quaisquer disputas decorrentes do uso deste website serão submetidas ao foro da
            comarca onde está estabelecida a sede da Office Today, salvo disposição legal em
            contrário.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para dúvidas, solicitações ou comunicações relacionadas a estes termos:
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
