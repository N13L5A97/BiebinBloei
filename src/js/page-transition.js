// let links = document.querySelectorAll('a');
// if (links) {
//     links.forEach((link) => {
//         link.onclick = (e) => {
//             let bodyElements = document.querySelectorAll('.transition-image');
//             e.preventDefault();
            
//             // Assign different animation classes to each element
//             bodyElements.forEach((element, index) => {
//                 if (index % 2 === 0) {
//                     element.classList.add('normal-fade-out');
//                 } else {
//                     element.classList.add('mirrored-fade-out');
//                 }
//             });

//             setTimeout(function() {
//                 let allFaded = true;

//                 // Check if all elements have their respective animation classes
//                 bodyElements.forEach((element) => {
//                     if (!element.classList.contains('normal-fade-out') && !element.classList.contains('mirrored-fade-out')) {
//                         allFaded = false;
//                     }
//                 });

//                 if (allFaded) {
//                     console.log('Navigating...');
//                     if (!e.srcElement.parentElement.href) {
//                         window.location = e.srcElement.href;
//                     } else {
//                         window.location = e.srcElement.parentElement.href;
//                     }
//                 } else {
//                     console.log('Whoops', e.srcElement);
//                 }
//             }, 1000);
//         }
//     });
// }

let links = document.querySelectorAll('a');
console.log(links)
if (links) {
    links.forEach((link) => {
        console.log(link)
        link.onclick = (e) => {
            let bodyElements = document.querySelector('.transition-image');
            e.preventDefault();
            bodyElements.classList.add('fade-out')

            setTimeout(function() {
                let allFaded = true;

                if (!bodyElements.classList.contains('fade-out')) {
                    allFaded = false;
                }

                if (allFaded) {
                    console.log('Navigating...');
                    if (!e.srcElement.parentElement.href) {
                        window.location = e.srcElement.href;
                    } else {
                        window.location = e.srcElement.parentElement.href;
                    }
                } else {
                    console.log('Whoops', e.srcElement);
                }
            }, 500);
        }
    });
}