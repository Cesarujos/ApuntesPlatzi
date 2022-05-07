class Autoplay{
    constructor (){

    }
    run(player){
        player.silenciar()
        player.reproducir();
    }
}
export default Autoplay;