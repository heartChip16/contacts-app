const URL = "https://randomuser.me/api/?nat=us&results=50&inc=nat,name,email,id,picture,cell&seed=%222dbc65bb30d3912f%22";

export async function loadContacts() {
    const result = await fetch(URL);
    return (await result.json())?.results;
}


export async function loadContactByID(contactID) {
    const contacts = await loadContacts();
    return contacts.find(contact => contact.id.value === contactID);
}
