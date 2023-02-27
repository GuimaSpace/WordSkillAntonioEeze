import Image from 'next/image'


export default function athenagluev3() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Athena Glue V3:</span>
                <span>
                <h2 id="-objetivo-"><strong>OBJETIVO</strong></h2>
                <p>Você é um engenheiro de computação em nuvem na empresa Cloud Tech. Ficou sob sua responsabilidade a importação de uma base de dados de um cliente novo. A importação irá demorar alguns dias, mas o cliente precisa saber algumas informações relacionadas a itens e pedidos. O que se tem são alguns dados em formato CSV extraídos da base anterior. De forma a resolver a necessidade do cliente rapidamente, você deverá colocar estes arquivos CSV em um Bucket S3, utilizar o AWS Glue para descoberta e preparação dos dados e com o AWS Athena, executar consultas fornecendo as informações de que o cliente precisa.</p>
                <h2 id="etapas">ETAPAS</h2>
                <h2 id="1-crie-um-bucket-s3-na-sua-conta-da-aws-">1 - Crie um bucket S3 na sua conta da AWS.</h2>
                <p>Para iniciar esta prova devemos criar um bucket S3 <img src="https://i.imgur.com/HJ2byy5.png" width={50} alt="" /> </p>
                <p>1.1 - Vamos iniciar pesquisa &quot;S3&quot; na barra de pesquisa do console manager, então selecione o S3.
                <img src="https://i.imgur.com/2OZwEtG.png" alt="" />

                </p>
                <p>1.2 - Logo em seguida, no menu lateral devemos procurar por &quot;Buckets&quot;, clique na opção
                <img src="https://i.imgur.com/7VuYcsg.png" alt="" />
                <img src="https://i.imgur.com/COko0jp.png" alt="" />
                </p>
                <p>1.3 - Após clicar na opção &quot;Create Bucket&quot; uma tela para configurarmos nosso bucket. Para esta prova precisaremos apenas dar um nome e tag, no fim clique em create bucket.
                ![[Pasted image 20230223175924.png]]
                <img src="https://i.imgur.com/wCW9hxc.png" alt="" />
                <img src="https://i.imgur.com/r8O96yw.png" alt="" />
                </p>
                <h2 id="2-crie-os-c-digos-a-baixo">2 - Crie os códigos a baixo</h2>
                <p>customer.csv
                <img src="https://i.imgur.com/LJnT0lg.png" alt="" />
                </p>
                <p>orders.csv
                <img src="https://i.imgur.com/prwUVKo.png" alt="" />
                </p>
                <p>Order_items.csv
                <img src="https://i.imgur.com/ilyNbMn.png" alt="" />
                </p>
                <h2 id="3-fa-a-o-upload-dos-seguintes-arquivos-csv-no-bucket-s3-otimizando-custos-com-baixa-disponibilidade-e-na-estrutura-correta">3 - Faça o upload dos seguintes arquivos CSV no bucket S3, otimizando custos, com baixa disponibilidade e na estrutura correta</h2>
                <p>3.1 - Selecione o bucket.
                <img src="https://i.imgur.com/sr2yTdH.png" alt="" />
                </p>
                <p>3.2 - No bucket, clique &quot;Add folder&quot;.
                <img src="https://i.imgur.com/obpBQ5U.png" alt="" />
                </p>
                <p>3.3 - Crie 3 pastas &quot;Customer.CSV&quot;, &quot;Order_items.CSV&quot;, &quot;orders.CSV&quot;.
                <img src="https://i.imgur.com/79Z36bS.png" alt="" />
                </p>
                <p>3.4 - Adicione os cada arquivo em sua respectiva pastas.
                <img src="https://i.imgur.com/SwykbMA.png" alt="" />
                </p>
                <h2 id="4-no-aws-glue-crie-um-banco-de-dados-denominado-ecommerce-">4 - No AWS Glue, crie um banco de dados denominado “ecommerce”</h2>
                <p>4.1 - Localize a opção banco de dados no painel lateral.
                <img src="https://i.imgur.com/BqNlQm5.png" alt="" />
                </p>
                <p>4.2 - Adicione um banco de dados
                <img src="https://i.imgur.com/uvaqu9p.png" alt="" />
                </p>
                <p>4.3 - Insira nome e descrição em seu banco de dados, depois crie o banco de dados.
                <img src="https://i.imgur.com/W3vy7Va.png" alt="" />
                </p>
                <h2 id="5-crie-o-s-classifier-s-necess-rio-s-para-reconhecer-os-formatos-dos-arquivos-a-serem-importados-csvs-">5 - Crie o(s) Classifier(s) necessário(s) para reconhecer os formatos dos arquivos a serem importados (CSVs).</h2>
                <p>5.1 - Localize o Classifier dentro do menu da ferramenta Glue.
                <img src="https://i.imgur.com/nh2vsHB.png" alt="" />
                </p>
                <p>5.2 - Crie um novo classifier
                <img src="https://i.imgur.com/cw2hElq.png" alt="" />
                </p>
                <p>5.3 - Configurando Classifier
                <img src="https://i.imgur.com/K2qze4p.png" alt="" />
                </p>
                <h2 id="6-crie-o-s-crawler-s-sob-demanda-para-processar-o-bucket-criado-no-passo-1-e-gerar-as-tabelas-customers-orders-order_items-para-o-aws-athena">6 - Crie o(s) Crawler(s), sob demanda, para processar o bucket criado no passo 1 e gerar as tabelas (customers, orders, order_items) para o AWS Athena</h2>
                <p>6.1 - Localize os Crawlers
                <img src="https://i.imgur.com/VKVk35w.png" alt="" />
                </p>
                <p>6.2 - Crie um novo Crawler
                <img src="https://i.imgur.com/juA1xcj.png" alt="" />
                </p>
                <p>6.3 - Eu apliquei as seguintes configurações
                <img src="https://i.imgur.com/LdP0IhG.png" alt="" />
                **O nome dado é indiferente, assim como descrição e tag
                </p>
                <p>
                <img src="https://i.imgur.com/4J1RKRE.png" alt="" />
                **Os Data sources precisa ser o S3 criado no passo 1
                </p>
                <p>
                <img src="https://i.imgur.com/u2WHby7.png" alt="" />
                **A IAM role precisa ser o LabRole devido as permissões associadas a ela
                </p>
                <p>
                <img src="https://i.imgur.com/A2MucAD.png" alt="" />    
                **No quarto passo você só precisa ter como o &quot;Database&quot; o banco criado no passo 4
                </p>
                <h2 id="7-revise-as-informa-es-configuradas">7 - Revise as informações configuradas</h2>
                <h2 id="8-execute-os-crawlers-cheque-os-dados-importados-e-veja-se-est-o-de-acordo-com-os-arquivos-csvs-">8 - Execute os Crawlers, cheque os dados importados e veja se estão de acordo com os arquivos CSVs.</h2>
                <p>8.1 - Clique em &quot;Run crawler&quot; para criar as tables dentro do banco
                ![[Run_Crawlers.png]]
                <img src="https://i.imgur.com/UcbHs7R.png" alt="" />    
                </p>
                <h2 id="9-agora-utilize-o-aws-athena-para-gerar-consultas-sql-para-responder-s-perguntas-abaixo-salvar-no-athena-as-consultas-individualmente-uma-a-uma-e-gerar-prints-de-cada-consulta-sql-realizada-e-seus-resultados-em-uma-pasta-no-desktop-denominada-athena-prints-nomeando-cada-imagem-como-segue-">9 - Agora, utilize o AWS Athena para gerar consultas SQL para responder às perguntas abaixo. Salvar no Athena as consultas, individualmente uma a uma, e gerar prints de cada consulta (SQL) realizada e seus resultados, em uma pasta no desktop denominada “Athena Prints”, nomeando cada imagem como segue:</h2>
                <p>9.1 -  Acesse o Athena, não esqueça de configurar o S3 que receberá os resultados das consultas.
                <img src="https://i.imgur.com/04baeB4.png" alt="" />   
                <img src="https://i.imgur.com/SSKtHfD.png" alt="" />  
                </p>
                <p>A: Qual é o número total de pedidos?
                Resposta:
                <img src="https://i.imgur.com/BoAwEpF.jpg" alt="" />  
                </p>
                <p>B: Qual é o valor total de pedidos?
                Resposta:
                <img src="https://i.imgur.com/HIKoArL.jpg" alt="" />  
                </p>
                <p>C: Qual o nome dos clientes que fizeram mais de um pedido?
                Resposta:
                <img src="https://i.imgur.com/S43ct4H.jpg" alt="" />  
                </p>
                <p>D: Qual é o valor médio dos pedidos feitos por cada cliente (Nome do cliente e valor médio de cada um)?
                Resposta:
                <img src="https://i.imgur.com/oI7eLxN.jpg" alt="" />  
                </p>
                <p>E: Quais são os itens mais vendidos e quantas unidades de cada um foram vendidas (nome do produto e quantidades vendidas, exibindo os mais vendidos primeiro)?
                Resposta: 
                <img src="https://i.imgur.com/niEX7PE.png" alt="" />  
                </p>                     
                </span>
            </div>
        </div>
    )
}