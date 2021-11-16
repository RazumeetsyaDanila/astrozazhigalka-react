import $ from 'jquery'

export default function getCheckedRadio(radio_group) {
    //Обходим весь список радиокнопок
    for (var i = 0; i < radio_group.length; i++) {
        var button = radio_group[i];
        //Нашли отмеченную
        if (button.checked) {
            return button;
        }
    }
    //Ни одна не отмечена
    return undefined;
}

export const copy_in_buffer = (el) => {
    let $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
}


