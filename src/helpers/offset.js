export default function offsetPosition(element) {
    let offsetLeft = 0,
        offsetTop = 0;
    do {
        offsetLeft += element.offsetLeft;
        offsetTop += element.offsetTop;
    } while (element = element.offsetParent);
    return [offsetLeft, offsetTop];
}
