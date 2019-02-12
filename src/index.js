import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function getName(mahasiswa){
    return 'Name : ' + mahasiswa.name + 'NIM : ' +mahasiswa.nim;
}

function SelamatDatang(mahasiswa){
    if(mahasiswa.angkatan < 2019 ){
        return "Selamat datang Maba" + mahasiswa.nama;
    }else{
        return "....";
    }
    }

function tick(){
    const element = (
        <div>
            <h1>
                Hello Arum!!
            </h1>
            <h2> It is {new Date().toLocaleTimeString()}.
                </h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('root'));
}
setInterval(tick, 1000);


const mahasiswa = {
    name : 'Arum',
    nim : '401008',
    angkatan : 2018
}

const element = (
    <h1>
        mahasiswa {SelamatDatang(mahasiswa)}
    </h1>);






//const element = (
    //<h1>
        //mahasiswa, {getName(mahasiswa)}
    //</h1>
//);



//const name = 'Arum Puspitasari';
//const element = <h1>Nama Saya adalah, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
  );

//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
