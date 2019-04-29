function OSCILLATOR(VCO, VCA){
    this.VCO                    = VCO;
    this.VCA                    = VCA;
    this.VCO.type               = 'sine';
    this.VCO.frequency.value    = 0;
    this.VCA.gain.value         = 0;
            
    this.VCO.connect(this.VCA);
    console.log("starting osc");
    this.VCO.start();
}
