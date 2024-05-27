const root = document.documentElement;
const today = new Date();
const spring = new Date(today.getFullYear(), 2, 21);
const summer = new Date(today.getFullYear(), 5, 21);
const fall = new Date(today.getFullYear(), 8, 21);
const winter = new Date(today.getFullYear(), 11, 21);

if (today >= spring && today < summer) {
    document.body.classList.add('spring');
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

