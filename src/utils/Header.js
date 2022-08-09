function Header(props) {
    const {conteudo, click} = props;

    return (
        <header onClick={click}>{conteudo}</header>
    );
}

export default Header;
