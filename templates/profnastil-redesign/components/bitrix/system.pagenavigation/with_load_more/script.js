$(document).ready(function(){

    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.catalog__list ul.row.list-reset.last'),          //  Контейнер, в котором хранятся элементы
            url =  $('.load_more').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  Удаляем старую навигацию
                    $('section .section.mb-3.position-relative').remove();

                    var elements = $(data).find('li.col-6.col-lg-3.p-0'),  //  Ищем элементы
                        // pagination = $(data).find('.load_more');//  Ищем навигацию
                        pagination = $(data).find('section .section.mb-3.position-relative');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    // targetContainer.after(pagination); //  добавляем навигацию следом
                    pagination.insertAfter($('.section.mb-3.pt-3.pb-3.last')); //  добавляем навигацию следом

                }
            })
        }

    });

});