export default function Sidebar(){
    const userPrincipal = {
        account: 'catanacomics',
        image: "assets/img/catanacomics.svg",
        name: 'Catana'
    }

    return(
    <div class="sidebar">
        <User name= {userPrincipal.name} account= {userPrincipal.account} image={userPrincipal.image}/>
        <Sugestion />
        <Credits />
    </div>
    )
}

function User(props){
    return(       
    <div class="usuario">
        <img src={props.image} />
        <div class="texto">
            <strong>{props.account}</strong>
            {props.name}
        </div>
    </div>
    )
}

function Sugestion(){

    const sugest = [{
        image: "assets/img/bad.vibes.memes.svg",
        name: 'bad.vibes.memes',
        info: 'Segue você'
    }, {
        image: "assets/img/chibirdart.svg",
        name: 'chibirdart',
        info: 'Segue você'
    }, {
        image: "assets/img/razoesparaacreditar.svg",
        name: 'razoesparaacreditar',
        info: 'Novo no Instagram'
    }, {
        image: "assets/img/adorable_animals.svg",
        name: 'adorable_animals',
        info: 'Segue você'
    }, {
        image: "assets/img/smallcutecats.svg",
        name: 'smallcutecats',
        info: 'Segue você'
    }]

    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugest.map(Arguments => <SugestionUser name = {Arguments.name}  info = {Arguments.info} image = {Arguments.image}/>)}
        </div>
    )

}

function SugestionUser(props){   
    return (
        <div class="sugestao">
        <div class="usuario">
        <img src={props.image} />
        <div class="texto">
            <div class="nome">{props.name}</div>
            <div class="razao">{props.info}</div>
        </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    )
}

function Credits(){
    return(
        <div>
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
