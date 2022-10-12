
    // ? Initiate Variables
    let div_modal = document.createElement('div')
    let div_modal_box = document.createElement('div')
    let label_modal_box = document.createElement('label')
    let h3_content_modal = document.createElement('h3')
    let p_modal_content = document.createElement('p')

    // ? Adding class on variable
    div_modal.classList.add('modal')
    div_modal_box.classList.add('modal-box')
    label_modal_box.classList.add('btn', 'btn-sm', 'btn-circle', 'absolute', 'right-2', 'top-2')
    h3_content_modal.classList.add('text-lg', 'font-bold')
    p_modal_content.classList.add('py-4')
    console.log(div_modal)

const CardEdi = document.getElementById('card-edi');
CardEdi.addEventListener('click', () => {
    console.log(`Edi's card has been clicked`)
    // ? Initiate Variables
    let div_modal = document.createElement('div')
    let div_modal_box = document.createElement('div')
    let label_modal_close = document.createElement('label')
    let h3_content_modal = document.createElement('h3')
    let p_modal_content = document.createElement('p')

    // ? Adding class on variable
    div_modal.classList.add('modal')
    div_modal_box.classList.add('modal-box')
    label_modal_close.classList.add('btn', 'btn-sm', 'btn-circle', 'absolute', 'right-2', 'top-2')
    h3_content_modal.classList.add('text-lg', 'font-bold')
    p_modal_content.classList.add('py-4')

    // ? Modified element
    label_modal_close.innerText = '✕'
    h3_content_modal.innerText = 'Hello there, my name is Edi Dharmawan!'
    p_modal_content.innerHTML = `I'm from Indramayu, that's part of west java tho...hehe, and i'm studying at Gunadarma University now`
    
    // ? Appending element
    div_modal.append(div_modal_box)
    div_modal_box.append(label_modal_close)
    div_modal_box.append(h3_content_modal)
    div_modal_box.append(p_modal_content)
    
    // ? Adding attribute element
    label_modal_close.setAttribute('for', 'modal-edi')
})