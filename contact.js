const fs = require('fs')
const path = require('path')

const contactPath = path.join(__dirname, './db/contacts.json')

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactPath, (err, data) => {
    if (err) {
      console.error(err)
    }
    const rawData = data.toString()
    if (!rawData) {
      process.exit(1)
    }
    const contactList = JSON.parse(rawData)
    if (contactList.length === 0) {
      console.log('Contact list is empty')
      return
    }
    console.table(contactList)
  })
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts, removeContact, addContact, getContactById }
