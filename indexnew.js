onSuccess: function (result) {
                    debugger;
                    combo.empty();
                    $(result).each(function () {
                        var option;

                        option = document.createElement('option');
                        option.value = this.Id;

                        $(option).appendTo(combo);
                    });
                }

let opacityPercentage = 100;

document.addEventListener('DOMContentLoaded', () => {
  const arrowElement = document.getElementById('arrow');

  window.onscroll = () => {
    console.log('scrolling')
    opacityPercentage = Math.max(100 - window.pageYOffset, 0);
    arrowElement.style.opacity = opacityPercentage / 100;
  }
});