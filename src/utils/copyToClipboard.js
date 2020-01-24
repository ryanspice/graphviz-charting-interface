export default function copyToClipboard() {

  /* Get the text field */
  const input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = localStorage.getObject('code') || '';

  const copyText = input;

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  copyText.remove();
}
