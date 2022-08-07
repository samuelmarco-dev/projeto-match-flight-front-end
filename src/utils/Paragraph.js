function Paragraph(props) {
    const {classe, conteudo, click} = props;
    
    return ( 
        <p className={classe} onClick={click}>{conteudo}</p> 
    );
}

export default Paragraph;
