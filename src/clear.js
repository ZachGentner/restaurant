export default clear;

const content = document.getElementById('content');

function clear() {
    while(content.childElementCount > 0) {
        content.lastElementChild.remove();
    }
}