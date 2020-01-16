function decimalPoint(next){
    if (next) { 
        if (next.includes(".")) {
            return {};
        }
    return { nextValue: next + "." };
  }
  return { nextValue: "0." };
}

export default decimalPoint