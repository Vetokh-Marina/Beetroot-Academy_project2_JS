
// ------------Добавить картинки
$(document).ready(function () {
   let newGalleryBlock = true;
   $('.gallery__btn').click(() => {
      if (newGalleryBlock) {
         $('.gallery__box:first').clone().appendTo('section.gallery').insertBefore('.gallery__btn').show();
         newGalleryBlock = false;
      } else {
         $('.gallery__box:last').hide();
         newGalleryBlock = true;
      }
   });
});

// --------------показать текст
$(document).ready(function () {
   let isShow1 = false;
   let isShow2 = false;
   $('#btnMore').click(function () {
      let section = $(this).parent();
      let clonText = section.find('.content__text:first').clone();
      if (!isShow1) {
         clonText.insertAfter(section.find('.content__text:first'));
         isShow1 = true;
      } else {
         section.find('.content__text:first').next('p').remove();
         isShow1 = false;
      }
   })
   $('#btnMore2').click(function () {
      let section = $(this).parent();
      let clonText = section.find('.content__text:first').clone();
      if (!isShow2) {
         clonText.insertAfter(section.find('.content__text:first'))
         isShow2 = true;
      } else {
         section.find('.content__text:first').next('p').remove();
         isShow2 = false;
      }
   })
})