export default function Left(){

    return(
    <div class="esquerda">
        <ContainerStories />
        <ContainerPosts />
    </div>
    )
}


function ContainerStories(){
    const story = [
    {
    image: "assets/img/barked.svg",
    user: '9gag'
    }, {
    image: "assets/img/meowed.svg",
    user: 'meowed'
    }, {
    image: "assets/img/barked.svg",
    user: 'barked'
    }, {
    image: "assets/img/nathanwpylestrangeplanet.svg" ,
    user: 'nathanwpylestrangeplanet'
    }, {
    image: "assets/img/wawawicomics.svg" ,
    user: 'wawawicomics'
    }, {
    image: "assets/img/respondeai.svg" ,
    user: 'respondeai'
    }, {
    image: "assets/img/filomoderna.svg"  ,
    user: 'filomoderna'
    }, {
    image: "assets/img/memeriagourmet.svg"  ,
    user: 'memeriagourmet'
    } ]

    return(
    <div class="stories">
      {story.map((storie) => <Stories user = {storie.user} image = {storie.image}/>)}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
    )
}

function Stories(props){
  return(
    <div class="story">
      <div class="imagem">
        <img src={props.image} />
      </div>
      <div class="usuario">
        {props.user}
      </div>
    </div>
  )
}

function ContainerPosts(){
  const ListPost = [
    {
    Person: 'meowed',
    ImagePerson: "assets/img/meowed.svg",
    Picture: "assets/img/gato-telefone.svg",
    PersonLike:'respondeai',
    NumLikes: 13.000,
    ImageLike:"assets/img/respondeai.svg"
    },
    { 
    Person: 'barked',
    ImagePerson: "assets/img/barked.svg",
    Picture: "assets/img/dog.svg",
    PersonLike:'adorable_animals',
    NumLikes: 101.523,
    ImageLike:"assets/img/adorable_animals.svg"
    }
  ]
  const Publi = ListPost.map((publi) =>     
  <div class="post">
    <PostTop Person = {publi.Person} ImagePerson = {publi.ImagePerson} />
    <Content Picture = {publi.Picture}/>
    <PostBot NumLikes = {publi.NumLikes} ImageLike = {publi.ImageLike} PersonLike = {publi.PersonLike}/>
  </div>)

  return (
    <div>
      {Publi}
    </div>
  )
}

function Content(props){
  return(
  <div class="conteudo">
    <img src= {props.Picture}/>
  </div>
  )
}

function PostTop(props){
  return(
    <div class="topo">
      <div class="usuario">
        <img src={props.ImagePerson} />
        {props.Person}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
  </div>
  )
}

function PostBot(props){
  const actions = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]

  return(
    <div class="fundo">
      <div class="acoes">
        <div>
          {actions.map((action) => <ion-icon name={action}></ion-icon>)}
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.ImageLike}  />
        <div class="texto">
          Curtido por <strong>{props.PersonLike} </strong> e <strong>outras {props.NumLikes} pessoas</strong>
        </div>
      </div>
    </div>
  )
}
