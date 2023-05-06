import React, { useState } from 'react'
import { IContact } from './IContact'
import ContactItem from './ContactItem';

export default function DisplayContact() {

    const [data,setData] = useState<IContact[]>([]);

    const [form,setForm] = useState<IContact>({
        contactEmail : "",
        contactName : "",
        contactNumber: ""
    });

    const onchange = (e: React.ChangeEvent<HTMLInputElement>)=> {

        setForm({...form, [e.target.name]: e.target.value});


    }

    const remove = (index: number)=> {

        let t = [...data];
        t.slice(index,1);

        setData(t);


    }
    const  mysubmit = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        let d = [...data];

        d.push(form);
        setData(d);

        console.log(d);

    }

  return (
    <div>

        <form onSubmit={mysubmit}>

            <input type='text' name= "contactEmail"  onChange={onchange}/>
            <input type='text' name= "contactName" onChange={onchange}/>
            <input type='text' name= "contactNumber" onChange={onchange}/>

            <input type='submit' value='save' />

         


        </form>
        <ContactItem myitem={data} myremove = {remove}/>

    </div>
  )
}
