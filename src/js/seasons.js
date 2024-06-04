const today = new Date();
const spring = new Date(today.getFullYear(), 3, 21);
const summer = new Date(today.getFullYear(), 6, 21);
const fall = new Date(today.getFullYear(), 9, 21);
const winter = new Date(today.getFullYear(), 12, 21);

if (today >= spring && today < summer) {
    document.body.classList.add('summer');
}
else if (today >= summer && today < fall) {
    document.body.classList.add('summer');
}
else if (today >= fall && today < winter) {
    document.body.classList.add('fall');
}
else {
    document.body.classList.add('winter');
}

