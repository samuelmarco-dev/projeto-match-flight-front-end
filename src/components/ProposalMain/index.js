import Paragraph from "../../utils/Paragraph";

function ProposalMain() {
    return (
        <>
            <img src="https://images.unsplash.com/photo-1610135241972-2086ecaf65d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="ImageMain" />
            <nav>
                <h1>São Paulo, 2022</h1>
                <div>
                    <strong>Companhia Aérea:</strong>
                    <Paragraph conteudo="Azul Linhas Aéreas (AD)" />
                    <Paragraph conteudo="Data: 09/11 a 14/12" />
                    <strong>Embarque:</strong>
                    <Paragraph conteudo="Aeroporto de Porto Alegre (POA)" />
                    <strong>Desembarque:</strong>
                    <Paragraph conteudo="Aeroporto de Congonhas (CNH)" />
                </div>
            </nav>
        </>
    );
}

export default ProposalMain;
