let head1 = document.getElementById('head')
head1.innerHTML = "<u>fdjg</u>"
head1.style.cssText = "color:red; background-color:yellow; padding:20 px"
let head2 = document.createElement('h2')
head2.textContent = "this is new tag created from js"
document.body.append(head2)