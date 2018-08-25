const rules = [
    [/#{6}\s?([^\n]+)\n/g, '<h6>$1</h6>'],
    [/#{1}\s?([^\n]+)\n/g, '<h1>$1</h1>'],
    [/\*\*([^/*]+)\*\*/g, '<b>$1</b>']
];

export default {
    bind(el) {
        let html = el.textContent;
        rules.map(([rule, template]) => {
            html = html.replace(rule, template);
        })
        el.innerHTML = html;
    }
}