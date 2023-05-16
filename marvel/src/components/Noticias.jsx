import BasicExample from "./Noticia";

export const Noticias = ()=>  {
  return (
    <>
    <div className="noticias">
    <BasicExample titulo={"Card Title1"} foto={"https://e0.pxfuel.com/wallpapers/787/153/desktop-wallpaper-iron-man-death.jpg"} descripcion={"Some1 quick example text to build on the card title and make up the bulk of the card's content."}/>
    <BasicExample titulo={"Card Title2"} foto={"https://e0.pxfuel.com/wallpapers/787/153/desktop-wallpaper-iron-man-death.jpg"} descripcion={"Some2 quick example text to build on the card title and make up the bulk of the card's content."}/>
    <BasicExample titulo={"Card Title3"} foto={"https://e0.pxfuel.com/wallpapers/787/153/desktop-wallpaper-iron-man-death.jpg"} descripcion={"Some3 quick example text to build on the card title and make up the bulk of the card's content."}/>
    </div>
    
    </>
  );
}

