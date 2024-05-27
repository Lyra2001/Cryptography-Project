var particles = Particles.init({
    selector: ".background",
    color: ["#FF0099", "#00FFFF"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 765,
        options: {
          color: ["#FFF", "#FF0099", "#FF0099"],
          maxParticles: 75,
          connectParticles: false,
        },
      },
    ],
  });
  
  Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  