let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    tek() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
ladder.up().up().down().tek().down().tek();

 
