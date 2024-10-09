function factoryPerson(nome,dataNascimento,numeroTelefone,email){
    const person ={
        name: nome,
        birthdate:dataNascimento,
        telefone:numeroTelefone,
        email:email
    }
    return person;
}

function save(email,person){
    localStorage.setItem(email,JSON.stringify(person));
}


function createPerson(){

    //coletando dados
    let nome = document.getElementById('m-nome').value;
    let dataNascimento = document.getElementById('m-data').value;
    let numeroTelefone = document.getElementById('m-telefone').value;
    let email= document.getElementById('m-email').value;

    person=factoryPerson(nome,dataNascimento,numeroTelefone,email);

    if(getPerson(email)===null){
        save(email,person);
        return getPerson(email);
    }else{
        return null;
    }
}

function getPerson(email){
    let person = localStorage.getItem(email);
    if(person!==null){
        //console.log(JSON.parse(person));
        return person;
    }else{
        return null;
    }
}

function deletePerson(){
    let email = document.getElementById('emailDelete').value;
    person=getPerson(email);
    if(person!==null){
        localStorage.removeItem(email);
        console.log(person);
        return person;
    }else{
        return null;
    }
    
}

function editPerson(){
    //coletando dados
    let nome = document.getElementById('edit-nome').value;
    let dataNascimento = document.getElementById('edit-data').value;
    let numeroTelefone = document.getElementById('edit-telefone').value;
    let email= document.getElementById('edit-email').value;
    let pers = factoryPerson(nome,dataNascimento,numeroTelefone,email);
    save(email, pers);
    return getPerson(email);
}


function personFormater(person){
    person = JSON.parse(person)
    let formated=`Nome: ${person.name}
Data de nascimento: ${person.birthdate}
Numero de Telefone: ${person.telefone}
E-mail: ${person.email}`
//console.log(formated);
    return formated;
}



const modalCreate = document.querySelector('.modal-create');

function openCreateModal(edit = false, index = 0) {
    modalCreate.classList.add('active')
    modalCreate.onclick = e => {
      if (e.target.className.indexOf('modal-create') !== -1) {
        modalCreate.classList.remove('active')
      }
    }
    
}


const modalSearch = document.querySelector('.modal-search');

function openSearchModal() {
    modalSearch.classList.add('active')
    modalSearch.onclick = e => {
      if (e.target.className.indexOf('modal-search') !== -1) {
        modalSearch.classList.remove('active')
      }
    }
}

const modalDelete = document.querySelector('.modal-delete');

function openDeleteModal() {
    modalDelete.classList.add('active')
    modalDelete.onclick = e => {
      if (e.target.className.indexOf('modal-delete') !== -1) {
        modalDelete.classList.remove('active')
      }
    }
}

const modalEdit = document.querySelector('.modal-edit');

function openEditModal(person) {
    modalEdit.classList.add('active')
    modalEdit.onclick = e => {
      if (e.target.className.indexOf('modal-edit') !== -1) {
        modalEdit.classList.remove('active')
      }
    }
    
    //carregando no modal os dados atuais do objeto que será atualizado
    personInfo=JSON.parse(person)
    document.getElementById('edit-nome').setAttribute('value',personInfo.name);
    document.getElementById('edit-telefone').setAttribute('value',personInfo.telefone);
    document.getElementById('edit-email').setAttribute('Readonly', 'Readonly');
    document.getElementById('edit-email').setAttribute('value', personInfo.email);
    document.getElementById('edit-data').setAttribute('value',personInfo.birthdate);
    
}
