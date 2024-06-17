function checkSeason() {
    const today = new Date();
    const spring = new Date(today.getFullYear(), 3, 21);
    const summer = new Date(today.getFullYear(), 6, 21);
    const fall = new Date(today.getFullYear(), 9, 21);
    const winter = new Date(today.getFullYear(), 12, 21);

    if (today >= spring && today < summer) {
        return ("./images/lente-blad.svg")
    }
    else if (today >= summer && today < fall) {
        return ("./images/zomer-blad.svg")
    }
    else if (today >= fall && today < winter) {
        return ("./images/herfst-blad.svg")
    }
    else {
        return ("./images/winter-blad.svg")
    }
}

export const seasons = {
    checkSeason
  };