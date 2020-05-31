function main(){
    const sections = document.getElementsByClassName("sections");
    const contents = document.getElementsByClassName("section-contents");
    const titles = document.getElementsByClassName("section-titles");

    for(let i = 0; i < sections.length; i++){
        const section = sections[i];
        const content = contents[i];
        const title = titles[i];

        content.style.paddingTop = Math.floor(title.clientHeight * 0.65) + "px";
        section.style.height = content.clientHeight + "px";
    }
}

main();