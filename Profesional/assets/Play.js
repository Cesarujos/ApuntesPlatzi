
class MediaPlayer {
    constructor(config){
        this.video = config.archivo;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    initPlugins(){
        this.plugins.forEach((item) => {
            item.run(this);
        })
    }

    reproducir(){
        this.video.play()
    }

    pausar(){
        this.video.pause()
    }

    togglePlay(){
        if(this.video.paused){
            this.reproducir()
        }else{
            this.pausar()
        }
        }
    silenciar(){
        this.video.muted = true;
    }
    desenmudecer(){
        this.video.muted = false;
    }
    toggleMuted(){
        if(this.video.muted){
            this.desenmudecer()
        }else{
            this.silenciar()
        }
    }
}
export default MediaPlayer; //Para expotar datos de otro archivo JS

export const namecito = "Hola mundo, soy César"
