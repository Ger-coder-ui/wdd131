let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections : [
        { section: "001", enrolled: 95, instructor: "Rorberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: " Sarah Gobble"}
    ]
};
function setCourseInformation(course) {
    document.querySelector("#couresName").innerHTML = `${course.code} - ${course.title}`;
}
function sectionTemplate(section) {
    return `<tr>
            <td>${section.sectionNumber}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(course) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}
