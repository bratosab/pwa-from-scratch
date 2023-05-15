const contactsBtn = document.getElementById("contacts");
contactsBtn.addEventListener("click", (event) => getContacts());

const attributes = ["name", "email", "tel", "icon"];
const options = { multiple: true };
const supported = "contacts" in navigator && "ContactsManager" in window;

async function getContacts() {
  if (supported) {
    const contacts = await navigator.contacts.select(attributes, options);
    console.log(contacts);
  } else {
    alert("contacts picker isn't supported on this device");
  }
}
