function ReversePyramid(rows) {
    for (let i = 0; i < rows; i++) {
      let str = "";
      for (let j = 0; j < i; j++) {
        str += "  ";
      }
      if (i === 1) {
        str += "*   *";
      } 
      
      else if (i === 2) {
        str += "  * *";
      }
      
      else {
        for (let k = 0; k < (rows - i); k++) {
          str += "* ";
        }
      }

      console.log(str.trim());
    }
}

ReversePyramid(4);
