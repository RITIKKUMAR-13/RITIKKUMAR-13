const text = `

$ neofetch

Name        : Ritik Kumar
Username    : RITIKKUMAR-13
College     : IEC College of Engineering & Technology
Location    : Greater Noida
Languages   : C++, Java, Python
Learning    : AI/ML, Web Development
Editor      : VS Code
GitHub      : github.com/RITIKKUMAR-13

Loading GitHub profile...

`;

const terminal = document.querySelector("pre");

terminal.textContent = "";

let i = 0;

function type() {
    if (i < text.length) {
        terminal.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30);
    }
}

window.onload = type;
