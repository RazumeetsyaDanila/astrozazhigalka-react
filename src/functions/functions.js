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