$.fn.enterKey = (fnc) => {
  return $(this).each(() => {
    $(this).keypress((ev) => {
      var keycode = (ev.keyCode ? ev.keyCode : ev.which);
      if (keycode == '13') {
        fnc.call(this, ev);
      }
    });
  });
};

let captchaCard = ' \
<a href="javascript:loadForEdit(\'{captchaId}\');" class="custom-card"> \
  <div class="card"> \
    <img src="{image}" class="card-img-top" id="{captchaId}" /> \
    <div class="card-body"> \
      <p class="card-text"><small>Created At: {createdAt}</small></p> \
    </div> \
  </div> \
</a>';

let captchaCardForEdit = ' \
<div class="card"> \
  <img src="{image}" class="card-img-top" /> \
  <div class="card-body"> \
    <p class="card-text">Text: <input type="text" id="{captchaId}" name="captchaText"  /></p> \
  </div> \
</div>';

$(document).ready(() => {
  setInterval(() => { listCaptchas(); }, 500);
  //listCaptchas();
});

$('#input').enterKey(() => {
  let textInput = $('input[name=captchaText]');
  updateCaptchaWithText(textInput.attr('id'), textInput.val());
});

const listCaptchas = () => {
  $.ajax({
    method: 'GET',
    url: '/api/captcha/',
    cache: false,
    data: {
      status: 'PENDING'
    }
  })
    .done((res) => {
      if (res.length == 0) {
        $('#captchaList').html('There\'s no captcha to show');
      } else {
        let responseAsHTML = '';
        for (let i = 0; i < res.length; i++) {
          let createdAt = moment(res[i].created_at).format('DD/MM/YYYY HH:mm:ss');
          responseAsHTML += captchaCard
            .replace(/\{captchaId\}/g, res[i].captcha)
            .replace('{image}', res[i].captchafile)
            .replace('{createdAt}', createdAt);
          if (i == 0) {
            if ($('#principal').html() == '')
              setTimeout(() => { loadForEdit(res[i].captcha); }, 100);
          }
        }
        $('#captchaList').html(responseAsHTML);
      }
    });
};

const loadForEdit = (id) => {
  let html = captchaCardForEdit
    .replace('{image}', $('#' + id).attr('src'))
    .replace('{captchaId}', id)
  $('#principal').html(html);
  $('input[name=captchaText]').focus();
};

const updateCaptchaWithText = (id, text) => {
  $.ajax({
    method: 'PUT',
    url: '/api/captcha/' + id,
    cache: false,
    data: {
      status: 'SUCCESS',
      is_correct: true,
      text: text
    }
  })
    .done((res) => {
      $('#principal').html('');
      $('#successMessage').html('[' + moment().format('HH:mm:ss') + '] Captcha [id=' + res.captcha + '] updated...');
    });
};