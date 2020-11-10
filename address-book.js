console.log("<------------------Welcome to the Address Book System------------------>");

class Contact {

    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        const FIRST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (FIRST_NAME_REGEX.test(firstName)) {
            this._firstName = firstName;
        }
        else throw "First Name : " + firstName + " is Invalid!";

    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const LAST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (LAST_NAME_REGEX.test(lastName)) {
            this._lastName = lastName;
        }
        else throw "Last Name : " + lastName + " is Invalid!";

    }

    get address() {
        return this._address;
    }
    set address(address) {
        const ADRESS_REGEX = RegExp("[A-Za-z0-9- ]{4,}");
        if (ADRESS_REGEX.test(address)) {
            this._address = address;
        }
        else throw "Address : " + address + " is Invalid!";
    }

    get city() {
        return this._city;
    }
    set city(city) {
        const CITY_REGEX = RegExp("[A-Za-z ]{4,}");
        if (CITY_REGEX.test(city)) {
            this._city = city;
        }
        else throw "City : " + city + " is Invalid!";
    }

    get state() {
        return this._state;
    }
    set state(state) {
        const STATE_REGEX = RegExp("[A-Za-z ]{4,}");
        if (STATE_REGEX.test(state)) {
            this._state = state;
        }
        else throw "State : " + state + " is Invalid!";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const ZIP_REGEX = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (ZIP_REGEX.test(zip)) {
            this._zip = zip;
        }
        else throw "Zip : " + zip + " is Invalid!";
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const PHONE_NUMBER_REGEX = RegExp("^[1-9]{1}[0-9]{9}$");
        if (PHONE_NUMBER_REGEX.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw "Phone Number : " + phoneNumber + " is Invalid!";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        const EMAIL_REGEX = RegExp("^[a-z0-9]+(([\\._+-][a-z0-9]+)?)\\@[a-z0-9]+\\.(([a-z]{2,4})(\\.[a-z]{2,4})?)$");
        if (EMAIL_REGEX.test(email)) {
            this._email = email;
        }
        else throw "Email : " + email + " is Invalid!";
    }

    toString() {
        return "First Name: " + this.firstName + " | Last Name: " + this.lastName + " | Address: "
            + this.address + " | City: " + this.city + " | State: " + this.state + " | Zip: " + this.zip +
            " | Phone Number: " + this.phoneNumber + " | Email: " + this.email + "\n";
    }
}

//UC1 : Creating New Contact Object
let contact = new Contact("Aditya", "Verma", "8/11 LDA Colony", "Lucknow", "Uttar Pradesh", "226014", 9898808868, "aditya@gmail.com");
console.log(contact.toString());

//UC2 : Checking For Invalid Fields
{
    try {
        contact.firstName = "Jo";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.lastName = "Li";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.address = "Hom";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.city = "Lko";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.state = "UP";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.zip = "3214560";
    } catch (error) {
        console.error(error);
    }
    try {
        contact.phoneNumber = 93216549874;
    } catch (error) {
        console.error(error);
    }
    try {
        contact.email = "abc.ad.@gmail.com";
    } catch (error) {
        console.error(error);
    }
    console.log("\nContact After Setting Fields : \n" + contact.toString());
}

//UC3 : Create an Address Book Array and Add New Contacts to it.
let contactToAdd;
let addressBookArray = new Array();
try {
    addressBookArray.push(contact);
    contactToAdd = new Contact("Ashish", "Mishra", "11/1 Kori Colony", "Lucknow", "Uttar Pradesh", "216 012", 9899908868, "ashish@gmail.com");
    addressBookArray.push(contactToAdd);
    contactToAdd = new Contact("Bhumesh", "Kumar", "19/120 Shringar Nagar", "Kanpur", "Uttar Pradesh", "288014", 9898965868, "bhumesh@gmail.com");
    addressBookArray.push(contactToAdd);
    console.log("ADDRESS BOOK ARRAY :");
    addressBookArray.forEach(contact => process.stdout.write(contact.toString()));
} catch (error) {
    console.error(error);
}

//UC4 : Find and Edit Existing Contact using their Name
try {
    editField("Aditya", "Verma", "address", "1/88 LDA Colony");
} catch (error) {
    console.error(error);
}
function findContact(firstName, lastName) {
    let contact = addressBookArray.find(contact => contact._firstName == firstName && contact._lastName == lastName);
    if (contact != undefined) {
        return contact;
    } else throw "\nContact : " + firstName + " " + lastName + " doesn't exist in the Address Book Array";

}
function editField(firstName, lastName, fieldName, updatedField) {
    try {
        let contact = findContact(firstName, lastName);
        switch (fieldName) {
            case "firstName":
                contact.firstName = updatedField;
                break;
            case "lastName":
                contact.lastName = updatedField;
                break;
            case "address":
                contact.address = updatedField;
                break;
            case "city":
                contact.city = updatedField;
                break;
            case "state":
                contact.state = updatedField;
                break;
            case "zip":
                contact.zip = updatedField;
                break;
            case "phoneNumber":
                contact.phoneNumber = updatedField;
                break;
            case "email":
                contact.email = updatedField;
                break;
            default:
                throw "Field for Updation : " + fieldName + " is Invalid!";
        }
        console.log("ADDRESS BOOK ARRAY AFTER UPADTING CONTACT : " + firstName + " " + lastName);
        addressBookArray.forEach(contact => process.stdout.write(contact.toString()));
    } catch (error) {
        console.error(error);
    }
}

//UC5 : Find and Delete a Contact From Address Book Array
try {
    deleteContact("Bhumesh", "Kumar");
} catch (error) {
    console.error(error);
}
function deleteContact(firstName, lastName) {
    try {
        let index = addressBookArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
        if (index != -1) {
            addressBookArray.splice(index, 1);
            console.log("ADDRESS BOOK ARRAY AFTER DELETING CONTACT : " + firstName + " " + lastName);
            addressBookArray.forEach(contact => process.stdout.write(contact.toString()));
        } else throw "\nContact : " + firstName + " " + lastName + " doesn't exist in the Address Book Array";
    } catch (error) {
        console.error(error);
    }
}


