export default function Footer(){
    const listIonIcon = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

    return (
        <div class="fundo-mobile">
            {listIonIcon.map((icon) =>  <ion-icon name={icon}></ion-icon>)}
      </div>
    )
}
